import usePosts from "@/hooks/usePosts";
import Editor from "./Editor";

import { DEFAULT_URL, GITHUB_TOKEN } from "@/config"
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import axios from "axios";

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
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     "X-Github-Token": GITHUB_TOKEN,
    //   }
    // }
    const res = await fetch(`${DEFAULT_URL}/api/project/1`, {method: 'GET', headers: requestHeaders}); //{method: 'GET', headers: requestHeaders}
    console.log(res);
    const repo = await res.json();
    console.log(repo)
    return repo;
  };
  

export default function CreatePost({
    repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>){
    // const posts = usePosts();
    console.log(repo?.data.title);


    // if(posts != null)
    //     console.log("있음", posts);
    return (
        <>
            <div className="mb-6">
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
                <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            {/* <Editor /> */}
        </>
    );
}