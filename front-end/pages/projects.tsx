import Layout from "@/components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "@/config";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import ProjectItem from "@/components/projects/project-item";
import ProjectType from "@/interface/projectType.interface";

interface Repo {
    repo: any;
}
 
export const getServerSideProps: GetServerSideProps<{
//   repo: Props
}> = async () => {
    const options = {
        method: "post",
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property": "Name",
                    "direction": "ascending"
                }
            ],
            page_size: 100
        })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
    
    const repo = await res.json();

    return { props: { repo } }
}

export default function Projects({
    repo
}: Repo){ // InferGetServerSidePropsType<typeof getServerSideProps>    

    const projectList = repo.results.map((aProject: ProjectType) => <ProjectItem key={aProject.id} data={aProject} />);

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen px-5 mb-10 px-6">
                <Head>
                    <title>Project - SMONGS Developer</title>
                    <meta name="description" content="오늘도 빡코딩!" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                {/* <h1 className="text-4xl font-bold sm:text-6xl">
                    총 프로젝트 : 
                    <span className="pl-4 text-blue-500">{repo.results?.length}</span>
                </h1> */}
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                                프로젝트 : 
                                <span className="pl-4 text-blue-500">{repo.results?.length}</span>
                            </h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                            노력을 통해 우리는 새로운 가능성을 발견하고 더 나아갈 동력을 얻습니다. 어려운 시기나 역경이 찾아와도 노력을 게을리하지 않으면, 그 어려움을 극복하고 더 나은 상황을 만들어갈 수 있습니다. 노력을 아끼지 않는 사람들은 자신의 한계를 뛰어넘고, 도전을 두려워하지 않으며, 자신감을 키워나가는데 성공합니다. 노력은 늘 어김없이 보상을 가져다주는 충실한 친구이며, 우리가 가진 역량을 최대한 발휘할 수 있게 도와줍니다.
                        </p>
                    </div>
                    <div className="flex flex-wrap w-full mb-20">
                        {projectList}
                    </div>
                </div>

                {/* <div className="grid grid-cols-1 md:grid-cols-4 py-10 m-6 gap-8 sm:w-full"> */}
                
            </div>            
        </ Layout>
    )
}