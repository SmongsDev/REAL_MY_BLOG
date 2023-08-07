import { useEffect, useState } from 'react';
import { DEFAULT_URL, GITHUB_TOKEN } from "@/config";
import Data from "@/interface/projectT.interface";
import clsx from "clsx";
import Error404 from '@/pages/404';

interface DataType {
  data: Data;
}

function ProjectPreview({data}: DataType) {


  return (
    <>
      <div className={clsx('mb-2')}>
        <h2
          className={clsx(
            'text-xl font-extrabold text-slate-700',
            'md:text-2xl',
            'dark:text-slate-300'
          )}
        >
          {data.title}
        </h2>
      </div>
      <p
        className={clsx(
          'mb-3 block leading-relaxed text-slate-600',
          'dark:text-slate-400'
        )}
      >
        {data.content}
      </p>
    </>
  );
}

export default ProjectPreview;