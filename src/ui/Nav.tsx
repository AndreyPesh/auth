'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSession, getProviders } from 'next-auth/react';
import { connectDB } from '@/utils/database';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

export type ProvidersType = Awaited<ReturnType<typeof getProviders>>;

const Nav = () => {
  // const isUserLoggedIn = true;

  const { data: session } = useSession();

  const [providers, setProviders] = useState<ProvidersType>(null);

  useEffect(() => {
    const setProvidersToState = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProvidersToState();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Desktop Navigation */}
      <DesktopNav providers={providers} />

      {/* Mobile Navigation */}
      <MobileNav providers={providers} />
    </nav>
  );
};

export default Nav;
