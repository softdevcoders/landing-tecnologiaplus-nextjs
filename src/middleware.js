import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();
  
  // Establecer el path actual en una cookie
  response.cookies.set('current-path', request.nextUrl.pathname);
  
  // Pasar el pathname en headers para acceso server-side
  response.headers.set('x-pathname', request.nextUrl.pathname);
  
  return response;
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
