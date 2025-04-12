'use client';

import { useForm, useFieldArray, Controller, FieldError } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ContactType } from '../models/contacts.model';
import { Slider } from '@/components/ui/slider';
import { JSX } from 'react';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FormActions, FormSectionKeysEnum } from '../models/form-data.model';
import * as React from 'react';
import { hobySettings } from '../models/hobby.model';
import { useUser } from '../context/user.context';
import { apiCreateCV, apiGetCVById, apiUpdateCV, fetchFonts, removePhoto } from '../service/api.service';
import { CVSettings, DefaultSettings, ICVDataModel } from '../models/cv-data.model';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { ImageSelector } from './image-selector';
import Image from 'next/image';
import { IMAGE_URL } from '../lib/api';
import { ItemModel } from '../models/item.model';
import { applyFont, applySettings, cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { HeaderComponent } from './header';
import { CVBase } from './cv-base';
import { HexColorPicker } from 'react-colorful';
import { Icon } from '@/components/icon';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Check, ChevronsUpDown } from 'lucide-react';
import { ConfirmationModal, ConfirmationModalMode } from './confirmation-modal';

interface CVFormProps {
  isEdit: boolean;
  cvId: string;
}

const contactSchema = z
  .object({
    type: z.nativeEnum(ContactType),
    value: z.string().min(1, { message: 'Field is required' }),
  })
  .superRefine((data, ctx) => {
    if (data.type === ContactType.Email) {
      const emailCheck = z.string().email();
      const result = emailCheck.safeParse(data.value);

      if (!result.success) {
        ctx.addIssue({
          path: ['value'],
          code: z.ZodIssueCode.custom,
          message: 'Invalid email address',
        });
      }
    }

    if (data.type === ContactType.Phone) {
      const phoneRegex = /^\+?\d{7,15}$/;
      if (!phoneRegex.test(data.value)) {
        ctx.addIssue({
          path: ['value'],
          code: z.ZodIssueCode.custom,
          message: 'Invalid phone number. Please use mask (+3809997788)',
        });
      }
    }
  });

const skillSchema = z.object({
  name: z.string().min(1, {
    message: 'Field is required.',
  }),
  level: z.number(),
});

const languagesSchema = z.object({
  name: z.string().min(1, {
    message: 'Field is required.',
  }),
  level: z.number(),
});

const educationSchema = z.object({
  school: z.string().min(1, {
    message: 'Field is required.',
  }),
  faculty: z.string().optional(),
  degree: z.string().min(1, {
    message: 'Field is required.',
  }),
  year: z.string().min(1, {
    message: 'Field is required.',
  }),
  city: z.string().optional(),
  country: z.string().optional(),
});

const hobbySchema = z.object({
  iconId: z.string().optional(),
});

const certificationsSchema = z.object({
  details: z.string().min(1, {
    message: 'Field is required.',
  }),
});

const experienceSchema = z.object({
  company: z.string().min(1, {
    message: 'Field is required.',
  }),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  role: z.string().min(1, {
    message: 'Field is required.',
  }),
  description: z.string().min(1, {
    message: 'Field is required.',
  }),
});

const formSchema = z.object({
  contacts: z.array(contactSchema).optional(),
  skills: z.array(skillSchema).optional(),
  education: z.array(educationSchema).optional(),
  hobby: z.array(hobbySchema).optional(),
  summaryDescription: z.string().optional(),
  positionDescription: z.string().optional(),
  name: z.string().min(1, {
    message: 'Field is required.',
  }),
  experience: z.array(experienceSchema).optional(),
  languages: z.array(languagesSchema).optional(),
  certifications: z.array(certificationsSchema).optional(),
  imageName: z.string().optional(),
  imageUrl: z.string().optional(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
});

type FormValues = z.infer<typeof formSchema>;

export default function CVForm({ isEdit, cvId }: CVFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    shouldFocusError: false,
  });

  const { user } = useUser();
  const router = useRouter();
  const [reloadKey, setReloadKey] = React.useState(0);
  const [currentCvData, setcurrentCvData] = React.useState<ICVDataModel | null>(null);
  const [selectedContact, setSelectedContact] = React.useState<{ [key: string]: ContactType }>({});
  const [isPreviewMode, setIsPreviewMode] = React.useState<boolean>(false);
  const [cvDataToUse, setCvDataToUse] = React.useState<ICVDataModel | null>(null);
  const [getCvSettings, setCvSettings] = React.useState<CVSettings>({
    ...DefaultSettings,
  });
  const [openCombo, setOpenCombo] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [allFonts, setAllFonts] = React.useState<string[]>([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalMode, setModalMode] = React.useState<ConfirmationModalMode>(ConfirmationModalMode.Danger);
  const [currentFormAction, setCurrentFormAction] = React.useState<FormActions>(FormActions.None);
  const [isSettingsOpened, setIsSettingsOpened] = React.useState<boolean>(false);
  const isSubmitRef = React.useRef(false);
  
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  let currentFontLink: HTMLLinkElement | null = null;

  useEffect(() => {
    if (isEdit && cvId !== '') {
      apiGetCVById(cvId).then((cvData) => {
        setcurrentCvData(cvData.data);
        if (cvData.data.settings) {
          setCvSettings(cvData.data.settings);
        }
        form.reset({
          name: cvData.data.name,
          imageName: cvData.data.imageName,
          imageUrl: cvData.data.imageUrl,
          firstName: cvData.data.firstName,
          lastName: cvData.data.lastName,
          ...cvData.data.items,
        } as FormValues);
      });
    }

    fetchFonts().then(setAllFonts);
  }, [isEdit, cvId, reloadKey]);

  const visibleFonts =
    search.length > 0
      ? allFonts.filter((font) => font.toLowerCase().includes(search.toLowerCase()))
      : allFonts.slice(0, 10);

  const renderArraySection = (
    title: string,
    fields: any[],
    append: any,
    remove: any,
    renderFields: (index: number) => JSX.Element,
  ) => (
    <div className="space-y-2">
      <h2>{title}</h2>
      {fields.map((_field, index) => (
        <div key={`${title}-${index}`} className="cv-row flex flex-row gap-2 border p-2 rounded-md">
          {renderFields(index)}
          <div className="col">
            <Button type="button" variant="outline" onClick={() => remove(index)}>
              Remove
            </Button>
          </div>
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        disabled={title === FormSectionKeysEnum.Hobby && hobySettings.length === form.getValues().hobby?.length }
        onClick={() =>
          append(
            title === FormSectionKeysEnum.Skills || title === FormSectionKeysEnum.Languages
              ? { name: '', level: 50 }
              : {},
          )
        }
      >
        Add
      </Button>
    </div>
  );

  const contactArray = useFieldArray({ control, name: 'contacts' });
  const skillArray = useFieldArray({ control, name: 'skills' });
  const educationArray = useFieldArray({ control, name: 'education' });
  const hobbyArray = useFieldArray({ control, name: 'hobby' });
  const experienceArray = useFieldArray({ control, name: 'experience' });
  const languagesArray = useFieldArray({ control, name: 'languages' });
  const certificationsArray = useFieldArray({ control, name: 'certifications' });

  const imageUrl = form.watch('imageUrl');

  const goBack = () => {
    router.push('/');
  };

  const getCvDataToUse = (data: FormValues) => {
    const constructedItem = {
      contacts: data.contacts,
      skills: data.skills,
      education: data.education,
      hobby: data.hobby,
      positionDescription: data.positionDescription,
      summaryDescription: data.summaryDescription,
      experience: data.experience,
      languages: data.languages,
      certifications: data.certifications,
    };

    if (isEdit && currentCvData) {
      setCvDataToUse({
        ...currentCvData,
        name: data.name,
        firstName: data.firstName,
        lastName: data.lastName,
        items: constructedItem as ItemModel,
        settings: getCvSettings,
      });
    } else {
      const result = { id: '', items: constructedItem };
      setCvDataToUse({
        ...result,
        name: data.name,
        imageName: data.imageName,
        imageUrl: data.imageUrl,
        firstName: data.firstName,
        lastName: data.lastName,
        createdBy: user!.id,
        settings: getCvSettings,
      } as ICVDataModel);
    }
  };

  const onSubmit = async () => {
    setCurrentFormAction(FormActions.Submit);
    setModalMode(ConfirmationModalMode.Warning)
    setModalOpen(true);
  };

  const submitConfirmation = async () => {
    if (!user) {
      return;
    }
    if (!cvDataToUse) {
      return;
    }

    if (isEdit && currentCvData) {
      await apiUpdateCV(cvId, {
        ...cvDataToUse,
        settings: getCvSettings,
      });
      toast('CV has been updated successfully');
    } else {
      await apiCreateCV({
        ...cvDataToUse,
        settings: getCvSettings,
      });
      toast('CV has been created successfully');
    }
    goBack();
  }

  const goToPreview = (data: FormValues) => {
    if (!user) {
      return;
    }
    getCvDataToUse(data);

    if (isSubmitRef.current) {
      onSubmit();
    } else {
      setIsPreviewMode(true);
      applySettings(getCvSettings, currentFontLink);
    }
  };

  const goToEdit = () => {
    setIsPreviewMode(false);
  };

  const getImageUrl = (url: string): string => {
    return `${IMAGE_URL}/${url}`;
  };

  const getContactPlaceholder = (type: ContactType) => {
    switch (type) {
      case ContactType.Phone:
        return '+3809997788';

      default:
        return 'Value';
    }
  };

  const onBgColorChange = (val: string) => {
    setCvSettings({
      ...getCvSettings,
      bgColor: val,
    });
    document.documentElement.style.setProperty('--main-cv-bg-color', val);
  };

  const onHeadingsColorChange = (val: string) => {
    setCvSettings({
      ...getCvSettings,
      headingsColor: val,
    });
    document.documentElement.style.setProperty('--main-cv-headings-color', val);
  };

  const onTextColorChange = (val: string) => {
    setCvSettings({
      ...getCvSettings,
      textColor: val,
    });
    document.documentElement.style.setProperty('--main-cv-text-color', val);
  };

  const onTextSizeChange = (val: string) => {
    let size = `${val}px`;
    setCvSettings({
      ...getCvSettings,
      textSize: `${val}px`,
    });
    document.documentElement.style.setProperty('--main-cv-text-size', size);
  };

  const getFontSize = (): number => {
    const val = getCvSettings.textSize;
    return parseFloat(val.slice(0, val.indexOf('px')));
  };

  const handleFontChange = (fontFamily: string) => {
    setCvSettings({
      ...getCvSettings,
      font: fontFamily,
    });
    applyFont(currentFontLink, fontFamily);
  };

  const removeImage = () => {
    setCurrentFormAction(FormActions.RemovePhoto);
    setModalMode(ConfirmationModalMode.Danger)
    setModalOpen(true);
  }

  const handleConfirm = async () => {
    setModalOpen(false);
    switch (currentFormAction) {
      case FormActions.RemovePhoto: {
        if (currentCvData && currentCvData.imageName && currentCvData._id) {
          try {
              await removePhoto(currentCvData.imageName, isEdit, currentCvData._id);
              setReloadKey((prev) => prev + 1);
              toast('Photo has been deleted successfully');

            } catch {
              toast('Error ocurred');
            }
        }
      }
      break;

      case FormActions.Submit: {
        submitConfirmation();
      }
    
      default:
        break;
    }
  }

  return (
    <>
      <ConfirmationModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        onContinue={handleConfirm}
        mode={modalMode}
      />
      <HeaderComponent />
      {isPreviewMode && cvDataToUse ? (
        <div className="preview-section flex flex-row">
          <div className="cv-preview">
            <CVBase cvData={cvDataToUse} />
          </div>
          <div className={`preview-controls ${isSettingsOpened ? 'opened' : ''}`}>
            <div className="flex flex-row justify-evenly items-center spacing">
              <div className='flex flex-row items-center'>
                <Button variant="outline" onClick={goToEdit}>
                  Back
                </Button>
              </div>
              <div className='flex flex-row items-center'>
                <Button variant="outline" onClick={onSubmit}>
                  Submit
                </Button>
              </div>
              <div className='flex flex-row items-center'>
                <Button variant="outline" onClick={() => {
                  setIsSettingsOpened(!isSettingsOpened);
                }}>
                  {isSettingsOpened ? 'Close Settings' : 'Open Settings'}
                </Button>
              </div>
            </div>
            <h2>Settings</h2>
            <div className="flex flex-row justify-between items-center spacing">
              <div>
                <h3>Controls Color</h3>
                <HexColorPicker color={getCvSettings.bgColor} onChange={onBgColorChange} />
              </div>
              <div>
                <h3>Headings Color</h3>
                <HexColorPicker
                  color={getCvSettings.headingsColor}
                  onChange={onHeadingsColorChange}
                />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center spacing">
              <div>
                <h3>Text Color</h3>
                <HexColorPicker color={getCvSettings.textColor} onChange={onTextColorChange} />
              </div>
            </div>
            <div className="spacing">
              <h3>Text size</h3>
              <p>{getFontSize()}</p>
              <div className="slider-container">
                <Slider
                  min={10}
                  max={40}
                  step={1}
                  value={[getFontSize()]}
                  onValueChange={(val) => onTextSizeChange(`${val[0]}`)}
                />
              </div>
            </div>
            <div>
              <h3>Select Font</h3>
              {visibleFonts.length ? (
                <Popover open={openCombo} onOpenChange={setOpenCombo}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={openCombo}
                      className="w-[250px] justify-between"
                    >
                      {getCvSettings.font || 'Select font...'}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[250px] p-0">
                    <Command>
                      <CommandInput
                        placeholder="Search font..."
                        value={search}
                        onValueChange={setSearch}
                      />
                      <CommandList>
                        <CommandEmpty>No fonts found.</CommandEmpty>
                        <CommandGroup>
                          {visibleFonts.map((font) => (
                            <CommandItem
                              key={font}
                              value={font}
                              onSelect={() => {
                                handleFontChange(font);
                                setOpenCombo(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  'mr-2 h-4 w-4',
                                  getCvSettings.font === font ? 'opacity-100' : 'opacity-0',
                                )}
                              />
                              {font}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <div className="cv-from">
          <div className="wide-container">
            <div className="controls-bar flex flex-row justify-between">
              <Button variant="outline" onClick={goBack}>
                Back
              </Button>
              <div className="flex flex-row submit-bar">
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => {
                    isSubmitRef.current = false;
                    const form = document.getElementById('cv-form') as HTMLFormElement;
                    form?.requestSubmit();
                  }}
                >
                  Preview
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => {
                    isSubmitRef.current = true;
                    const form = document.getElementById('cv-form') as HTMLFormElement;
                    form?.requestSubmit();
                  }}
                >
                  Submit
                </Button>
              </div>
            </div>
            <h1 className="title">{isEdit ? 'Edit CV' : 'Create CV'}</h1>
            {imageUrl ? (
              <div className="image-section flex flex-row items-center">
                <div className="image">
                  <Image
                    src={getImageUrl(imageUrl)}
                    alt="Photo"
                    width={150}
                    height={150}
                    priority
                    className="rounded-full"
                  />
                </div>
                <Button variant="outline" onClick={removeImage}>
                  Remove Image
                </Button>
              </div>
            ) : (
              <ImageSelector
                isEdit={isEdit}
                cvId={cvId}
                onComplete={(result) => {
                  if (isEdit) {
                    setReloadKey((prev) => prev + 1);
                  } else {
                    form.setValue('imageUrl', result.imageUrl);
                    form.setValue('imageName', result.imageName);
                  }
                }}
              ></ImageSelector>
            )}
            <Form {...form}>
              <form id="cv-form" onSubmit={handleSubmit(goToPreview)} className="space-y-6">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild className="tooltip-trigger">
                      <Input
                        {...register(`name`)}
                        placeholder="Enter CV name"
                        className={cn(errors.name && 'border-red-500 ring-red-500 error')}
                      />
                    </TooltipTrigger>
                    {errors.name && (
                      <TooltipContent side="top" align="center">
                        <p className="error">{errors.name?.message}</p>
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
                <div className="cv-row name-section flex flex-row gap-2 border p-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild className="tooltip-trigger">
                        <Input
                          {...register(`firstName`)}
                          className={cn(errors.firstName && 'border-red-500 ring-red-500 error')}
                          placeholder="First Name"
                        />
                      </TooltipTrigger>
                      {errors.firstName && (
                        <TooltipContent side="top" align="center">
                          <p className="error">{errors.firstName?.message}</p>
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild className="tooltip-trigger">
                        <Input
                          {...register(`lastName`)}
                          className={cn(errors.lastName && 'border-red-500 ring-red-500 error')}
                          placeholder="Last Name"
                        />
                      </TooltipTrigger>
                      {errors.lastName && (
                        <TooltipContent side="top" align="center">
                          <p className="error">{errors.lastName?.message}</p>
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Textarea {...register('summaryDescription')} placeholder="Summary description" />
                <Textarea {...register('positionDescription')} placeholder="Desired position" />
                {[
                  {
                    key: FormSectionKeysEnum.Contact,
                    array: contactArray,
                    renderFields: (i: number) => {
                      return (
                        <>
                          <div className="col">
                            <div className="select">
                              <FormField
                                control={control}
                                name={`contacts.${i}.type`}
                                render={({ field }) => (
                                  <FormItem>
                                    <Select
                                      onValueChange={(val: ContactType) => {
                                        const selectedVal = {
                                          ...selectedContact,
                                        };
                                        selectedVal[i] = val;
                                        setSelectedContact(selectedVal);
                                        field.onChange(val);
                                      }}
                                      defaultValue={field.value}
                                    >
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Select contact type" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        {Object.values(ContactType).map((val) => (
                                          <SelectItem key={val} value={val}>
                                            {val}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                          <div className="col">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild className="tooltip-trigger">
                                  <Input
                                    {...register(`contacts.${i}.value`)}
                                    className={cn(
                                      errors.contacts &&
                                        errors.contacts[i] &&
                                        'border-red-500 ring-red-500 error',
                                    )}
                                    placeholder={getContactPlaceholder(selectedContact[i])}
                                  />
                                </TooltipTrigger>
                                {errors.contacts && errors.contacts[i] && (
                                  <TooltipContent side="top" align="center">
                                    <p className="error">{errors.contacts[i].value?.message}</p>
                                  </TooltipContent>
                                )}
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </>
                      );
                    },
                  },
                  {
                    key: FormSectionKeysEnum.Skills,
                    array: skillArray,
                    renderFields: (i: number) => (
                      <>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild className="tooltip-trigger">
                              <Input
                                {...register(`skills.${i}.name`)}
                                className={cn(
                                  errors.skills &&
                                    errors.skills[i] &&
                                    'border-red-500 ring-red-500 error',
                                )}
                                placeholder="Skill Name"
                              />
                            </TooltipTrigger>
                            {errors.skills && errors.skills[i] && (
                              <TooltipContent side="top" align="center">
                                <p className="error">{errors.skills[i].name?.message}</p>
                              </TooltipContent>
                            )}
                          </Tooltip>
                        </TooltipProvider>
                        <Controller
                          name={`skills.${i}.level`}
                          control={control}
                          render={({ field }) => (
                            <>
                              <span>{[field.value]}</span>
                              <div className="slider-container">
                                <Slider
                                  min={0}
                                  max={100}
                                  step={1}
                                  value={[field.value]}
                                  onValueChange={(val) => field.onChange(val[0])}
                                />
                              </div>
                            </>
                          )}
                        />
                      </>
                    ),
                  },
                  {
                    key: FormSectionKeysEnum.Languages,
                    array: languagesArray,
                    renderFields: (i: number) => (
                      <>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild className="tooltip-trigger">
                              <Input
                                {...register(`languages.${i}.name`)}
                                className={cn(
                                  errors.languages &&
                                    errors.languages[i] &&
                                    'border-red-500 ring-red-500 error',
                                )}
                                placeholder="Language"
                              />
                            </TooltipTrigger>
                            {errors.languages && errors.languages[i] && (
                              <TooltipContent side="top" align="center">
                                <p className="error">{errors.languages[i].name?.message}</p>
                              </TooltipContent>
                            )}
                          </Tooltip>
                        </TooltipProvider>
                        <Controller
                          name={`languages.${i}.level`}
                          control={control}
                          render={({ field }) => (
                            <>
                              <span>{[field.value]}</span>
                              <div className="slider-container">
                                <Slider
                                  min={0}
                                  max={100}
                                  step={1}
                                  value={[field.value]}
                                  onValueChange={(val) => field.onChange(val[0])}
                                />
                              </div>
                            </>
                          )}
                        />
                      </>
                    ),
                  },
                  {
                    key: FormSectionKeysEnum.Experience,
                    array: experienceArray,
                    renderFields: (i: number) => (
                      <>
                        <div className="experience-section flex flex-col">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild className="tooltip-trigger">
                                <Input
                                  {...register(`experience.${i}.company`)}
                                  className={cn(
                                    errors.experience &&
                                      errors.experience[i] &&
                                      'border-red-500 ring-red-500 error',
                                  )}
                                  placeholder="Company"
                                />
                              </TooltipTrigger>
                              {errors.experience && errors.experience[i] && (
                                <TooltipContent side="top" align="center">
                                  <p className="error">{errors.experience[i].company?.message}</p>
                                </TooltipContent>
                              )}
                            </Tooltip>
                          </TooltipProvider>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild className="tooltip-trigger">
                                <Input
                                  {...register(`experience.${i}.role`)}
                                  className={cn(
                                    errors.experience &&
                                      errors.experience[i] &&
                                      'border-red-500 ring-red-500 error',
                                  )}
                                  placeholder="Role"
                                />
                              </TooltipTrigger>
                              {errors.experience && errors.experience[i] && (
                                <TooltipContent side="top" align="center">
                                  <p className="error">{errors.experience[i].role?.message}</p>
                                </TooltipContent>
                              )}
                            </Tooltip>
                          </TooltipProvider>
                          <Input
                            {...register(`experience.${i}.startDate`)}
                            placeholder="Start year"
                          />
                          <Input {...register(`experience.${i}.endDate`)} placeholder="End year" />
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild className="tooltip-trigger">
                                <Textarea
                                  {...register(`experience.${i}.description`)}
                                  placeholder="Description"
                                  className={cn(
                                    errors.experience &&
                                      errors.experience[i] &&
                                      'border-red-500 ring-red-500 error',
                                  )}
                                />
                              </TooltipTrigger>
                              {errors.experience && errors.experience[i] && (
                                <TooltipContent side="top" align="center">
                                  <p className="error">
                                    {errors.experience[i].description?.message}
                                  </p>
                                </TooltipContent>
                              )}
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </>
                    ),
                  },
                  {
                    key: FormSectionKeysEnum.Education,
                    array: educationArray,
                    renderFields: (i: number) => (
                      <>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild className="tooltip-trigger">
                              <Input
                                {...register(`education.${i}.school`)}
                                className={cn(
                                  errors.education &&
                                    errors.education[i] &&
                                    'border-red-500 ring-red-500 error',
                                )}
                                placeholder="School"
                              />
                            </TooltipTrigger>
                            {errors.education && errors.education[i] && (
                              <TooltipContent side="top" align="center">
                                <p className="error">{errors.education[i].school?.message}</p>
                              </TooltipContent>
                            )}
                          </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild className="tooltip-trigger">
                              <Input
                                {...register(`education.${i}.degree`)}
                                className={cn(
                                  errors.education &&
                                    errors.education[i] &&
                                    'border-red-500 ring-red-500 error',
                                )}
                                placeholder="Degree"
                              />
                            </TooltipTrigger>
                            {errors.education && errors.education[i] && (
                              <TooltipContent side="top" align="center">
                                <p className="error">{errors.education[i].degree?.message}</p>
                              </TooltipContent>
                            )}
                          </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild className="tooltip-trigger">
                              <Input
                                {...register(`education.${i}.year`)}
                                className={cn(
                                  errors.education &&
                                    errors.education[i] &&
                                    'border-red-500 ring-red-500 error',
                                )}
                                placeholder="Year"
                              />
                            </TooltipTrigger>
                            {errors.education && errors.education[i] && (
                              <TooltipContent side="top" align="center">
                                <p className="error">{errors.education[i].year?.message}</p>
                              </TooltipContent>
                            )}
                          </Tooltip>
                        </TooltipProvider>
                        <Input {...register(`education.${i}.country`)} placeholder="Country" />
                      </>
                    ),
                  },
                  {
                    key: FormSectionKeysEnum.Certifications,
                    array: certificationsArray,
                    renderFields: (i: number) => (
                      <>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild className="tooltip-trigger">
                              <Textarea
                                {...register(`certifications.${i}.details`)}
                                className={cn(
                                  errors.certifications &&
                                    errors.certifications[i] &&
                                    'border-red-500 ring-red-500 error',
                                )}
                                placeholder="Certification Details"
                              />
                            </TooltipTrigger>
                            {errors.certifications && errors.certifications[i] && (
                              <TooltipContent side="top" align="center">
                                <p className="error">{errors.certifications[i].details?.message}</p>
                              </TooltipContent>
                            )}
                          </Tooltip>
                        </TooltipProvider>
                      </>
                    ),
                  },
                  {
                    key: FormSectionKeysEnum.Hobby,
                    array: hobbyArray,
                    renderFields: (i: number) => (
                      <>
                        <FormField
                          control={control}
                          name={`hobby.${i}.iconId`}
                          render={({ field }) => (
                            <FormItem>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a hobby" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {hobySettings.filter(val => {
                                    const currHobby = form.getValues().hobby!;
                                    return !currHobby.some(hobby => hobby.iconId === val.id) || val.id === currHobby[i].iconId
                                  }).map((val) => (
                                    <SelectItem key={val.id} value={val.id}>
                                      <div className="flex items-center select-icon">
                                        <Icon name={val.icon} width={16} height={16} />
                                        {val.name}
                                      </div>
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </>
                    ),
                  },
                ].map(({ key, array, renderFields }) => (
                  <div key={key}>
                    {renderArraySection(
                      key,
                      array.fields,
                      array.append,
                      array.remove,
                      renderFields,
                    )}
                  </div>
                ))}
                <Button type="submit" variant="outline">
                  Preview
                </Button>
              </form>
            </Form>
          </div>
        </div>
      )}
    </>
  );
}
