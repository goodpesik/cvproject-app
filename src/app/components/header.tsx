'use client';
import { LoginComponent } from './login';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type headerProps = {
  noLogin?: boolean;
}

export const HeaderComponent = ({ noLogin }: headerProps) => {
  const router = useRouter();
  const navToRoot = () => {
    router.push('/');
  };
  return (
    <>
      <header className="header">
        <div className="wide-container flex flex-row items-center justify-between">
          <div className="logo">
            <Link className="flex flex-row items-center" href="/" onClick={navToRoot}>
              <Image src="/images/cv-project-icon.png" alt="logo" width={100} height={100} />
              <h1 className="title">CV Project</h1>
            </Link>
          </div>
          {!noLogin ? <LoginComponent /> : null}
        </div>
      </header>
    </>
  );
};
