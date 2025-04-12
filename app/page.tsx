import FAQAccordion from "@/components/Faq";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Navbar />

      <header className="relative flex flex-col items-center justify-center text-center w-full min-h-[70vh] p-4 bg-blue-300 rounded-xl">

        <h1 className="text-6xl text-white font-serif">Trouver les bons <span className="text-blue-950 font-thin">prestataires</span> <br /> pour vos besoins</h1>
        <div className="flex flex-row items-center justify-center mt-4 w-1/2">
          <input type="text" placeholder="Que cherchez-vous ? Par exemple : Plombier " className="w-2/3 p-2 rounded-l-sm bg-white" />
          <button className="bg-blue-950 text-white p-2 rounded-r-sm  transition-colors hover:bg-blue-900">Rechercher</button>
        </div>
      </header>
      <section className="flex flex-col items-center justify-center w-full h-auto p-4 mt-8">
        <h1 className="text-4xl font-medium mb-6">Comment ça marche ?</h1>

        <div className="flex flex-row items-center justify-center w-full h-auto text-center">
          <div className="flex flex-col items-center justify-center w-1/3 p-4">
            <h2 className="text-2xl font-medium">1. Décrivez votre besoin</h2>
            <p className="text-gray-700">Décrivez votre besoin en quelques mots pour que nous puissions vous aider au mieux.</p>
          </div>
          <div className="flex flex-col items-center justify-center w-1/3 p-4">
            <h2 className="text-2xl font-medium">2. Recevez des offres</h2>
            <p className="text-gray-700">Recevez des offres de prestataires qualifiés en fonction de votre besoin.</p>
          </div>
          <div className="flex flex-col items-center justify-center w-1/3 p-4">
            <h2 className="text-2xl font-medium">3. Choisissez le meilleur</h2>
            <p className="text-gray-700">Comparez les offres et choisissez le prestataire qui vous convient le mieux.</p>
          </div>
        </div>

      </section>

      <FAQAccordion  />

      

    </main>
  );
}
