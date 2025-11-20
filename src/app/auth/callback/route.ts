// app/auth/callback/route.ts

import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code'); // Obtiene el código de Supabase

if (code) {
    // 1. Inicializa el cliente de Supabase en el lado del servidor (Server Component)
    const supabase = createRouteHandlerClient({ cookies });
    
    // 2. Intercambia el código de autenticación por una sesión de usuario
    // Esta función maneja el almacenamiento de la sesión en las cookies.
    await supabase.auth.exchangeCodeForSession(code);
}

  // 3. Redirige al usuario a la página de inicio (root /) después del proceso.
return NextResponse.redirect(requestUrl.origin);
}