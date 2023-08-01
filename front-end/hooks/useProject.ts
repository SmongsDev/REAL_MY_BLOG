import useSWR from 'swr';

import fetcher from '@/utils/fetcher';
import { DEFAULT_URL, GITHUB_TOKEN } from '@/config';

export default function useProject(){
  const requestHeaders: HeadersInit = new Headers();

  if(!GITHUB_TOKEN) {
    console.log("토큰이 없어요!");
  }
  else{
    requestHeaders.set('X-Github-Token', GITHUB_TOKEN);
    console.log("토큰 있음");
  }

  const {
    data,
    error: isError,
    isLoading,
  } = useSWR<
    {
      slug: string;
      title: string;
      createdAt: string;
    }[]
  >(`${DEFAULT_URL}/api/project/1`, fetcher, {
    fallbackData: [],
  });

  return {
    isLoading,
    isError,
    data,
  };
}