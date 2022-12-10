import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className='flex h-24 w-full items-center justify-between bg-black px-12'>
          <span className='text-3xl'>Logo</span>
          <nav className='flex gap-5'>
            <Link href={'/'}>HOME</Link>
            <Link href={'/about'}>ABOUT</Link>
            <Link href={'/contact'}>CONTACT</Link>
          </nav>
        </header>
        {children}
        <footer className='flex w-full justify-center p-12'>
          <div className='flex w-full max-w-screen-xl flex-col gap-8'>
            <div className='flex flex-col text-5xl'>
              <span className='font-bold'>jorge@jbef.dev</span>
              <span className='font-bold'>+34 606 516 718</span>
            </div>
            <div className='flex justify-between text-2xl'>
              <span>Calle Ramón Gallud 49, 3 - B</span>
              <span>03181 - Torrevieja (Alicante)</span>
              <div>
                <div>icon1</div>
                <div>icon2</div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
