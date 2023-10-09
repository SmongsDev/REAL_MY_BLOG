import { JWT } from 'next-auth/jwt';

export type User = {
  accessToken: string;
  refreshToken: string;
};

export type SessionWithUser = {
  session: {
    expires: any;
    user: User;
    // 다른 필요한 세션 속성 추가 가능
  };
  token: JWT; // JWT 토큰의 타입에 따라 수정 가능
};

declare module 'next-auth' {
  interface Session {
    user: User;
    // 다른 필요한 세션 속성 추가 가능
  }

  interface User {
    accessToken: string;
    refreshToken: string;
  }
}

// declare module 'next-auth/jwt' {
//   export interface JWT {
//     accessToken: string;
//     refreshToken: string;
//   }
// }

export type JToken = {
  exp?: string;
  iat?: string;
}