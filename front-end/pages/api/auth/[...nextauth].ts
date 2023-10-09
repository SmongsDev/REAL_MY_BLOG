import { GITHUB_TOKEN } from '@/config/index';
import NextAuth, { Session } from "next-auth";
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";
import { JToken, SessionWithUser } from '@/auth';

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
        // try {
        //   const res = await fetch(`${DEFAULT_URL}/auth/login`, options);

        //   if (res.ok) {
        //     const account = await res.json();
        //     const accessToken = res.headers.get("Access_Token");
        //     const refreshToken = res.headers.get("Refresh_Token");

        //     const decodedToken = jwt.decode(accessToken);
        //     const expires_in = decodedToken?.exp
        //     // Use the provided jwt function to generate a new JWT token
        //     const token = await jwt.sign({
        //       accessToken: accessToken,
        //       expires_in: expires_in,
        //       refreshToken: refreshToken,
        //       user: { /* Add user details here if available */ }
        //     }, secret, {
        //       // Set JWT options here if needed
        //     });

        //     return Promise.resolve({ ...account, user: { /* Add user details here if available */ }, token });
        //   } else {
        //     // 로그인 실패 처리
        //     return Promise.reject({ details: "error", message: "로그인 실패" });
        //   }
        // } catch (error) {
        //   console.error("error:", error);
        //   return Promise.reject({ details: "error", message: error });
        // }
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
  secret: process.env.JWT_SECRET,
  session: {
    strategy: 'jwt',
    // maxAge: 60,
    // updateAge: 2 * 60
    // jwt: true
  },
  callbacks: {
    async signIn(user: any) { //: { user: {accessToken: string; refreshToken: string;}}
      if (user && user.user.accessToken) {
        // console.log("엑세스 토큰",user.user.accessToken); // 안전하게 참조 가능
      } else {
        console.error("accessToken is not available.");
      }
    
      // const accessToken = user?.user?.accessToken;
      // const refreshToken = user?.user?.refreshToken;
      
      // 중복된 토큰 필드 제거
      // delete user.user.accessToken;
      // delete user.user.refreshToken;

      return true;
    },
    // async jwt(token, user, account) {
    //   // Initial sign in
    //   if (account && user) {
    //     token.accessToken = account.accessToken;
    //     token.accessTokenExpires = Date.now() + account.expires_in * 1000;
    //     token.refreshToken = account.refreshToken;
    //     token.user = user;
    //   }

    //   // Return previous token if the access token has not expired yet
    //   if (Date.now() < token.accessTokenExpires) {
    //     return token;
    //   }

    //   // Access token has expired, try to update it
    //   return this.signIn();
    // },
    // async session(session, token) {
    //   if (token) {
    //     session.user = token.user;
    //     session.accessToken = token.accessToken;
    //     session.error = token.error;
    //   }

    //   return session;
    // },
    async jwt({ user, token }) {
      if (user?.accessToken) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        // token.exp = decodedToken?.exp;
        // token.iat = decodedToken?.iat;
      }
      // console.log("토큰",token); //<-- output below
      return token;
    },
    async session(session: SessionWithUser) {
      const decodedToken = jwt.decode(session.token.accessToken);
      const expTime = decodedToken?.exp
      session.token.exp = expTime
      session.session.expires = expTime
      // console.log("세션 토큰",session);
      return session;
    },
    // async redirect({ url, baseUrl }) {
    //   if (url.startsWith("/")) return `${baseUrl}${url}`
    //   else if (new URL(url).origin === baseUrl) return url
    //   return baseUrl
    // },
  },
});
