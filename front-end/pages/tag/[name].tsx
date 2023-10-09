import Layout from '@/components/Layout';
import Page from '@/components/content-layouts/Page';
import { DEFAULT_URL, GITHUB_TOKEN } from '@/config';
import Data from '@/interface/projectT.interface';
import TagType from '@/interface/projectT.interface';
import { useRouter } from 'next/router';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import useTag from '@/hooks/userTag';
import TagList from '@/components/TagList';
import clsx from 'clsx';
import TagPreview from '@/contents/tag/TagPreview';

interface DataType{
  data: Data,
  errorCode: number
}
interface ProjectDetailProps {
  repo: DataType;
}
interface TagProps {
  repo: TagType[];
}

const BlogDetailPage = ({ repo }: ProjectDetailProps) => {
  const router = useRouter();
  const { name } = router.query;

  const [tag, setTag] = useState<TagProps | null>(null);

  useEffect(() => {
    async function fetchData() {
      const result = await useTag();
      setTag(result);
    }

    fetchData();
  }, []);
  
  if (!tag) {
    return null;
  }

  const tagList = tag.repo.map((tag: TagType) => (<TagList key={tag.id} repo={tag}/>));

  const contentList: Data[] = repo.data;
  return (
    <>
      <Layout>
          <Page
          frontMatter={{
              title: 'Projects by Tag',
          }}
          >
            <article>
              <div>
                <header className="pt-6 xl:pb-6">
                  <div className="space-y-1 text-center">
                    <h1 className='text-3xl py-5 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14'>
                      Projects by Tag
                    </h1>
                  </div>
                </header>
                <hr className='dark:border-gray-700'/>
                
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
                      <div className="text-lg font-bold p-5 text-gray-900 dark:text-gray-100 md:text-lg">
                      🏷️ Tags
                      </div>
                      <div className='pl-10'>
                        {tagList}
                      </div>
                    </div>
                    <div className={clsx('flex-1', 'divide-y divide-gray-200 dark:divide-gray-700')}>

                        {contentList.map(
                            ({
                            id,
                            title,
                            content,
                            createdAt,
                            hits,
                            category
                        }) => (
                            <div
                                key={id}
                                className={clsx(
                                'flex items-start gap-4',
                                'md:mb-4 md:gap-6'
                                )}
                            >
                                <div
                                className={clsx(
                                    'border-divider-light mt-14 hidden w-8 -translate-y-1 border-b',
                                    'md:mt-16 md:w-20 lg:block',
                                    'dark:border-divider-dark'
                                )}
                                />
                                <div className={clsx('flex-1')}>
                                    <TagPreview
                                        id={id}
                                        title={title}
                                        description={content}
                                        date={createdAt}
                                        views={hits}
                                        category={category}
                                    />
                                </div>
                            </div>
                            )
                        )}
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
export async function getServerSideProps(context: { query: { name: string; }; }) {
  const { name } = context.query;

  try {
    const requestHeaders: HeadersInit = new Headers();
    if (GITHUB_TOKEN) {
      requestHeaders.set('X-Github-Token', GITHUB_TOKEN);
      console.log("토큰 있음");
    } else {
      console.log("토큰이 없어요!");
    }
    const res = await fetch(`${DEFAULT_URL}/api/projects/${name}`, {
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