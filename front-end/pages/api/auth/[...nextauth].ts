import { GITHUB_TOKEN } from '@/config/index';
import NextAuth, { RequestInternal, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from 'next-auth';

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
    CredentialsProvider({
      id: "email-login",
      name: "Credentials",
      credentials: {
        email: { label: "user email", type: "email", placeholder: "user@email.com" },
        password: {  label: "password", type: "password" },
      },
      authorize: async (credentials: Record<"email" | "password", string> | undefined, req: Pick<RequestInternal, "body" | "query" | "headers" | "method">): Promise<User | null> => {
        try {
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
          const res = await fetch(`${DEFAULT_URL}/auth/login`, options);
          if (res.ok) {
            const accessToken = res.headers.get("Access_Token") || null;
            const refreshToken = res.headers.get("Refresh_Token") || null;
        
            if (accessToken && refreshToken) {
              const user: User = {
                id: '1',
                accessToken,
                refreshToken,
              };
              return Promise.resolve(user);
            }
          }
          // 로그인 실패 처리
          return Promise.reject({message: "아이디나 비밀번호를 확인해주세요!"});
        } catch (error) {
          console.error("error:", error);
          return Promise.reject({message: error});
        }
      }
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.JWT_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
    // async signIn(user: any) { //: { user: {accessToken: string; refreshToken: string;}}
    //   if (user && user.user.accessToken) {
    //     // console.log("엑세스 토큰",user.user.accessToken); // 안전하게 참조 가능
    //   } else {
    //     console.error("accessToken is not available.");
    //   }
    
    //   // const accessToken = user?.user?.accessToken;
    //   // const refreshToken = user?.user?.refreshToken;
      
    //   // 중복된 토큰 필드 제거
    //   // delete user.user.accessToken;
    //   // delete user.user.refreshToken;

    //   return true;
    // },
    // async jwt({ user, token }) {
    //   if (user?.accessToken) {
    //     token.accessToken = user.accessToken;
    //     token.refreshToken = user.refreshToken;
    //     // console.log("해체", expTime)
    //     // token.exp = expTime?.exp;
    //     // token.iat = decodedToken?.iat;
    //   }
    //   console.log("토큰",token); //<-- output below
    //   return token;
    // },
    // async session(session) {
    //   console.log("세션", session)
    //   const decodedToken = jwt.decode(session.token.accessToken);
    //   const expTime = decodedToken?.exp;
    //   console.log("해체", expTime)
    //   // session.user = token.user;
    //   // session.expires = token.exp;
    //   // session.token = token;
    //   session.token.exp = expTime
    //   session.session.expires = expTime
    //   return session;
    // }
    // async redirect({ url, baseUrl }) {
    //   if (url.startsWith("/")) return `${baseUrl}${url}`
    //   else if (new URL(url).origin === baseUrl) return url
    //   return baseUrl
    // },
  },
});
