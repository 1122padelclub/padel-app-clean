import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-primary-dark text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            11-22 Pádel
          </Link>
          <div className="flex gap-6">
            <Link href="/reservas" className="hover:text-primary-cyan transition-colors">
              Reservas
            </Link>
            <Link href="/torneos" className="hover:text-primary-cyan transition-colors">
              Torneos
            </Link>
            <Link href="/fidelidad" className="hover:text-primary-cyan transition-colors">
              Fidelidad
            </Link>
            <Link href="/tienda" className="hover:text-primary-cyan transition-colors">
              Tienda
            </Link>
            <Link href="/perfil" className="hover:text-primary-cyan transition-colors">
              Perfil
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
