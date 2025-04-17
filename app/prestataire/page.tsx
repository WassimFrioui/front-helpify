import FAQAccordion from "@/components/Faq_prestaire";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center p-4 md:p-24 md:pb-0" suppressHydrationWarning> 
      <Navbar />

      <header className="relative flex flex-col items-center justify-evenly text-center w-full min-h-[70vh] p-4 bg-blue-300 rounded-xl">
        <h1 className="text-3xl md:text-6xl text-white font-serif">
          Devenez <span className="text-blue-950 font-thin">prestataire</span> <br /> et trouvez des clients
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center mt-4 w-full md:w-1/2">
            <Link href="/signin" className="bg-blue-950 text-white p-2 rounded-sm transition-colors hover:bg-blue-900 w-full md:w-1/2">
                S&apos;inscrire
            </Link>
        </div>
      </header>

      <section className="flex flex-col items-center justify-center w-full h-auto p-4 mt-8">
        <h1 className="text-2xl md:text-4xl font-medium mb-6">Comment ça marche ?</h1>

        <div className="flex flex-col md:flex-row items-center justify-center w-full h-auto text-center">
          <div className="flex flex-col items-center justify-center w-full md:w-1/3 p-4">
            <h2 className="text-xl md:text-2xl font-medium">1. Décrivez votre besoin</h2>
            <p className="text-gray-700">
              Décrivez votre besoin en quelques mots pour que nous puissions vous aider au mieux.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-1/3 p-4">
            <h2 className="text-xl md:text-2xl font-medium">2. Recevez des offres</h2>
            <p className="text-gray-700">
              Recevez des offres de prestataires qualifiés en fonction de votre besoin.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-1/3 p-4">
            <h2 className="text-xl md:text-2xl font-medium">3. Choisissez le meilleur</h2>
            <p className="text-gray-700">
              Comparez les offres et choisissez le prestataire qui vous convient le mieux.
            </p>
          </div>
        </div>
      </section>

      <FAQAccordion />

      <section className="relative flex flex-col md:items-start text-center md:text-left items-center justify-center w-full mt-8 min-h-[50vh] overflow-hidden p-4 bg-blue-300 rounded-xl">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-balance w-full md:w-2/3 text-white">
          Offrez <span className="text-blue-950 font-serif italic">vos services </span> et trouvez des clients facilement.
        </h1>

        <a
          href="#"
          className="bg-blue-950 text-white py-2 px-4 rounded-lg transition-colors hover:bg-blue-900"
        >
          Commencer maintenant
        </a>
        <Image
          src="/h_char.png"
          alt="Illustration"
          width={300}
          height={300}
          className="absolute -bottom-12 right-1/2 md:right-1/6 md:flex hidden h-auto"
        />
      </section>

      <section className="flex flex-col items-center justify-center w-full h-auto p-4 mt-8">
        <h1 className="text-2xl md:text-4xl font-medium mb-6">Nous avons ce que vous cherchez</h1>
        <div className="flex flex-col md:flex-row items-center justify-center w-full h-auto text-center">
          <div className="flex flex-col items-center justify-center w-full md:w-1/3 p-4">
            <h2 className="text-xl md:text-2xl font-medium">Plombier</h2>
            <p className="text-gray-700">
              Trouvez un plombier qualifié pour tous vos besoins en plomberie.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-1/3 p-4">
            <h2 className="text-xl md:text-2xl font-medium">Électricien</h2>
            <p className="text-gray-700">
              Trouvez un électricien qualifié pour tous vos besoins en électricité.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-1/3 p-4">
            <h2 className="text-xl md:text-2xl font-medium">Jardinier</h2>
            <p className="text-gray-700">
              Trouvez un jardinier qualifié pour tous vos besoins en jardinage.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-1/3 p-4">
            <h2 className="text-xl md:text-2xl font-medium">Mécanicien</h2>
            <p className="text-gray-700">
              Trouvez un mécanicien qualifié pour tous vos besoins en mécanique.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-1/3 p-4">
            <h2 className="text-xl md:text-2xl font-medium">Maçon</h2>
            <p className="text-gray-700">
              Trouvez un maçon qualifié pour tous vos besoins en maçonnerie.
            </p>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  );
}
