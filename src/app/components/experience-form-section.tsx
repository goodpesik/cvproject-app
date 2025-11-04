'use client';

import { useFieldArray, Control, UseFormRegister, FieldErrors } from 'react-hook-form';
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { FormValues } from './cv-form';

interface SortableExperienceItemProps {
  field: Record<'id', string>;
  index: number;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  remove: (index: number) => void;
}

function SortableExperienceItem({
  field,
  index,
  register,
  errors,
  remove,
}: SortableExperienceItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: field.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const itemErrors = errors.experience ? errors.experience[index] : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="cv-row flex flex-row gap-2 border p-2 rounded-md items-start"
    >
      <Button
        type="button"
        variant="ghost"
        {...listeners}
        className="cursor-grab p-2 touch-none"
      >
        <GripVertical size={18} />
      </Button>

      <div className="experience-section flex flex-col flex-grow space-y-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild className="tooltip-trigger">
              <Input
                {...register(`experience.${index}.company`)}
                className={cn(
                  itemErrors?.company && 'border-red-500 ring-red-500 error',
                )}
                placeholder="Company"
              />
            </TooltipTrigger>
            {itemErrors?.company && (
              <TooltipContent side="top" align="center">
                <p className="error">{itemErrors.company.message}</p>
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild className="tooltip-trigger">
              <Input
                {...register(`experience.${index}.role`)}
                className={cn(
                  itemErrors?.role && 'border-red-500 ring-red-500 error',
                )}
                placeholder="Role"
              />
            </TooltipTrigger>
            {itemErrors?.role && (
              <TooltipContent side="top" align="center">
                <p className="error">{itemErrors.role.message}</p>
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>

        <Input
          {...register(`experience.${index}.startDate`)}
          placeholder="Start year"
        />
        <Input {...register(`experience.${index}.endDate`)} placeholder="End year" />

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild className="tooltip-trigger">
              <Textarea
                {...register(`experience.${index}.description`)}
                placeholder="Description"
                className={cn(
                  itemErrors?.description &&
                    'border-red-500 ring-red-500 error',
                )}
              />
            </TooltipTrigger>
            {itemErrors?.description && (
              <TooltipContent side="top" align="center">
                <p className="error">{itemErrors.description.message}</p>
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="col">
        <Button
          type="button"
          variant="outline"
          onClick={() => remove(index)}
        >
          Remove
        </Button>
      </div>
    </div>
  );
}

interface ExperienceFormSectionProps {
  control: Control<FormValues>;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

export function ExperienceFormSection({
  control,
  register,
  errors,
}: ExperienceFormSectionProps) {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: 'experience',
  });

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = fields.findIndex((field) => field.id === active.id);
      const newIndex = fields.findIndex((field) => field.id === over.id);
      move(oldIndex, newIndex);
    }
  }

  return (
    <div className="space-y-2">
      <h2>Experience</h2>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={fields.map((f) => f.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-2">
            {fields.map((field, index) => (
              <SortableExperienceItem
                key={field.id}
                field={field}
                index={index}
                register={register}
                errors={errors}
                remove={remove}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      <Button
        type="button"
        variant="outline"
        onClick={() =>
          append({
            company: '',
            role: '',
            description: '',
            startDate: '',
            endDate: '',
          })
        }
      >
        Add Experience
      </Button>
    </div>
  );
}