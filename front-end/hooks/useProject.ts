import useSWR from 'swr';

import fetcher from '@/utils/fetcher';

export default function useProject(){

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
  >('', fetcher, {
    fallbackData: [],
  });

  return {
    isLoading,
    isError,
    data,
  };
}