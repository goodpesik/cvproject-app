'use client'

import { LoginComponent } from "./components/login";
import { UserPageComponent } from "./components/user.page";
import { useUser } from "./context/user.context";
import { COOKIE_AUTH, getCookie } from "./helpers/cookie.helper";
import { IUserModel } from "./models/user.model";
import { apiGetUser } from "./service/api.service";


export default function Home() {
  const { user, setUser } = useUser();

  const checkAuth = async (user: IUserModel | null) => {
    if (!user) {
      const authCookie = getCookie(COOKIE_AUTH);
  
      if (authCookie) {
        let paredUser = JSON.parse(authCookie);

        try {
          const userResult = await apiGetUser(paredUser.uid);
          if (userResult.status === 200) {
            setUser(paredUser);
          }
        } catch (error) {
          throw new Error(error as string);
          
        }
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
      getContent()
  );
}
