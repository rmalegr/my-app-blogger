import Link from "next/link";
const Header = () => {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto'>
      <div className='flex items-center space-x-5'>
        <Link href='/'>
          <img
            className='w-44 object-contain cursor-pointer'
            src='https://links.papareact.com/yvf'
          />
        </Link>
        <div className='hidden md:inline-flex items-center space-x-5'>
          <div>About</div>
          <div>Contact</div>
          <div className='text-white bg-green-400 px-4 py-1 rounded-full'>
            Follow
          </div>
        </div>
      </div>
      <div class='flex items-center space-x-5 text-green-400'>
        <h3>Sign In</h3>
        <h3 className='border px-4 py-1 rounded-full border-green-400'>
          Get Started
        </h3>
      </div>
    </header>
  );
};

export default Header;
