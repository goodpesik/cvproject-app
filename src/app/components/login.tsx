'use client';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useUser } from '../context/user.context';
import { COOKIE_AUTH, setCookie } from '../helpers/cookie.helper';
import { apiCreateUser, apiGetUser } from '../service/api.service';
import { Button } from '@/components/ui/button';
import GoogleButton from 'react-google-button';

export const LoginComponent = () => {
  const { setUser } = useUser();
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const idToken = await user.getIdToken();
      const userResult = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        token: idToken,
      }

      setUser(userResult);
      setCookie(COOKIE_AUTH, JSON.stringify(userResult), window.location.hostname);
      const existingUser = await apiGetUser(userResult.uid);
      
      if (!existingUser.data.length) {
        await apiCreateUser(userResult);
      }
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return (
    <GoogleButton onClick={handleLogin} />
  )
};
