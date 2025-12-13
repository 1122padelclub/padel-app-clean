import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-light">
      <section className="bg-gradient-to-r from-primary-dark to-primary-cyan text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">11-22 Pádel & Pickleball Club</h1>
          <p className="text-xl mb-8">Reserva tu cancha, participa en torneos y acumula puntos</p>
          <Link
            href="/reservas"
            className="bg-primary-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors inline-block"
          >
            Reservar Cancha
          </Link>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Reservas</h2>
            <p className="text-gray-700 mb-4">Reserva tu cancha de forma rápida y sencilla</p>
            <Link href="/reservas" className="text-primary-orange hover:underline">Ver disponibilidad </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Torneos</h2>
            <p className="text-gray-700 mb-4">Participa en nuestros torneos y compite por premios</p>
            <Link href="/torneos" className="text-primary-orange hover:underline">Ver torneos </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Fidelidad</h2>
            <p className="text-gray-700 mb-4">Acumula puntos y canjéalos por premios increíbles</p>
            <Link href="/fidelidad" className="text-primary-orange hover:underline">Ver puntos </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
