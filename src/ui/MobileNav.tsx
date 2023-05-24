import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ProvidersType } from './Nav';

interface MobileNavProps {
  providers: ProvidersType;
}

const MobileNav = ({ providers }: MobileNavProps) => {
  const { data: session } = useSession();
  const [toggleDropDown, setToggleDropDown] = useState(false);
  return (
    <div className="sm:hidden flex relative">
      {session?.user ? (
        <div className="flex">
          <Image
            src={'/assets/images/logo.svg'}
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
            onClick={() => setToggleDropDown(!toggleDropDown)}
          />

          {toggleDropDown && (
            <div className="dropdown">
              <Link
                href="/profile"
                className="dropdown_link"
                onClick={() => setToggleDropDown(false)}
              >
                My Profile
              </Link>
              <Link
                href="/create-prompt"
                className="dropdown_link"
                onClick={() => setToggleDropDown(false)}
              >
                Create Prompt
              </Link>
              <button
                type="button"
                onClick={() => {
                  setToggleDropDown(false);
                  signOut();
                }}
                className="mt-5 w-full black_btn"
              >
                Sign Out
              </button>
            </div>
          )}
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

export default MobileNav;
