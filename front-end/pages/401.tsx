import Head from 'next/head';

import Error401Contents from '@/contents/401';

import type { ReactElement } from 'react';

function Error401() {
  return (
    <>
      <Head>
        <title>401 Unauthorized</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Error401Contents />
    </>
  );
}

Error401.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Error401;