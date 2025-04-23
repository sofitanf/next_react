import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <h1>Tes</h1>
      <div className='flex items-center gap-2'>
        <Link href={'/'}>Home</Link>
        <Link href={'/concert'}>Concert</Link>
      </div>
    </>
  );
};

export default Navbar;
