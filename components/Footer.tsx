import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="h-auto w-full text-black flex flex-col items-center justify-center p-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col md:flex-row items-center justify-center w-full h-auto text-center py-6 md:py-24">

                <div className="flex flex-col items-center md:items-start justify-center gap-5 w-full md:w-2/4 p-4">
                    <Image src="/f_logo.svg" alt="Helpify" width={500} height={500} className="w-32 h-12 md:w-48 md:h-18 hidden md:flex" />
                    <Image src="/logo.svg" alt="Helpify" width={500} height={500} className="w-48 h-18 md:hidden flex" />
                    <p className="text-black md:text-left">
                        Nous sommes une plateforme qui met en relation des experts qualifiés avec des clients ayant des besoins spécifiques.
                    </p>
                    <a
                    href="#"
                    className="flex md:hidden bg-blue-950 text-white py-2 px-4 rounded-lg transition-colors hover:bg-blue-900"
                    >
                    Commencer maintenant
                    </a>
                </div>

                <div className="hidden md:flex flex-col items-center justify-center w-full md:w-1/4 p-4">
                    <ul className='flex flex-col items-start justify-center w-full h-auto text-center'>
                        <li className="text-lg font-bold">A propos de nous</li>
                        <li className="text-gray-500 hover:text-blue-300 hover:underline"><a href="#">À propos</a></li>
                        <li className="text-gray-500 hover:text-blue-300 hover:underline"><a href="#">À propos</a></li>
                        <li className="text-gray-500 hover:text-blue-300 hover:underline"><a href="#">À propos</a></li>
                        <li className="text-gray-500 hover:text-blue-300 hover:underline"><a href="#">À propos</a></li>
                        <li className="text-gray-500 hover:text-blue-300 hover:underline"><a href="#">À propos</a></li>
                    </ul>
                </div>

                <div className="hidden md:flex flex-col items-center justify-center w-full md:w-1/4 p-4">
                    <ul className='flex flex-col items-start justify-center w-full h-auto text-center'>
                        <li className="text-lg font-bold">A propos de nous</li>
                        <li className="text-gray-500 hover:text-blue-300 hover:underline"><a href="#">À propos</a></li>
                        <li className="text-gray-500 hover:text-blue-300 hover:underline"><a href="#">À propos</a></li>
                        <li className="text-gray-500 hover:text-blue-300 hover:underline"><a href="#">À propos</a></li>
                        <li className="text-gray-500 hover:text-blue-300 hover:underline"><a href="#">À propos</a></li>
                        <li className="text-gray-500 hover:text-blue-300 hover:underline"><a href="#">À propos</a></li>
                    </ul>
                </div>
                
                <div className="hidden md:flex flex-col items-center justify-center w-full md:w-1/4 p-4">
                    <ul className='flex flex-col items-start justify-center w-full h-auto text-center'>
                        <li className="text-lg font-bold">A propos de nous</li>
                        <li className="text-gray-500 hover:text-blue-300 hover:underline"><a href="#">À propos</a></li>
                        <li className="text-gray-500 hover:text-blue-300 hover:underline"><a href="#">À propos</a></li>
                        <li className="text-gray-500 hover:text-blue-300 hover:underline"><a href="#">À propos</a></li>
                        <li className="text-gray-500 hover:text-blue-300 hover:underline"><a href="#">À propos</a></li>
                        <li className="text-gray-500 hover:text-blue-300 hover:underline"><a href="#">À propos</a></li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center w-full h-auto text-center mt-4 border-t border-gray-200 pt-4">
                <p className="text-blue-950 font-medium">Copyright © 2025 Helpify <span className='text-gray-300 font-light'>|</span> All Rights Reserved <span className='text-gray-300 font-light'>|</span> <a className='text-blue-300 underline transition-colors hover:text-blue-500' href="">Terms and Conditions</a> <span className='text-gray-300 font-light'>|</span> <a className='text-blue-300 underline transition-colors hover:text-blue-500' href="">Privacy Policy</a></p>
            </div>

        </footer>
    );
    }
export default Footer;