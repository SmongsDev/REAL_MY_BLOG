import type { AppProps } from "next/app";
import { ThemeProvider } from 'next-themes'
import type { ReactElement, ReactNode } from 'react';

// import "@/node_modules/katex/dist/katex.css";
import "@/styles/globals.css";
import Shortcut from "@/components/Shortcut";

function getDefaultLayout(page: ReactElement): ReactNode {
  return <Shortcut />;
}

const App = ({ Component, pageProps }: AppProps) => {
  let getLayout = getDefaultLayout;
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;