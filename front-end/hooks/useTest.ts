import { DEFAULT_URL, GITHUB_TOKEN } from '@/config';
import { useState, useEffect } from 'react';

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

const useGithubData = () => {
    const [repo, setRepo] = useState<Data | null>(null);
  
    useEffect(() => {
        const fetchGithubData = async () => {
            const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    
            if (!GITHUB_TOKEN) {
                console.log("토큰이 없어요!");
            } else {
                const requestHeaders: HeadersInit = new Headers();
                requestHeaders.set('X-Github-Token', GITHUB_TOKEN);
                console.log("토큰 있음");
        
                const res = await fetch(`${DEFAULT_URL}/api/project/1`, { method: 'GET', headers: requestHeaders });
                const data: Data = await res.json();
                console.log("데이터:", data);
                setRepo(data);
            }
        };
        fetchGithubData();
    }, []);
  
    return { repo };
  };
  
export default useGithubData;