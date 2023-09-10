import { GITHUB_TOKEN } from '@/config/index';
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from 'jsonwebtoken';

const DEFAULT_URL = "https://javascriptkr-curly-space-rotary-phone-j76j6qjgwq72jj66-8080.app.github.dev"
const requestHeaders: HeadersInit = new Headers();
if (!GITHUB_TOKEN) {
    console.log("토큰이 없어요!");
}
else{
    requestHeaders.set('X-Github-Token', GITHUB_TOKEN);
}
requestHeaders.append('Content-Type', 'application/json')

export default NextAuth({
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    // ...add more providers here
    CredentialsProvider({
      id: "email-login",
      name: "login",
      credentials: {
        email: { label: "user email", type: "email", placeholder: "user@email.com" },
        password: {  label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        const body = JSON.stringify({
          email: credentials?.email,
          password: credentials?.password,
        })
        const res = await fetch(`${DEFAULT_URL}/auth/login`, {
          method: 'POST',
          headers: requestHeaders,
          body: body
        })
        const user = await res.json()

        if (user.accessToken) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  callbacks: {
  //   async jwt(token: { id: any; username: any; }, user: { id: any; username: any; }) {
  //   if (user) {
  //     // 사용자 정보를 JWT 토큰에 추가
  //     token.id = user.id; // 사용자 식별자
  //     token.username = user.username; // 사용자명 또는 필요한 사용자 정보 추가
  //   }
  //   return token;
  // },
    // async jwt({ token, account, user }) {
    //   if (account) {
    //     token.accessToken = account.access_token
    //     token.id = user.id
    //   }
    //   return token
    // },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
    async session({ session, user, token }) {
      session.user = token as any;
      return session
    },
    // async signIn({ user, account, profile, email, credentials }) {
    //   const isAllowedToSignIn = true
    //   if (isAllowedToSignIn) {
    //     return true
    //   } else {
    //     // Return false to display a default error message
    //     return false
    //     // Or you can return a URL to redirect to:
    //     // return '/unauthorized'
    //   }
    // }
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt'
    // jwt: true
  },
});