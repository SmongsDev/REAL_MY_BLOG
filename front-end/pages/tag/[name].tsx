import Layout from '@/components/Layout';
import Page from '@/components/content-layouts/Page';
import { DEFAULT_URL, GITHUB_TOKEN } from '@/config';
import Data from '@/interface/projectT.interface';
import { useRouter } from 'next/router';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';

import { useTheme } from 'next-themes';

interface DataType{
  data: Data,
  errorCode: number
}
interface ProjectDetailProps {
  repo: DataType;
}

const BlogDetailPage = ({ repo }: ProjectDetailProps) => {
  const router = useRouter();
  const { name } = router.query;
  
  const { theme } = useTheme(); 

  console.log(repo)
  return (
    <>
      <Layout>
          <Page
          frontMatter={{
              title: 'Projects by Tag',
          }}
          >
            
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