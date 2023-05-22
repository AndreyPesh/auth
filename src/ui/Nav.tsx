'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { connectDB } from '@/utils/database';

type ProvidersType = Awaited<ReturnType<typeof getProviders>>;

const Nav = () => {
  // const isUserLoggedIn = true;
  const { data: session } = useSession()
  const [providers, setProviders] = useState<ProvidersType>(null);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  useEffect(() => {
    const setProvidersToState = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProvidersToState();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      {/* <button onClick={() => connectDB()}>Connect</button> */}
      <Link href={'/'} className="flex gap-2 flex-center">
        <Image
          src="assets/images/logo.svg"
          alt="logo"
          width="30"
          height="30"
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href={'/create-prompt'} className="black_btn">
              Create post
            </Link>
            <button
              type="button"
              onClick={() => signOut()}
              className="outline_btn"
            >
              Sign out
            </button>
            <Link href={'/profile'}>
              <Image
                src={'/assets/images/logo.svg'}
                alt="Profile"
                width={37}
                height={37}
                className="rounded-full"
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
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>


      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={'/assets/images/logo.svg'}
              alt="Profile"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => setToggleDropDown((prev) => !prev)}
            />
            {toggleDropDown && (
              <div className="dropdown">
                <Link
                  href={'/profile'}
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  Profile
                </Link>
                <Link
                  href={'/create-prompt'}
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  Create prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropDown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign out
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
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
