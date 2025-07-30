
import { cn } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';


import logoPrimary from '@/assets/images/logo_primary.png';

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
            <div className="flex items-center">
                <Link href="/">
                    <Image
                        src={logoPrimary}
                        alt="logo"
                        height={40}
                        width={40}
                        className="flex h-10 dark:hidden"
                    />
                </Link>
            </div>

            {/* Navigation is always visible on larger screens and collapses into a menu icon on smaller screens */}
            <nav className="lg:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-black">Program Akademik</a>
                <a href="#" className="text-gray-700 hover:text-black">Penelitian</a>
                <a href="#" className="text-gray-700 hover:text-black">Alumni</a>
                <a href="#" className="text-gray-700 hover:text-black">Jelajah</a>
                <a href="#" className="text-gray-700 hover:text-black">Dwimulya</a>
            </nav>

            {/* Search and Menu Icons */}
            <div className="flex items-center space-x-4">
                <button className="text-gray-700 hover:text-black">
                    {/* Search Icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>

                {/* Menu Icon (to call the Full Screen Navigation) */}
                <button className="text-gray-700 hover:text-black">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
