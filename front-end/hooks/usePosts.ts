import { DEFAULT_URL, GITHUB_TOKEN } from "@/config/index"
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

interface Data{
  data: {
    id: number,
    title: string,
    content: string,
    hits: number,
    createDate: string
  },
  errorCode: number
}

export const getServerSideProps: GetServerSideProps<{
  repo: Data
  }> = async () => {
  const requestHeaders: HeadersInit = new Headers();

  if(!GITHUB_TOKEN) {
    console.log("토큰이 없어요!");
  }
  else{
    requestHeaders.set('X-Github-Token', GITHUB_TOKEN);
    console.log("토큰 있음");
  }
  
  const res = await fetch(`${DEFAULT_URL}/api/project/1`,{method: 'GET', headers: requestHeaders});
  const repo = await res.json();
  console.log("값", repo);
  return { props: { repo } }
};

export default function usePosts({
  repo
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log('요청:', repo);
  return repo;
}