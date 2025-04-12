'use client';

import { Button } from '@/components/ui/button';
import { useUser } from '../context/user.context';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { apiDeleteeCV, apiGetCVByUser } from '../service/api.service';
import { IUserModel } from '../models/user.model';
import { ICVDataModel } from '../models/cv-data.model';
import { useEffect, useState } from 'react';
import { ConfirmationModal } from './confirmation-modal';
import { toast } from 'sonner';

export const UserPageComponent = () => {
  const { user } = useUser();
  const router = useRouter();
  const [cvList, setCvList] = useState<ICVDataModel[]>([]);
  const [currentCv, setcurrentCv] = useState<ICVDataModel | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  const handleCreate = () => {
    router.push('/cv-form/create');
  };

  const handleEdit = (cv: ICVDataModel) => {
    router.push(`/cv-form/edit/${cv._id}`);
  };

  const handleRemove = (cv: ICVDataModel) => {
    setcurrentCv(cv);
    setModalOpen(true);
  };

  const handleView = (cv: ICVDataModel) => {
    router.push(`/cv-form/view/${cv._id}?controls=true`);
  };

  const handleConfirm = async () => {
    setModalOpen(false);

    try {
      await apiDeleteeCV(currentCv?._id ?? '');
      toast('CV has been deleted successfully');
    } catch {
      toast('Error ocurred');
    }
    setReloadKey((prev) => prev + 1);
  };

  useEffect(() => {
    if (!user) return;

    const fetchCVs = async () => {
      try {
        const response = await apiGetCVByUser(user as IUserModel);
        setCvList(response.data);
      } catch (error) {
        console.error('Error fetching CV list:', error);
      }
    };

    fetchCVs();
  }, [user, reloadKey]);

  return (
    <>
      <div className="user-page">
        <div className="wide-container">
          <div className="flex items-center intro">
            <div className="image">
              <Image
                src={user?.photoURL || '/images/avatar.png'}
                alt="Photo"
                width={150}
                height={150}
                priority
                className="rounded-full"
              />
            </div>
            <div className="user">
              {user?.displayName && (
                <h1 className="text-2xl font-bold user-name">{user.displayName}</h1>
              )}
            </div>
          </div>
          <Button variant="outline" onClick={handleCreate}>
            Create CV
          </Button>
          {cvList.length !== 0 &&
            <div className="cv-list">
              {cvList.map((cv) => (
                <div key={cv.id} className="cv-item flex flex-row">
                  <span>{cv.name}</span>
                  <Button variant="outline" onClick={() => handleEdit(cv)}>
                    Edit CV
                  </Button>
                  <Button variant="outline" onClick={() => handleView(cv)}>
                    View CV
                  </Button>
                  <Button variant="outline" onClick={() => handleRemove(cv)}>
                    Remove CV
                  </Button>
                  <ConfirmationModal
                    open={modalOpen}
                    onOpenChange={setModalOpen}
                    onContinue={handleConfirm}
                  />
                </div>
            ))}
            </div>
            }
        </div>
      </div>
    </>
  );
};
