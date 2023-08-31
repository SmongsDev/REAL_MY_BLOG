import clsx from 'clsx';

import Header from '../Header';
import { PropsWithChildren } from 'react';

interface PageType{
  frontMatter: {
    title: string;
    description?: string;
  }
}

function Page({
  frontMatter: { title, description },
  children = null,
}: PropsWithChildren<PageType>) {

  return (
    <>
      <Header title={title}/>
      <div className={clsx('scroll-mt-[86px]')} id="main-contents">
        {children}
      </div>
    </>
  );
}

export default Page;