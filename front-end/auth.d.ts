import NextAuth from 'next-auth';

// user 객체에 id와 acceessToken 프로퍼티 타입을 추가함
// declare module 'next-auth' {
//   // interface Session extends DefaultSession {
//   //   user?: {
//   //     id?: string;
//   //     accessToken: string;
//   //     refreshToken: string;
//   //   } & DefaultSession['user'];
//   //   token?: {
//   //     exp: string;
//   //   }
//   //   accessToken: string | unknown;
//   // }
//   // interface User {
//   //   errorCode: number;
//   //   data: string;
//   //   accessToken: string;
//   //   refreshToken: string;
//   // }
//   interface Session {
//     refreshTokenExpires?: number;
//     accessTokenExpires?: string;
//     refreshToken?: string;
//     accessToken?: string;
//     error?: string;
//     user?: User;
//   }

//   interface User {
//     nickname?: string;
//     email?: string | null;
//     id?: string;
//     contactAddress?: {
//       id?: string;
//     };
//     errorCode: number;
//     data: string;
//     accessToken: string;
//     refreshToken: string;
//   }
// }
// declare module "next-auth/jwt" {
//   /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
//   interface JWT {
//     refreshTokenExpires?: number;
//     accessTokenExpires?: number;
//     refreshToken?: string;
//     accessToken: string;
//     exp?: number;
//     iat?: number;
//     jti?: string;
//   }
// }

declare type User = {
  // 기타 사용자 정보 필드 추가
  user: {
    accessToken: string; // AccessToken 추가
    refreshToken: string; // RefreshToken 추가
  }
};

// 세션 정보 타입 정의 (AccessToken과 RefreshToken 포함)
declare type Session = {
  user: {
    accessToken: string; // AccessToken 추가
    refreshToken: string; // RefreshToken 추가
  };
  accessToken: string;
  refreshToken: string;
  // 기타 세션 정보 필드 추가
};

// NextAuth.js에서 제공되는 콜백 함수 타입 정의
declare type NextAuthCallback = (token: Session) => Promise<void>;

// NextAuth.js 설정 파일 타입 정의
declare module "next-auth" {
  interface Session {
    session:{
      user: User;
      accessToken: string;
      refreshToken: string;
    }
    // 기타 세션 정보 필드 추가
  }

  interface User {
    // id: string;
    // email: string;
    // 기타 사용자 정보 필드 추가
    accessToken: string; // AccessToken 추가
    refreshToken: string; // RefreshToken 추가
  }

  interface AppContext {
    // 필요한 컨텍스트 정보 추가
  }

  // 다른 NextAuth.js 타입 정보 추가
}