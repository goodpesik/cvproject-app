'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { IUserModel } from '../models/user.model';
import { COOKIE_AUTH, deleteCookie, getCookie } from '../helpers/cookie.helper';
import { apiGetUser } from '../service/api.service';
import { useUser } from './user.context';

type AuthContextType = {
  isLoggedIn: boolean;
  checkAuth: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { user, setUser } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  const checkAuth = () => {
    const authCookie = getCookie(COOKIE_AUTH);

    if (!authCookie || typeof window === 'undefined') return;

    try {
      const parsedUser = JSON.parse(authCookie as string);

      apiGetUser(parsedUser.uid)
        .then((res) => {
          if (res.data.length) {
            setUser({
              ...parsedUser,
              id: res.data[0]._id,
            } as IUserModel);
          }
        })
        .catch((err) => {
          if (err?.isAuthError) {
            deleteCookie(COOKIE_AUTH, window.location.hostname);
            router.push('/');
          }
        });
    } catch (e) {
      console.error('Invalid auth cookie');
      deleteCookie(COOKIE_AUTH, window.location.hostname);
      router.push('/');
    }
  };

  useEffect(() => {
    checkAuth();
  }, [pathname]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!user,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};
