import Link from "next/link";

export default async function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ECEFF3' }}>
      <section className="text-white py-20 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #012F4A 0%, #00CFFF 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-32 h-full" style={{ backgroundColor: '#FF4B24', transform: 'skewX(-10deg)', left: '10%' }} />
          <div className="absolute w-24 h-full" style={{ backgroundColor: '#00CFFF', transform: 'skewX(-10deg)', left: '30%' }} />
          <div className="absolute w-20 h-full" style={{ backgroundColor: '#FF4B24', transform: 'skewX(-10deg)', right: '20%' }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-wider" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)', letterSpacing: '0.1em' }}>
            11-22 Padel & Pickleball Club
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Reserva tu cancha, participa en torneos y acumula puntos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/reservas" className="text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 inline-block shadow-lg hover:shadow-xl transform hover:scale-105" style={{ backgroundColor: '#FF4B24' }}>
              Reservar Cancha
            </Link>
            <Link href="/fidelidad" className="text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 inline-block border-2 border-white hover:bg-white hover:bg-opacity-20">
              Ver Mis Puntos
            </Link>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-300 transition-colors text-2xl" aria-label="Instagram">
              Instagram
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300 transition-colors text-2xl" aria-label="WhatsApp">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide" style={{ color: '#012F4A' }}>
            Proximos Torneos
          </h2>
          <Link href="/torneos" className="font-semibold text-lg transition-colors" style={{ color: '#FF4B24' }}>
            Ver Todos 
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-full h-32 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: '#012F4A' }}>
              Torneo Ejemplo
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#012F4A' }}>
              Torneo de Verano 2024
            </h3>
            <p className="text-gray-600 mb-4">
              Fecha: Proximamente
            </p>
            <Link href="/torneos" className="inline-block font-semibold transition-colors" style={{ color: '#FF4B24' }}>
              Ver Detalles 
            </Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12 mb-12" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4" style={{ color: '#012F4A' }}>
            Programa de Fidelidad
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Acumula puntos con cada reserva y compra. Canjealos por increibles premios!
          </p>
        </div>
        <div className="flex justify-center">
          <Link href="/fidelidad" className="text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 inline-block shadow-lg hover:shadow-xl transform hover:scale-105" style={{ backgroundColor: '#FF4B24' }}>
            Ver Mi Puntuacion
          </Link>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-wide" style={{ color: '#012F4A' }}>
              Reservas
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              Reserva tu cancha de forma rapida y sencilla
            </p>
            <Link href="/reservas" className="font-semibold text-lg transition-colors inline-flex items-center gap-2" style={{ color: '#FF4B24' }}>
              Ver disponibilidad <span></span>
            </Link>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-wide" style={{ color: '#012F4A' }}>
              Torneos
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              Participa en nuestros torneos y compite por premios
            </p>
            <Link href="/torneos" className="font-semibold text-lg transition-colors inline-flex items-center gap-2" style={{ color: '#FF4B24' }}>
              Ver torneos <span></span>
            </Link>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-wide" style={{ color: '#012F4A' }}>
              Fidelidad
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              Acumula puntos y canjealos por premios increibles
            </p>
            <Link href="/fidelidad" className="font-semibold text-lg transition-colors inline-flex items-center gap-2" style={{ color: '#FF4B24' }}>
              Ver puntos <span></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
