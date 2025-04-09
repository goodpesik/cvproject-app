import CVForm from '@/app/components/cv-form';

interface PageProps {
    params: {
      id: string;
    };
  }

export default async function CreateCVFormPage({ params }: PageProps) {
  if (!params) {
    return (
      <p>Loading...</p>
    )
  }

  const isEdit = true;
  const id = params?.id as string;

  return (
        <CVForm isEdit={isEdit} cvId={id}/>
  );
}