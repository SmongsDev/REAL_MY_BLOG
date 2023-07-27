import useSWR from 'swr';
import { DEFAULT_URL } from "@/config/index"
import fetcher from '@/utils/fetcher';
import axios from 'axios'

import { GITHUB_TOKEN } from "@/config/index"
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

 
export default function usePosts() {
  // const repo: Data = useSWR([`${DEFAULT_URL}/api/project/1`, GITHUB_TOKEN], 
  //   fetcher
  // );
  const repo: Data = useSWR<
    {
      slug: string;
      title: string;
      createdAt: string;
    }[]
  >([`${DEFAULT_URL}/api/project/1`, GITHUB_TOKEN], fetcher, {
    fallbackData: [],
  });

  return {
    data: repo
  };
}