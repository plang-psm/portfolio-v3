import type { Metadata } from 'next';
import '@styles/globals.css';
import Nav from '@components/Nav';
import Footer from '@components/Footer';

export const metadata: Metadata = {
  title: 'plang-psm',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className='max-w-6xl mx-auto px-8 bg-black text-slate-100'>
          <Nav />
          {children}
          <Footer />
      </body>
    </html>
  );
}
