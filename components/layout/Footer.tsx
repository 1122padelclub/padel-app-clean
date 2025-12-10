export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">11-22 Pádel & Pickleball Club</p>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
