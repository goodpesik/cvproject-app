'use client';

import { LoginComponent } from './components/login';
import { UserPageComponent } from './components/user.page';
import { useUser } from './context/user.context';

export default function Home() {
  const { user } = useUser();

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

  return (
    <>
      <div className="flex main-container">{getContent()}</div>
    </>
  );
}
