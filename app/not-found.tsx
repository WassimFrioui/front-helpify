import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="relative flex flex-col items-center justify-center h-screen bg-gray-100 bg-[url(/404.png)] bg-cover bg-center">
            <div className="absolute bottom-0 left-0 w-full h-screen bg-gradient-to-t from-gray-100 to-transparent"></div>

            <div className="absolute bottom-10 transform -translate-y-1/2 flex flex-col items-center justify-center gap-5 text-center text-gray-800 px-4 md:px-8">
                <p className="text-base md:text-lg">Page non trouvée</p>
                <p className="text-sm text-gray-500 md:text-base">
                    Désolé, la page que vous recherchez n&apos;existe pas.
                </p>
                <Link
                    href="/"
                    className="text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-sm md:text-base"
                >
                    Retour à l&apos;accueil
                </Link>
            </div>
        </div>
    );
}
