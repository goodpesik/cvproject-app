'use client';

import { useUser } from '../context/user.context';
import { HeaderComponent } from './header';
import { UserPageComponent } from './user.page';

export const Landing = () => {
  const { user } = useUser();
  return (
    <>
      <HeaderComponent />
      {user ? (
        <UserPageComponent />
      ) : (
        <div className="landing-page">
          <div className="wide-container">
            <h2>Login with Google and Generate your unique CV</h2>
          </div>
        </div>
      )}
    </>
  );
};
