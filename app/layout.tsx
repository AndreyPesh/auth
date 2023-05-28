import './globals.css';
import Navbar from './components/navbar/Navbar';
import { Nunito } from 'next/font/google';
import RegisterModal from './components/modal/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modal/LoginModal';
import RentModal from './components/modal/RentModal';
import getCurrentUser from './actions/getCurrentUser';
// import ClientOnly from './components/ClientOnly';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};

const font = Nunito({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <ClientOnly> */}
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <RentModal />
        <Navbar currentUser={currentUser} />
        {/* </ClientOnly> */}
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
