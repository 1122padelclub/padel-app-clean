export interface User {
  id: string;
  email: string;
  nombre: string;
  telefono?: string;
  role: 'user' | 'admin';
  puntos: number;
  nfc_uid?: string;
}

export interface Reserva {
  id: string;
  usuario_id: string;
  fecha: string;
  hora: string;
  cancha: string;
  estado: 'pendiente' | 'confirmada' | 'cancelada';
}

export interface Torneo {
  id: string;
  nombre: string;
  fecha_inicio: string;
  fecha_fin: string;
  estado: 'activo' | 'finalizado' | 'cancelado';
  puntos_premio: number;
}

export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen_url?: string;
}
