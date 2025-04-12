"use client"
// import { useState } from "react";
import Image from "next/image";


const Navbar = () => {
    // const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="z-10 flex items-center justify-between w-full fixed top-0 left-0 bg-white p-4 text-gray-500 font-medium border-b border-gray-200 pr-24 pl-24">
            <Image src="/logo.png" alt="Helpify" width={64} height={64} className="h-16 w-16" />
            <ul>
                <li className="inline-block px-4 py-2 rounded hover:text-blue-500"><a href="">Home</a></li>
                <li className="inline-block px-4 py-2 rounded hover:text-blue-500"><a href="">Services</a></li>
                <li className="inline-block px-4 py-2 rounded hover:text-blue-500"><a href="">Devenir prestataire</a></li>
                <li className="inline-block px-4 py-2 rounded hover:text-blue-500"><a href="">Se connecter</a></li>
                <li className="inline-block px-4 py-2 text-black border rounded transition hover:bg-black hover:text-white"><a href="">S&#39;inscrire</a></li>
            </ul>

        </nav>
    );
};

export default Navbar;