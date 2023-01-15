import Link from 'next/link';

export const Header = () => {
  return (
    <header className='flex h-24 w-full items-center justify-between bg-black px-12'>
      <span className='text-3xl'>Logo</span>
      <nav className='flex gap-5'>
        <Link href={'/'}>HOME</Link>
        <Link href={'/about'}>ABOUT</Link>
        <Link href={'/contact'}>CONTACT</Link>
      </nav>
    </header>
  );
};
