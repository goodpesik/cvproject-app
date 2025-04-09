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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FormSectionKeysEnum } from '../models/form-data.model';
import * as React from 'react';
import { hobySettings } from '../models/hobby.model';
import { useUser } from '../context/user.context';
import { apiCreateCV, apiGetCVById, apiUpdateCV } from '../service/api.service';
import { ICVDataModel } from '../models/cv-data.model';
import { useRouter } from 'next/navigation';
import { toast } from "sonner"
import { ImageSelector } from './image-selector';
import Image from 'next/image';
import { IMAGE_URL } from '../lib/api';
import { ItemModel } from '../models/item.model';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

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
  const [selectedContact, setSelectedContact] = React.useState<{[key: string]: ContactType}>({});


  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    shouldFocusError: false,
  });

  useEffect(() => {
    if (isEdit && cvId !== '') {
      apiGetCVById(cvId).then((cvData) => {
        setcurrentCvData(cvData.data);
        form.reset({
          name: cvData.data.name,
          imageName: cvData.data.imageName,
          imageUrl: cvData.data.imageUrl,
          firstName: cvData.data.firstName,
          lastName: cvData.data.lastName,
          ...cvData.data.items
        } as FormValues);
      });
    }
  }, [isEdit, cvId, reloadKey]);

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

  const onSubmit = async (data: FormValues) => {
    if (!user) {
      return;
    }
    const constructedItem = {
      contacts: data.contacts,
      skills: data.skills,
      education: data.education,
      hobby: data.hobby,
      positionDescription: data.positionDescription,
      summaryDescription: data.summaryDescription,
      experience: data.experience,
      languages: data.languages,
      certifications: data.certifications
    };
    if (isEdit && currentCvData) {
      await apiUpdateCV(cvId, {
        ...currentCvData,
        name: data.name,
        firstName: data.firstName,
        lastName: data.lastName,
        items: constructedItem as ItemModel,
      });
      toast("CV has been updated successfully");
    } else {
      const result = { id: '', items: constructedItem };
      await apiCreateCV({
        ...result,
        name: data.name,
        imageName: data.imageName,
        imageUrl: data.imageUrl,
        firstName: data.firstName,
        lastName: data.lastName,
        createdBy: user!.id,
      } as ICVDataModel);
      toast("CV has been created successfully");
    }
    goBack();
  };

  const getImageUrl = (url: string): string => {
    return `${IMAGE_URL}/${url}`;
  }

  const getContactPlaceholder = (type: ContactType) => {
    switch (type) {
      case ContactType.Phone:
        return '+3809997788'
    
      default:
        return 'Value'
    }
  }

  return (
    <>
      <div className="main-container">
        <div className="controls-bar flex flex-row">
            <Button variant="outline" onClick={goBack}>Back</Button>
        </div>
        <h1 className="title">{isEdit ? 'Edit CV' : 'Create CV'}</h1>
        { imageUrl 
          ? <div className="image-section">
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
          </div>
          : <ImageSelector isEdit={isEdit} cvId={cvId} onComplete={(result) => {
            if (isEdit) {
              setReloadKey(prev => prev + 1);
            } else {
              form.setValue('imageUrl', result.imageUrl);
              form.setValue('imageName', result.imageName);
            }
          }}></ImageSelector>
        }
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className='tooltip-trigger'> 
              <Input {...register(`name`)} 
                placeholder="Enter CV name"
                className={cn(errors.name && "border-red-500 ring-red-500 error")}
              />
              </TooltipTrigger>
              {errors.name && 
                <TooltipContent side="top" align="center">
                  <p className="error">{errors.name?.message}</p>
                </TooltipContent>
              }
            </Tooltip>
          </TooltipProvider>
          <div className="cv-row name-section flex flex-row gap-2 border p-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className='tooltip-trigger'> 
                <Input {...register(`firstName`)} className={cn(errors.firstName && "border-red-500 ring-red-500 error")} placeholder="First Name" />
              </TooltipTrigger>
              {errors.firstName && 
                <TooltipContent side="top" align="center">
                  <p className="error">{errors.firstName?.message}</p>
                </TooltipContent>
              }
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className='tooltip-trigger'> 
              <Input {...register(`lastName`)} className={cn(errors.lastName && "border-red-500 ring-red-500 error")} placeholder="Last Name" />
              </TooltipTrigger>
              {errors.lastName && 
                <TooltipContent side="top" align="center">
                  <p className="error">{errors.lastName?.message}</p>
                </TooltipContent>
              }
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
                            <Select onValueChange={(val: ContactType) => {
                              const selectedVal = {
                                ...selectedContact
                              }
                              selectedVal[i] = val;
                              setSelectedContact(selectedVal);
                              field.onChange(val);
                            }} defaultValue={field.value}>
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
                          <TooltipTrigger className='tooltip-trigger'> 
                          <Input {...register(`contacts.${i}.value`)} className={cn(errors.contacts && errors.contacts[i] && "border-red-500 ring-red-500 error")} placeholder={getContactPlaceholder(selectedContact[i])} />
                          </TooltipTrigger>
                          {errors.contacts && errors.contacts[i] && 
                            <TooltipContent side="top" align="center">
                              <p className="error">{errors.contacts[i].value?.message}</p>
                            </TooltipContent>
                          }
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
                        <TooltipTrigger className='tooltip-trigger'> <Input {...register(`skills.${i}.name`)} className={cn(errors.skills && errors.skills[i] && "border-red-500 ring-red-500 error")} placeholder="Skill Name" /></TooltipTrigger>
                        {errors.skills && errors.skills[i] && 
                          <TooltipContent side="top" align="center">
                           <p className="error">{errors.skills[i].name?.message}</p>
                         </TooltipContent>
                        }
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
                          <TooltipTrigger className='tooltip-trigger'> 
                          <Input {...register(`languages.${i}.name`)} className={cn(errors.languages && errors.languages[i] && "border-red-500 ring-red-500 error")} placeholder="Language" />
                          </TooltipTrigger>
                          {errors.languages && errors.languages[i] && 
                            <TooltipContent side="top" align="center">
                              <p className="error">{errors.languages[i].name?.message}</p>
                            </TooltipContent>
                          }
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
                          <TooltipTrigger className='tooltip-trigger'> 
                          <Input {...register(`experience.${i}.company`)} className={cn(errors.experience && errors.experience[i] && "border-red-500 ring-red-500 error")} placeholder="Company" />
                          </TooltipTrigger>
                          {errors.experience && errors.experience[i] && 
                            <TooltipContent side="top" align="center">
                              <p className="error">{errors.experience[i].company?.message}</p>
                            </TooltipContent>
                          }
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className='tooltip-trigger'> 
                          <Input {...register(`experience.${i}.role`)} className={cn(errors.experience && errors.experience[i] && "border-red-500 ring-red-500 error")} placeholder="Role" />
                          </TooltipTrigger>
                          {errors.experience && errors.experience[i] && 
                            <TooltipContent side="top" align="center">
                              <p className="error">{errors.experience[i].role?.message}</p>
                            </TooltipContent>
                          }
                        </Tooltip>
                      </TooltipProvider>
                      <Input {...register(`experience.${i}.startDate`)} placeholder="Start year" />
                      <Input {...register(`experience.${i}.endDate`)} placeholder="End year" />
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className='tooltip-trigger'> 
                              <Textarea
                                {...register(`experience.${i}.description`)}
                                placeholder="Description"
                                className={cn(errors.experience && errors.experience[i] && "border-red-500 ring-red-500 error")}
                              />
                          </TooltipTrigger>
                          {errors.experience && errors.experience[i] && 
                            <TooltipContent side="top" align="center">
                              <p className="error">{errors.experience[i].description?.message}</p>
                            </TooltipContent>
                          }
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
                          <TooltipTrigger className='tooltip-trigger'> 
                              <Input {...register(`education.${i}.school`)} className={cn(errors.education && errors.education[i] && "border-red-500 ring-red-500 error")} placeholder="School" />
                          </TooltipTrigger>
                          {errors.education && errors.education[i] && 
                            <TooltipContent side="top" align="center">
                              <p className="error">{errors.education[i].school?.message}</p>
                            </TooltipContent>
                          }
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className='tooltip-trigger'> 
                              <Input {...register(`education.${i}.degree`)} className={cn(errors.education && errors.education[i] && "border-red-500 ring-red-500 error")} placeholder="Degree" />
                          </TooltipTrigger>
                          {errors.education && errors.education[i] && 
                            <TooltipContent side="top" align="center">
                              <p className="error">{errors.education[i].degree?.message}</p>
                            </TooltipContent>
                          }
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className='tooltip-trigger'> 
                              <Input {...register(`education.${i}.year`)} className={cn(errors.education && errors.education[i] && "border-red-500 ring-red-500 error")} placeholder="Year" />
                          </TooltipTrigger>
                          {errors.education && errors.education[i] && 
                            <TooltipContent side="top" align="center">
                              <p className="error">{errors.education[i].year?.message}</p>
                            </TooltipContent>
                          }
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
                          <TooltipTrigger className='tooltip-trigger'> 
                              <Textarea {...register(`certifications.${i}.details`)} className={cn(errors.certifications && errors.certifications[i] && "border-red-500 ring-red-500 error")} placeholder="Certification Details" />
                          </TooltipTrigger>
                          {errors.certifications && errors.certifications[i] && 
                            <TooltipContent side="top" align="center">
                              <p className="error">{errors.certifications[i].details?.message}</p>
                            </TooltipContent>
                          }
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
                              {hobySettings.map((val) => (
                                <SelectItem key={val.id} value={val.id}>
                                  <div className="flex items-center">
                                    <img src={val.icon} alt={val.name} className="w-4 h-4 mr-2" />
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
                {renderArraySection(key, array.fields, array.append, array.remove, renderFields)}
              </div>
            ))}
            <Button type="submit" variant="outline">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
