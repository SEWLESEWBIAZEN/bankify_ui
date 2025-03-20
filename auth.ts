
import NextAuth, { DefaultSession } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { AuthConfig, getUser } from './app/_services/authService';
import { User } from './definitions/type-definitions/user';
import { authSecret } from './app/_services/envService';

declare module 'next-auth' {
  interface Session {
    user: {
      accessToken?: string;
      username?: string;
      firstName?: string;
      lastName?: string;
      claims?: string;
      expiry?: string;
    } & DefaultSession['user'];
  }
  interface User {
    token?: string;
    username?: string;
    firstName?: string;
    lastName?: string;
    claims?: string;
    expiry?: string;
  }
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  ...AuthConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            username: z.string(),
            password: z.string().min(6),
          })
          .safeParse(credentials);
        if (!parsedCredentials.success) {
          return null;
        }
        const { username, password } = parsedCredentials.data;
        try {
          const user: User = await getUser(username, password);
          if (!user) {
            throw new Error('Invalid username or password');
          }
          return user;
        } catch (error) {
          console.error('Authentication error:', error);
          return null;
        }
      },
    }),
  ],
  secret: authSecret,
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.includes("/ok")) {
        return url;
      }
      return baseUrl;
    },
    async jwt({ token, user }) {
      
      if (user) {
        const expiryInHours = Number(process.env.TOKEN_EXPIRY) || 4;
        if (isNaN(expiryInHours)) {
          throw new Error('Invalid token expiry configuration');
        }
       
        if (user.firstName && user.lastName) {
          token.name = user.firstName + " " + user.lastName;
        }
        token.expiry = new Date(Date.now() + expiryInHours * 60 * 60 * 1000).toISOString();
        token.accessToken = user.token;
        token.email = user.email;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.claims = user.claims;
      }
      return token;
    },
    async session({ session, token }) {
     
      session.user.name = token.name;

      if (typeof token.accessToken === 'string') {
        session.user.accessToken = token.accessToken;
      }

      if (typeof token.firstName === 'string') {
        session.user.firstName = token.firstName;
      }

      if (typeof token.lastName === 'string') {
        session.user.lastName = token.lastName;
      }

      if (typeof token.claims === 'string') {
        session.user.claims = token.claims;
      }

      if (typeof token.expiry === 'string') {
        session.user.expiry = token.expiry;
      }
      return session;
    },

  },
});