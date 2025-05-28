// middleware.js
import { NextResponse } from 'next/server'

export const config = {
  // matcher ha de ser un array de paths
  matcher: ['/:path*']
}

export function middleware(request) {
  const response = NextResponse.next()
  response.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      // mientras estés en dev, desbloquea inline y eval
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' https://res.cloudinary.com data:",
      "font-src 'self' data:",
      "media-src 'self' https://res.cloudinary.com",
      "connect-src 'self'",
    ].join('; ')
  )
  return response
}
