'use client'

import { useEffect } from "react";
import { LoginComponent } from "./components/login";
import { UserPageComponent } from "./components/user.page";
import { useUser } from "./context/user.context";
import { COOKIE_AUTH, deleteCookie, getCookie } from "./helpers/cookie.helper";
import { IUserModel } from "./models/user.model";
import { apiGetUser } from "./service/api.service";
import Router from 'next/router';


export default function Home() {
  const { user, setUser } = useUser();

  const checkAuth = async (user: IUserModel | null) => {
    if (!user) {
      const authCookie = getCookie(COOKIE_AUTH);
  
      if (authCookie) {
        let paredUser = JSON.parse(authCookie);

        useEffect(() => {
          apiGetUser(paredUser.uid).then((userResult) => {
            if (userResult.data.length) {
              setUser(paredUser);
            }
          }).catch((error) => {
            if (error.isAuthError) {
              deleteCookie(COOKIE_AUTH, window.location.hostname);
              Router.push('/');
            }
          })
        }, []);
      }
    }
  }

  const getContent = () => {
    if (user) {
      return (
        <>
          <UserPageComponent />
         </>
      );
    } else {
      return (
        <>
          <LoginComponent />
        </>
      );
    }
  };

  checkAuth(user);

  return (
    <>
      <div className="flex main-container">
        {getContent()}
      </div>
    </>
  );
}
