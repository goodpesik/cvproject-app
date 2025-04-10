import CVForm from '@/app/components/cv-form';

export default async function CreateCVFormPage() {
  const isEdit = false;
  const cvId = '';
  return <CVForm isEdit={isEdit} cvId={cvId} />;
}
