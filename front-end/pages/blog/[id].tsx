import Layout from '@/components/Layout';
import Page from '@/components/content-layouts/Page';
import { DEFAULT_URL, GITHUB_TOKEN } from '@/config';
import Data from '@/interface/projectT.interface';
import { useRouter } from 'next/router';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';

import DOMPurify from 'dompurify';
import { JSDOM } from "jsdom";

import { DiscussionEmbed } from 'disqus-react';
import { useTheme } from 'next-themes';
import clsx from 'clsx';
import TagList from '@/components/TagList';
import TagType from '@/interface/projectT.interface';

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

  const sanitizedHTML = DOMPurify((new JSDOM("<!DOCTYPE html>")).window).sanitize(repo.data.content);
  
  const { theme } = useTheme(); 
  const tagList = repo.data.hashTag?.map((tag: TagType) => (<TagList key={tag.id} repo={tag} isCnt={false}/>));
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
              <div className={clsx('content-wrapper')}>
                <div
                    className={clsx(
                    'flex flex-col gap-8',
                    'md:flex-row md:gap-8 lg:gap-24'
                    )}
                >
                    <div className={clsx('md:w-64')}> 
                      {/* TODO: Filter Posts */}
                      <div className="flex items-center space-x-2 p-10">
                        <Image
                            src={"/img/footerLogo.png"}
                            alt="avatar"
                            width={100}
                            height={100}
                            quality={100}
                            className="h-8 w-8 rounded-full"
                          />
                          <div className='text-base font-bold text-gray-900 dark:text-gray-100 md:text-lg'>
                            SMONGS
                          </div>
                      </div>
                      <hr className='dark:border-gray-700'/>
                      {/* <div className="text-lg font-bold p-5 text-gray-900 dark:text-gray-100 md:text-lg">
                      🏷️ Tags
                      </div> */}
                      <div className='pl-10 pt-5'>
                        {tagList}
                      </div>
                    </div>
                    <div className={clsx('flex-1', 'divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0')}>
                      <div className='prose max-w-none pt-10 pb-8 dark:prose-dark test' dangerouslySetInnerHTML={{__html: sanitizedHTML}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* 댓글 */}
            <article className='prose prose-zinc mx-auto min-h-screen max-w-4xl pt-24 dark:prose-invert lg:prose-lg'>
              <DiscussionEmbed
                key={theme}
                shortname='smongs'
                config={
                  {
                    url: DEFAULT_URL,
                    identifier: String(repo.data.id),
                    title: repo.data.title,
                    language: 'ko',
                  }
                }
              />
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