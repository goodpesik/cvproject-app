'use client';

import { useEffect, useState } from 'react';
import { CVBase } from './cv-base';
import { ICVDataModel } from '../models/cv-data.model';
import { apiCvView, apiDownloadPdf } from '../service/api.service';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { HeaderComponent } from './header';

interface ViewCVFormProps {
  id: string;
  controls: boolean;
}

export function ViewCVForm({ id, controls }: ViewCVFormProps) {
  const [currentCvData, setcurrentCvData] = useState<ICVDataModel | null>(null);
  const router = useRouter();
  const goBack = () => {
    router.push('/');
  };
  const downloadPdf = async () => {
    const blob = await apiDownloadPdf(`${window.location.origin}${window.location.pathname}`);
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cv.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  };
  useEffect(() => {
    apiCvView(id, true).then((cvData) => {
      setcurrentCvData(cvData.data);
    });
  }, [id]);

  if (!currentCvData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="main-container">
        {controls ? (
          <>
          <HeaderComponent />
          <div className="wide-container">
            <div className="controls-bar flex flex-row">
              <Button variant="outline" onClick={goBack}>
                Back
              </Button>
              <Button variant="outline" onClick={downloadPdf}>
                Download PDF
              </Button>
            </div>
          </div>
          </>
        ) : (
          ''
        )}
        <CVBase cvData={currentCvData} />
      </div>
    </>
  );
}
