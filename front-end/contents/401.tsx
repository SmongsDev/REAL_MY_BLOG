import clsx from 'clsx';
import Link from 'next/link';

function Error401Contents() {
  return (
    <div
      className={clsx(
        'background-grid flex h-full items-center justify-center'
      )}
    >
      <div
        className={clsx(
          'content-wrapper text-center text-slate-600',
          'dark:text-slate-400'
        )}
      >
        <h1 className={clsx('py-12 text-center')}>
          <div className={clsx('mb-3 text-8xl font-extrabold')}>401</div>
          <div className={clsx('text-2xl')}> 401 Unauthorized </div>
        </h1>
        <Link
          href="/"
          className={clsx(
            'rounded-xl py-2 px-4 text-xl text-accent-600',
            'dark:text-accent-400'
          )}
        >
          back to homepage
        </Link>
      </div>
    </div>
  );
}

export default Error401Contents;