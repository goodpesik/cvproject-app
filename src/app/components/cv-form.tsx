'use client';

import { useForm, useFieldArray, Controller } from 'react-hook-form';
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
          message: 'Invalid phone number',
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
  school: z.string().min(1),
  faculty: z.string().optional(),
  degree: z.string().min(1),
  year: z.string().min(1),
  city: z.string().optional(),
  country: z.string().min(1),
});

const hobbySchema = z.object({
  iconId: z.string().min(1),
});

const experienceSchema = z.object({
  company: z.string().min(1),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  role: z.string().min(1),
  description: z.string().min(1),
});

const formSchema = z.object({
  contacts: z.array(contactSchema).optional(),
  skills: z.array(skillSchema).optional(),
  education: z.array(educationSchema).optional(),
  hobby: z.array(hobbySchema).optional(),
  summaryDescription: z.string().optional(),
  positionDescription: z.string().optional(),
  name: z.string().min(1),
  experience: z.array(experienceSchema).optional(),
  languages: z.array(languagesSchema).optional(),
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
  });

  const { user } = useUser();
  const router = useRouter();
  const [reloadKey, setReloadKey] = React.useState(0);
  const [currentCvData, setcurrentCvData] = React.useState<ICVDataModel | null>(null);
  
  const {
    watch,
    register,
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = form;

  useEffect(() => {
    const subscription = watch(() => {
      console.log('Errors', errors);
    });
    return () => subscription.unsubscribe();
  }, [watch, isValid, errors]);

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

  const imageUrl = form.watch('imageUrl');
  const imageName = form.watch('imageName');

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
          <Input {...register(`name`)} placeholder="Enter CV name" />
          <div className="cv-row name-section flex flex-row gap-2 border p-2">
            <Input {...register(`firstName`)} placeholder="First Name" />
            <Input {...register(`lastName`)} placeholder="Last Name" />
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
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                       <Input {...register(`contacts.${i}.value`)} placeholder="value" />
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
                    <Input {...register(`skills.${i}.name`)} placeholder="Skill Name" />
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
                    <Input {...register(`languages.${i}.name`)} placeholder="Language" />
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
                      <Input {...register(`experience.${i}.company`)} placeholder="Company" />
                      <Input {...register(`experience.${i}.role`)} placeholder="Role" />
                      <Input {...register(`experience.${i}.startDate`)} placeholder="Start year" />
                      <Input {...register(`experience.${i}.endDate`)} placeholder="End year" />
                      <Textarea
                        {...register(`experience.${i}.description`)}
                        placeholder="Description"
                      />
                    </div>
                  </>
                ),
              },
              {
                key: FormSectionKeysEnum.Education,
                array: educationArray,
                renderFields: (i: number) => (
                  <>
                    <Input {...register(`education.${i}.school`)} placeholder="School" />
                    <Input {...register(`education.${i}.degree`)} placeholder="Degree" />
                    <Input {...register(`education.${i}.year`)} placeholder="Year" />
                    <Input {...register(`education.${i}.country`)} placeholder="Country" />
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
