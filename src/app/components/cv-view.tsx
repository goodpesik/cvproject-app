'use client';

import { useEffect, useState } from 'react';
import { CVBase } from './cv-base';
import { ICVDataModel } from '../models/cv-data.model';
import { apiCvView, apiDownloadPdf } from '../service/api.service';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { HeaderComponent } from './header';
import { applySettings } from '@/lib/utils';
import { CopyBox } from './copy-box';

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
  let currentFontLink: HTMLLinkElement | null = null;
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

  const print = () => {
    window.print();
  }
  useEffect(() => {
    apiCvView(id, true).then((cvData) => {
      setcurrentCvData(cvData.data);
      if (cvData.data.settings) {
        applySettings(cvData.data.settings, currentFontLink);
      }
    });
  }, [id]);

  if (!currentCvData) {
    return <p>Loading...</p>;
  }

  const getLink = `${window.location.origin}${window.location.pathname}`;

  return (
    <>
      <div className="main-container">
      <HeaderComponent />
      <div className="wide-container no-print">
              <div className="controls-bar">
                <div className="items flex flex-row items-center">
                {controls ? (
                    <>
                      <Button variant="outline" onClick={goBack}>
                      Back
                    </Button>
                    <Button variant="outline" onClick={downloadPdf}>
                      Download PDF
                    </Button>
                    </>
                  ) : (
                    <>  
                      <Button variant="outline" onClick={print}>
                              Print/PDF
                      </Button>
                    </>
                  )}
                  <div className="cv-link">
                    <CopyBox text={getLink} />
                  </div>
                </div>
              </div>
          </div>
        <CVBase cvData={currentCvData} />
      </div>
    </>
  );
}
