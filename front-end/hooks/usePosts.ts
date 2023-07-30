import useSWR from 'swr';
import { DEFAULT_URL, GITHUB_TOKEN } from "@/config/index"
// import fetcher from '@/utils/fetcher';
import axios from 'axios'

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

interface Data{
  repo:{
    data: {
      content: [
        id: number,
        title: string,
        content: string,
        hits: number,
        createDate: string
      ]
    },
    errorCode: number
  }
}
// export const getServerSideProps: GetServerSideProps<{
//   repo: Data
// }> = async () => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const repo = await res.json()
//   return { props: { repo } }
// }
export const getServerSideProps: GetServerSideProps<{
  //   repo: Props
  }> = async () => {
  const options = {
    method: "get",
    headers: {
      "X-Github-Token": GITHUB_TOKEN,
    }
  }
  const res = await fetch(`${DEFAULT_URL}/api/project/1`, options);
  
  const repo = await res.json();
  console.log(repo)
  return repo;
};

export default function usePosts() {
  // const repo: Data = useSWR([`${DEFAULT_URL}/api/project/1`, GITHUB_TOKEN], 
  //   fetcher
  // );
  // console.log(repo);
  return null;
}