
'use client'
import { HeaderComponent } from './header';

export const MobileLanding = () => {
  return (
    <>
      <HeaderComponent noLogin={true}/>
      <div className="wide-container">
        <h2>Please open CV creator in Desktop Browser</h2>
      </div>
    </>
  );
};
