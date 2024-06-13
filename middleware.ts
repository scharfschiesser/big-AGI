import { NextRequest, NextResponse } from 'next/server';

// Middleware to enforce custom domain
export function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  const customDomain = 'chat.blacks.forsale';

  // Check if the request is coming from the custom domain
  if (host !== customDomain) {
    // Redirect to the custom domain
    return NextResponse.redirect(`https://${customDomain}${request.nextUrl.pathname}`, 301);
  }

  // Allow the request to proceed if it's from the custom domain
  return NextResponse.next();
}

// Configuration for the middleware
export const config = {
  matcher: [
    // Include root
    '/',
    // Include pages
    '/(call|index|news|personas|link)(.*)',
    // Include API routes
    '/api(.*)',
    // Note: this excludes _next, /images etc..
  ],
};
