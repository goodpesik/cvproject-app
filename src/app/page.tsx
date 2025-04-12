import { Landing } from './components/landing-page';
import { MobileLanding } from './components/mobile-panding';
import { headers } from 'next/headers';

export default async function Home() {
  const headersList = await headers();
  const userAgent: string = headersList.get('user-agent') || '';
  const isMobile = /android|iphone|ipod|android/i.test(userAgent);

  return (
    <>
      <div className="main-container">
        {!isMobile ? <Landing /> : <MobileLanding />}
      </div>
    </>
  );
}
