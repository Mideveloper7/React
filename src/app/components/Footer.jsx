"use client";
import React, { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <footer className="fixed bottom-0 w-full bg-black border-t border-green-700">
      <div className="flex justify-around items-center p-4 text-center text-white">
        <Link href="/" passHref>
          <p className="flex flex-col items-center text-white hover:text-green-500 transition duration-300 cursor-pointer">
            <span className="text-xs text-blue-500 dark:text-white">INICIO</span>
           </p> 
        </Link> 

        <div className="relative flex flex-col items-center">
          <button
            className="flex flex-col items-center text-white hover:text-green-500 transition duration-300"
            onClick={toggleMenu}
          >
            <span className="text-xs">USUARIO</span>
          </button>
          {menuOpen && (
            <div className="absolute bottom-12 right-0 bg-black border border-green-700 text-white mt-2 rounded-lg shadow-lg p-2 w-40">
              <Link href="/User" passHref>
                <p className="block px-4 py-2 text-center hover:bg-green-500 transition duration-300 cursor-pointer rounded">
                  Configuración
                </p>
              </Link>

              <Link href="/User" passHref>
                <p className="block px-4 py-2 text-center hover:bg-green-500 transition duration-300 cursor-pointer rounded">
                  hola miquea
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
