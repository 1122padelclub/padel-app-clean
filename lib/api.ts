import { supabase } from './supabase-client';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const { data: { session } } = await supabase.auth.getSession();
  const token = session?.access_token;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: headers as HeadersInit,
  });

  if (!response.ok) {
    if (response.status === 401 && session?.refresh_token) {
      const { data: refreshedSession } = await supabase.auth.refreshSession();
      if (refreshedSession?.session) {
        headers['Authorization'] = `Bearer ${refreshedSession.session.access_token}`;
        const retryResponse = await fetch(`${API_URL}${endpoint}`, {
          ...options,
          headers: headers as HeadersInit,
        });
        if (retryResponse.ok) {
          return retryResponse.json();
        }
      }
    }
    throw new Error(`API error: ${response.statusText}`);
  }

  return response.json();
}

export const auth = {
  login: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  },
  register: async (data: { email: string; password: string; nombre: string; telefono?: string }) => {
    const { data: authData, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          nombre: data.nombre,
          telefono: data.telefono,
        },
      },
    });
    if (error) throw error;
    return authData;
  },
  logout: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },
};
