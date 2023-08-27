import Layout from '@/components/Layout';
import Page from '@/components/content-layouts/Page';
import { DEFAULT_URL, GITHUB_TOKEN } from '@/config';
import Data from '@/interface/projectT.interface';
import { useRouter } from 'next/router';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';

import styles from '@/styles/content.module.css';
import DOMPurify from 'dompurify';

interface DataType{
  data: Data,
  errorCode: number
}
interface ProjectDetailProps {
  repo: DataType;
}

const BlogDetailPage = ({ repo }: ProjectDetailProps) => {
  const router = useRouter();
  const { id } = router.query;

  const dateTimeString = repo.data.createdAt;
  const parsedDate = parseISO(dateTimeString);
  const formattedDate = format(parsedDate, 'MMM dd, yyyy');

  const sanitizedHTML = DOMPurify.sanitize(repo.data.content);

  return (
    <>
      <Layout>
          <Page
          frontMatter={{
              title: 'Projects',
          }}
          >
            <article>
              <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
                <header className="pt-6 xl:pb-6">
                  <div className="space-y-1 text-center">
                    <dl className="space-y-10">
                      <div>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={formattedDate}>{formattedDate}</time>
                        </dd>
                      </div>
                    </dl>
                    <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14'>
                      {repo.data.title}
                    </h1>
                  </div>
                </header>
                <div
                  className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
                  style={{ gridTemplateRows: 'auto 1fr' }}
                >
                  <dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
                    <dt className="sr-only">Author</dt>
                    <dd>
                      <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                        <li className="flex items-center space-x-2 pl-3">
                          <Image
                            src={"/img/footerLogo.png"}
                            alt="avatar"
                            width={100}
                            height={100}
                            quality={100}
                            className="h-8 w-8 rounded-full"
                          />
                          <dl className="whitespace-nowrap text-sm font-medium leading-5">
                            <dt className="sr-only">Name</dt>
                            <dd className="text-base font-bold text-gray-900 dark:text-gray-100 md:text-lg">
                              SMONGS
                            </dd>
                          </dl>
                        </li>
                      </ul>
                    </dd>
                  </dl>
                  <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                    <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">
                      <div dangerouslySetInnerHTML={{__html: sanitizedHTML}}></div>
                    </div>
                    <div className='test'>
                      test
                      <p>
                        test
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
        </Page>
      </Layout>
    </>
  );
};
export async function getServerSideProps(context: { query: { id: number; }; }) {
  const { id } = context.query;

  try {
    const requestHeaders: HeadersInit = new Headers();
    if (GITHUB_TOKEN) {
      requestHeaders.set('X-Github-Token', GITHUB_TOKEN);
      console.log("토큰 있음");
    } else {
      console.log("토큰이 없어요!");
    }
    const res = await fetch(`${DEFAULT_URL}/api/project/${id}`, {
      method: 'GET',
      headers: requestHeaders,
    });

    if (!res.ok) {
      return {
        props: {
          repo: {
            errorCode: res.status,
            data: { content: '' },
          },
        },
      };
    }

    const repo: DataType = await res.json();
    return { props: { repo } };
  } catch (error) {
    console.error('데이터를 가져오는데 문제가 발생했습니다.', error);
    return {
      props: {
        repo: {
          errorCode: 500,
          data: { content: '' },
        },
      },
    };
  }
}

export default BlogDetailPage;