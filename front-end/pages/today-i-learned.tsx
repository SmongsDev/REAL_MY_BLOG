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

interface ProjectsProps {
  repo: {
    data: {
      content: Data[];
    };
    errorCode: number;
  };
}

function TIL({ repo }: ProjectsProps) {
  const [projectList, setProjectList] = useState<JSX.Element[]>([]);

  useEffect(() => {
      console.log(repo.data);
      if (repo.errorCode != 200) {
        console.error('데이터를 가져오는데 문제가 발생했습니다.');
      } else {
        const projects = repo.data.content.map((aProject: Data, index: number) => (
            <TILContents key={index} content={aProject} />
        ));
        setProjectList(projects);
      }
  }, [repo]);
  
  return (
    <Layout>
      <Page
        frontMatter={{
          title: 'Today I Learned',
        }}
      >
        <div className="divide-y divide-gray-200 dark:divide-gray-700 px-5">
          <PageHeader 
            info={{
              title: 'Latest',
              description: 'Today I Learned'
            }}
          />
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {projectList}
          </ul>
        </div>
      </Page>
    </Layout>
  );
}


export const getServerSideProps: GetServerSideProps<ProjectsProps> = async () => {
  try {
      const requestHeaders: HeadersInit = new Headers();
      if (GITHUB_TOKEN) {
          requestHeaders.set('X-Github-Token', GITHUB_TOKEN);
          console.log("토큰 있음");
      } else {
          console.log("토큰이 없어요!");
      }
      const res = await fetch(`${DEFAULT_URL}/api/projects?size=8`, {
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