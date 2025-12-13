# 📋 Variables de Entorno para Vercel - Copiar y Pegar

## 🚀 Instrucciones Rápidas

1. Ve a tu proyecto en Vercel: https://vercel.com
2. Settings → Environment Variables
3. Copia y pega cada variable de abajo
4. **IMPORTANTE**: Reemplaza `tu-dominio` en `NEXT_PUBLIC_API_URL` con tu dominio real después del primer deploy

---

## 📝 Variables para Copiar

### 1. NEXT_PUBLIC_SUPABASE_URL
```
https://vzxhtxixfkicugrenzls.supabase.co
```

### 2. NEXT_PUBLIC_SUPABASE_ANON_KEY
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6eGh0eGl4ZmtpY3VncmVuemxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxNTE2MzcsImV4cCI6MjA4MDcyNzYzN30.wFwMTx-CzhzwEqdM2f3k-EviWWGEDt-jcwi6KMaP60g
```

### 3. SUPABASE_SERVICE_ROLE_KEY
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6eGh0eGl4ZmtpY3VncmVuemxzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTE1MTYzNywiZXhwIjoyMDgwNzI3NjM3fQ.yjZhzqcvaodXLOpnnjNh8_-nJnG6uJ1BbJjis8GLZbA
```

### 4. NEXT_PUBLIC_API_URL
```
https://tu-dominio.vercel.app/api
```
**⚠️ IMPORTANTE**: Después del primer deploy, reemplaza `tu-dominio` con tu dominio real de Vercel (ej: `padel-app-clean-abc123.vercel.app`)

### 5. PORT
```
3001
```

### 6. NODE_ENV
```
production
```

### 7. NEXT_PUBLIC_NFC_ENABLED (Opcional)
```
true
```

---

## ✅ Pasos en Vercel

Para cada variable:

1. Haz clic en **"Add New"**
2. **Key**: Pega el nombre de la variable (ej: `NEXT_PUBLIC_SUPABASE_URL`)
3. **Value**: Pega el valor correspondiente
4. **Environments**: Selecciona:
   - ✅ Production
   - ✅ Preview
   - ✅ Development
5. Haz clic en **"Save"**

---

## 🔄 Después del Primer Deploy

Una vez que Vercel te dé tu URL de deployment (algo como `padel-app-clean-abc123.vercel.app`):

1. Ve a Settings → Environment Variables
2. Busca `NEXT_PUBLIC_API_URL`
3. Edita el valor y reemplaza `tu-dominio` con tu dominio real
4. Ejemplo: `https://padel-app-clean-abc123.vercel.app/api`
5. Guarda y haz un nuevo deploy

---

## 📌 Notas Importantes

- **NEXT_PUBLIC_***: Estas variables son públicas y accesibles en el navegador
- **SUPABASE_SERVICE_ROLE_KEY**: Esta es privada, solo para el servidor
- **NEXT_PUBLIC_API_URL**: Necesitarás actualizarla después del primer deploy con tu URL real

