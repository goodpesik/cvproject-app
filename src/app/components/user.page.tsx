'use client';

import { useUser } from "../context/user.context";
import Image from 'next/image';

export const UserPageComponent = () => {
  const { user } = useUser();
  return (
    <>
        <div className="user-page">
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
        </div>
    </>
  );
};