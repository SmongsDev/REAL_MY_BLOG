import Page from '@/components/content-layouts/Page';
import TILContents from '@/contents/TIL';
import Layout from "@/components/Layout";
import { GetServerSideProps } from 'next';
import { DEFAULT_URL, GITHUB_TOKEN } from '@/config';
import Data from "@/interface/projectT.interface";
import { useEffect, useState } from 'react';
import PageHeader from '@/components/content-layouts/PageHeader';

interface DataType{
  data: {
      content: Data[]
  },
  errorCode: number
}

interface TILListProps {
  repo: {
    data: {
      content: Data[];
    };
    errorCode: number;
  };
}

function TIL({ repo }: TILListProps) {
  const [TILList, setTILList] = useState<JSX.Element[]>([]);

  useEffect(() => {
      if (repo.errorCode != 200) {
        console.error('데이터를 가져오는데 문제가 발생했습니다.');
      } else {
        const TILs = repo.data.content.map((aTIL: Data, index: number) => (
            <TILContents key={index} content={aTIL} />
        ));
        setTILList(TILs);
      }
  }, [repo]);
  
  return (
    <Layout>
      <Page
        frontMatter={{
          title: 'Today I Learned',
        }}
      >
        <PageHeader 
          info={{
            title: 'Latest',
            description: 'Today I Learned'
          }}
        />
        <div className="px-10">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {TILList}
          </ul>
        </div>
      </Page>
    </Layout>
  );
}


export const getServerSideProps: GetServerSideProps<TILListProps> = async () => {
  try {
      const requestHeaders: HeadersInit = new Headers();
      if (GITHUB_TOKEN) {
        requestHeaders.set('X-Github-Token', GITHUB_TOKEN);
      } else {
        console.log("토큰이 없어요!");
      }
      const res = await fetch(`${DEFAULT_URL}/api/TIL/projects?size=8`, {
          method: 'GET',
          headers: requestHeaders,
      });
  
      if (!res.ok) {
          return {
          props: {
              repo: {
              errorCode: res.status,
              data: { content: [] },
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
              data: { content: [] },
          },
          },
      };
  }
};

export default TIL;