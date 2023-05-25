import './globals.css';
import Navbar from './components/navbar/Navbar';
import { Nunito } from 'next/font/google';
import Modal from './components/modal/Modal';
// import ClientOnly from './components/ClientOnly';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};

const font = Nunito({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <ClientOnly> */}
          <Modal actionLabel='Submit' isOpen={true} />
          <Navbar />
        {/* </ClientOnly> */}
        {children}
      </body>
    </html>
  );
}
