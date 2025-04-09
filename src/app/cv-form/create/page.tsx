import CVForm from '@/app/components/cv-form';

export default async function CreateCVFormPage() {
  const isEdit = false;
   return (
      <CVForm isEdit={isEdit} />
    );
}
