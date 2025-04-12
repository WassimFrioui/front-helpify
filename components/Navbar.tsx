"use client"
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="z-10 flex items-center justify-between w-full fixed top-0 left-0 bg-white p-4 text-gray-500 font-medium border-b border-gray-200 pr-6 pl-6 md:pr-24 md:pl-24">
            <Image src="/logo.svg" alt="Helpify" width={500} height={500} className="w-32 h-12 md:w-48 md:h-18" />
            <ul className={`absolute top-full left-0 w-full bg-white md:static md:flex md:w-auto md:bg-transparent ${isMenuOpen ? "flex flex-col items-center pb-5 mb-24" : "hidden"}`}>
                <li className="inline-block px-4 py-2 rounded hover:text-blue-500"><a href="">Home</a></li>
                <li className="inline-block px-4 py-2 rounded hover:text-blue-500"><a href="">Services</a></li>
                <li className="inline-block px-4 py-2 rounded hover:text-blue-500"><a href="">Devenir prestataire</a></li>
                <li className="inline-block px-4 py-2 rounded hover:text-blue-500"><a href="">Se connecter</a></li>
                <li className="inline-block px-4 py-2 text-black border rounded transition hover:bg-black hover:text-white"><a href="">S&#39;inscrire</a></li>
            </ul>
            <button
                className="block md:hidden text-gray-500 focus:outline-none"
                onClick={toggleMenu}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </nav>
    );
};

export default Navbar;