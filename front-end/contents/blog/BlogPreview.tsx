import clsx from 'clsx';
import Link from 'next/link';
import { format, parseISO } from "date-fns";

import { ChevronRightIcon, InsightIcon, PinIcon } from '@/components/Icons';

import DOMPurify from 'isomorphic-dompurify';

type PostPreviewProps = {
    id: number;
    title: string;
    description: string;
    date: string;
    views: number;
    pinned?: boolean;
  };
  

function BlogPreview({
  id,
  title,
  description,
  date,
  views,
}: PostPreviewProps) {

  const parsedDate = parseISO(date);
  const formattedDate = format(parsedDate, 'MMM dd, yyyy');

  const sanitizedHTML = DOMPurify.sanitize(description);

  return (
    <article>
      <Link
        key={id}
        href={`blog/${id}`}
        className={clsx(
          'group relative mt-6 mb-6 block overflow-hidden bg-gradient-to-t',
          'sm:mb-0 sm:rounded-2xl',
        )}
      >
        <div
          className={clsx(
            'text-slate mb-2 flex flex-col gap-2 text-xs text-slate-500',
            'dark:text-slate-400 md:mb-1'
          )}
        >
          <div className={clsx('flex gap-1')}>
            <time dateTime={date} className={clsx('first-letter:uppercase')}>
              {formattedDate}
            </time>
            {/* <span>&middot;</span> */}
            {/* <span>{formatLang(lang)}</span> */}
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
            {title}
          </h2>
        </div>
        <div
          className={clsx(
            'mb-3 block leading-relaxed text-slate-800',
            'dark:text-slate-200'
          )}
        >
          <div className='commentContentsClosed' dangerouslySetInnerHTML={ {__html: sanitizedHTML}}></div>
        </div>
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
              {views} Views
            </span>
            {/* <span>&middot;</span> */}
          </span>
        </div>
        <div
          className={clsx(
            'text-accent-600 flex items-center gap-1 text-sm font-semibold',
            'dark:text-accent-400'
          )}
        >
          read more{' '}
          <ChevronRightIcon className="mt-1 ml-1 h-4 w-4 transition" />
        </div>
      </Link>
    </article>
  );
}

export default BlogPreview;