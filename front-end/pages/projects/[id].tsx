import Header from '@/components/Header';
import Layout from '@/components/Layout';
import Page from '@/components/content-layouts/Page';
import { DEFAULT_URL, GITHUB_TOKEN } from '@/config';
import ProjectPreview from '@/contents/projects/ProjectPreview';
import Data from '@/interface/projectT.interface';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface DataType{
  data: Data,
  errorCode: number
}
interface ProjectDetailProps {
  repo: DataType;
}

const ProjectDetailPage = ({ repo }: ProjectDetailProps) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Layout>
          <Page
          frontMatter={{
              title: 'Projects',
          }}
          >
            <div className={clsx('content-wrapper')}>
              <div
                className={clsx(
                  'flex flex-col gap-8',
                  'md:flex-row md:gap-8 lg:gap-24'
                )}
              >
                <div className={clsx('md:w-64')}>{/* TODO: Filter Posts */}</div>
                <div className={clsx('flex-1')}>
                  <div
                    className={clsx(
                      'mb-8 flex items-start gap-4',
                      'md:mb-12 md:gap-6'
                    )}
                  >
                    <div className={clsx('flex-1')}>
                      <ProjectPreview data={repo.data} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default ProjectDetailPage;