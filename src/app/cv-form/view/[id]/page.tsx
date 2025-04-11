import { ViewCVForm } from '../../../components/cv-view';
interface ViewCVFormPage {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ViewCVFormPage(props: ViewCVFormPage) {
  const searchParams = await props.searchParams;
  const params = await props.params;

  if (!params || !searchParams) {
    return <p>Loading...</p>;
  }

  const id = params?.id as string;
  const controls = searchParams.controls === 'true';
  return (
    <>
      <ViewCVForm id={id} controls={controls} />
    </>
  );
}
