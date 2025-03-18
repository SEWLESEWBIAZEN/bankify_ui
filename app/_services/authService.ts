
import { User } from '@/definitions/type-definitions/user';
import axios, { AxiosResponse } from 'axios';
import { baseUrl } from './envService';
import type { NextAuthConfig } from 'next-auth';
import https from 'https'

export const AuthConfig: NextAuthConfig = {
  trustHost: true,
  pages: {
    signIn: '/auth/login',

  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/ok');
      if (isOnDashboard && !isLoggedIn) {
        return false; // Deny access if not logged in
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;

// Function to authenticate a user
async function getUser(username: string, password: string): Promise<User | undefined> {
  try {
    const response: AxiosResponse<User> = await axios.post(
      `${baseUrl}/Auth/Login`,
      { Email: username, password }, {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    }
    );
    return response.data; // Ensure 'User' type consistency
  } catch (error: any) {
    console.error('Authentication error:', error?.message || error);

    if (axios.isAxiosError(error) && error.response?.status === 401) {
      throw new Error('Invalid credentials.');
    }
    throw new Error('Failed to authenticate user. Please try again.');
  }
}

export { getUser };
