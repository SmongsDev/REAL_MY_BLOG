import CreatePost from "@/components/CreatePost";
import { DEFAULT_URL, GITHUB_TOKEN } from "@/config";
import axios from "axios";
import useSWR from "swr";
import useTest from "@/hooks/useTest";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import useGithubPosts from "@/hooks/useTest";
import Data from "@/interface/projectT.interface";
// import NoteViewer from "@/components/NoteViewer";
import dynamic from "next/dynamic";
  

// export const getServerSideProps: GetServerSideProps<{
//     re: Data
//     }> = async () => {
//     const requestHeaders: HeadersInit = new Headers();
//     if(!GITHUB_TOKEN) {
//         console.log("토큰이 없어요!");
//     }
//     else{
//         requestHeaders.set('X-Github-Token', GITHUB_TOKEN);
//         console.log("토큰 있음");
//     }
//     const res = await fetch(`${DEFAULT_URL}/api/project/1`,{method: 'GET', headers: requestHeaders});
//     const re = await res.json();
//     console.log("값",re)
//     return { props: { re } }
// };
// import fetch from 'unfetch'

export default function AboutMe(){
// export default function AboutMe({
//     re
// }: InferGetServerSidePropsType<typeof getServerSideProps>){
//     // const { posts, error } = useGithubPosts();
    // if (error) {
    //     return <div>데이터 가져오기 오류</div>;
    // }
    // console.log(re);
    // const { repo } = useGithubPosts();


    return (
        <>
            {/* <h1 className="text-3xl font-bold underline">
                {re.title}
            </h1>
            <br />
            <h1>
                {repo?.data.title}
            </h1> */}
            <h1>
                아뇌 왜 안됨!
            </h1>
            {/* <CreatePost /> */}
        </>
    )
}