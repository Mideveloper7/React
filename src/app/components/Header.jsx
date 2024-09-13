import React from 'react'
import Link from 'next/link';
const Header = () => {
  return (
    <header className="fixed w-full ">
      <nav className="bg-black border-gray-200 py-2.5"> 
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <span className="self-center whitespace-nowrap text-xl font-semibold text-blue-500 hover:text-yellow-500">
           hola
            <span className="text-green-700">miqueas</span>
          </span>
          <div className="flex items-center lg:order-2">
            <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
              <Link href="/HomeInitial" className="hover:text-green-700">
                INICIO 
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header