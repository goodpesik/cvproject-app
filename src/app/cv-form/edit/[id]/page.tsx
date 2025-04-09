import CVForm from '@/app/components/cv-form';

interface PageProps {
    params: Promise<{
      id: string;
    }>;
  }

export default async function CreateCVFormPage(props: PageProps) {
  const params = await props.params;
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