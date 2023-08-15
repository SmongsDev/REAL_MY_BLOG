import { useEffect, useState } from 'react';
import { DEFAULT_URL, GITHUB_TOKEN } from "@/config";
import Data from "@/interface/projectT.interface";
import clsx from "clsx";
import Error404 from '@/pages/404';
import Link from 'next/link';
import { format, parseISO } from "date-fns";
import { ChevronRightIcon, InsightIcon } from '@/components/Icons';

interface DataType {
  data: Data;
}

function ProjectPreview({data}: DataType) {

  const dateTimeString = data.createdAt;
  const parsedDate = parseISO(dateTimeString);
  const formattedDate = format(parsedDate, 'MMM dd, yyyy');


  return (
    <>
    <article>
    <Link
      key={data.id}
      href={`blog/${data.id}`}
      className={clsx(
        'group relative mb-6 block overflow-hidden bg-gradient-to-t',
        'sm:mb-0 sm:rounded-2xl'
      )}
    >
      <div
        className={clsx(
          'text-slate mb-2 flex flex-col gap-2 text-xs text-slate-500',
          'dark:text-slate-400 md:mb-1'
        )}
      >
        <div className={clsx('flex gap-1')}>
          <time dateTime={formattedDate} className={clsx('first-letter:uppercase')}>
            {formattedDate}
          </time>
          <span>&middot;</span>
          <span>{'en'}</span>
        </div>
      </div>
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
      <div
        className={clsx(
          'flex items-center gap-2 text-xs text-slate-600',
          'dark:text-slate-400'
        )}
      >
        <InsightIcon className={clsx('-mt-0.5 h-4 w-4')} />
        <span className={clsx('flex gap-1.5')}>
          <span
            className={clsx('flex items-center gap-1.5')}
            title="Number of view(s)"
          >
            {data.hits} Views
          </span>
          <span>&middot;</span>
        </span>
      </div>
      <div
        className={clsx(
          'text-accent-600 items-center gap-1 text-sm font-semibold',
          'dark:text-accent-400'
        )}
      >
        read more{' '}
        <ChevronRightIcon className="group-hover:animate-bounce-x mt-1 h-3 w-3 transition" />
      </div>
    </Link>
  </article>
    </>
  );
}

export default ProjectPreview;