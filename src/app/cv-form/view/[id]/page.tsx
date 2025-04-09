import { ViewCVForm } from '../../../components/cv-view';
interface ViewCVFormPage {
    params: {
      id: string;
    };
    searchParams: { [key: string]: string | string[] | undefined };
  }

export default async function ViewCVFormPage({ params, searchParams }: ViewCVFormPage) {
  if (!params|| !searchParams) {
    return (
      <p>Loading...</p>
    )
  }
  
  const id = params?.id as string;
  const controls = searchParams.controls === 'true';
  return (
    <>
      <ViewCVForm id={id} controls={controls}/>
    </>
  );
}