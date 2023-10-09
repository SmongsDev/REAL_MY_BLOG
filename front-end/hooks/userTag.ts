import { GITHUB_TOKEN } from "@/config";
import TagType from '@/interface/projectT.interface';

const useTag = async() => {
    try {
      const requestHeaders: HeadersInit = new Headers();
      if (GITHUB_TOKEN) {
          requestHeaders.set('X-Github-Token', GITHUB_TOKEN);
          console.log("토큰 있음: GITHUB_TOKEN");
      } else {
          console.log("토큰이 없어요!");
      }
      const res = await fetch(`https://javascriptkr-curly-space-rotary-phone-j76j6qjgwq72jj66-8080.app.github.dev/api/tags`, {
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
      const repo: TagType = await res.json();
      return { repo };
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
  }
  export default useTag;