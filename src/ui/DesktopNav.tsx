import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { ProvidersType } from './Nav';

interface DesktopNavProps {
  providers: ProvidersType;
}

const DesktopNav = ({ providers }: DesktopNavProps) => {
  const { data: session } = useSession();
  return (
    <div className="sm:flex hidden">
      {session?.user ? (
        <div className="flex gap-3 md:gap-5">
          <Link href="/create-prompt" className="black_btn">
            Create Post
          </Link>

          <button
            type="button"
            onClick={() => signOut()}
            className="outline_btn"
          >
            Sign Out
          </button>

          <Link href="/profile">
            <Image
              src={'/assets/images/logo.svg'}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
            />
          </Link>
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => {
                  signIn(provider.id);
                }}
                className="black_btn"
              >
                Sign in
              </button>
            ))}
        </>
      )}
    </div>
  );
};

export default DesktopNav;
