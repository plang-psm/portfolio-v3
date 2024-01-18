import type { Metadata } from 'next';
import '@styles/globals.css';
import Nav from '@components/Nav';
import Footer from '@components/Footer';
import { ThemeProvider } from '@components/ThemeProvider';

// const inter = Inter({ subsets: ['latin'] });

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
    <html lang='en'>
      <body className='max-w-6xl mx-auto px-8'>
        <main className='app'>
          <ThemeProvider>
            <Nav />
            {children}
            <Footer />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
