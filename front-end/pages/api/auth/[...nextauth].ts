import { GITHUB_TOKEN } from '@/config/index';
import NextAuth, { Session } from "next-auth";
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";

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
    CredentialsProvider({
      id: "email-login",
      name: "Credentials",
      credentials: {
        email: { label: "user email", type: "email", placeholder: "user@email.com" },
        password: {  label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        const data = {
          email: credentials?.email,
          password: credentials?.password
        }
        const JSONdata = JSON.stringify(data);

        const options = {
          method: "POST",
          headers: requestHeaders,
          body: JSONdata,
        };
        try{
          const res = await fetch(`${DEFAULT_URL}/auth/login`, options);
          if (res.ok) {
            const accessToken = res.headers.get("Access_Token");
            const refreshToken = res.headers.get("Refresh_Token");
      
            return Promise.resolve({ accessToken, refreshToken });
          } else {
            // 로그인 실패 처리
            return Promise.reject({ details: "error", message: "로그인 실패" });
          }
        } catch (error) {
          console.error("error:", error);
          return Promise.reject({ details: "error", message: error });
        }
      },
        // console.log(res);
        // if (res.status === 401) {
        //   return Promise.reject({
        //     'details': 'error',
        //     'message': 'The username or password is not valid'
        //   })
        // }
        // } else if (res.status === 403) {
        //   return Promise.reject({
        //     'details': 'error',
        //     'message': 'Forbidden'
        //   })
        // if (res.status === 500) {
        //   throw new Error('Have been an error');
        // }
        // const user = await res.json()
        // console.log('유저',user);
        // return Promise.resolve(user);
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
    // maxAge: 60,
    // updateAge: 2 * 60
    // jwt: true
  },
  callbacks: {
    async signIn(user: { user: {accessToken: string; refreshToken: string;}}, account: { accessToken: string; refreshToken: string; }, profile: any) {
      if (user && user.user.accessToken) {
        console.log("엑세스 토큰",user.user.accessToken); // 안전하게 참조 가능
      } else {
        console.error("accessToken is not available.");
      }
      // const accessToken = account?.accessToken;
      // const refreshToken = account?.refreshToken;
  
      const accessToken = user.user.accessToken;
      const refreshToken = user.user.refreshToken;
  
      // return Promise.resolve(true);
      // return Promise.resolve(user.user);
      return { accessToken: accessToken, refreshToken: refreshToken}
    },
    async session(session: {session: {user: {accessToken: string, refreshToken: string}}}, user: {accessToken: string, refreshToken: string}) {
      
      console.log('유저', user)
      session.session.user = user;
      console.log("세션 유저",session);
      // const decodedToken = jwt.verify(session.user.accessToken, process.env.JWT_SECRET);
      // console.log(decodedToken)
      // if (session.user && session.user.accessToken) {
      //   const accessToken = session.user.accessToken;
      //   const refreshToken = session.user.refreshToken;
    
      //   session.accessToken = accessToken;
      //   session.refreshToken = refreshToken;
      // }
      return session;
    },
    // async redirect({ url, baseUrl }) {
    //   if (url.startsWith("/")) return `${baseUrl}${url}`
    //   else if (new URL(url).origin === baseUrl) return url
    //   return baseUrl
    // },
  },
});