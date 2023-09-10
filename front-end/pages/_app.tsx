import type { AppProps } from "next/app";
import { ThemeProvider } from 'next-themes'
import type { ReactElement, ReactNode } from 'react';

// import "@/node_modules/katex/dist/katex.css";
import "@/styles/globals.css";
import Shortcut from "@/components/Shortcut";
// import { AuthContextProvider } from '@/store/auth-context';
import { SessionProvider } from "next-auth/react"
import { NextPageContext } from "next";

function getDefaultLayout(page: ReactElement): ReactNode {
  return <Shortcut />;
}

const App = ({ Component, pageProps: { session, ...pageProps} }: AppProps) => {
  let getLayout = getDefaultLayout;
  return (
    <SessionProvider session={session}>
    {/* <AuthContextProvider> */}
      <ThemeProvider attribute="class" enableColorScheme={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
    // </AuthContextProvider>
  );
};

// App.getInitialProps = async (context:NextPageContext) => {
//   const { ctx, Component } = context;
//   let pageProps = {};

//   if (Component.getInitialProps) {
//     // Component의 context로 ctx를 넣어주자
//     pageProps = await Component.getInitialProps(ctx);
//   }

//   // return한 값은 해당 컴포넌트의 props로 들어가게 됩니다.
//   return { pageProps };
// };

export default App;