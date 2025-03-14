import NextAuth from 'next-auth';
import { AuthConfig } from './app/_services/authService'; 
export default NextAuth(AuthConfig).auth; 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};