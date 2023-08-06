import Layout from "@/components/Layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "@/config";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import ProjectItems from "@/components/projects/project-items";
import Data from "@/interface/projectT.interface";
import useGithubData from "@/hooks/useTest";

import { DEFAULT_URL, GITHUB_TOKEN } from '@/config';
import { useState, useEffect } from 'react';
import ProjectsContents from "@/contents/projects";
import Page from "@/components/content-layouts/Page";

interface DataType{
    data: {
        content: Data[]
    },
    errorCode: number
}
interface ProjectsProps {
    repo: {
      data: {
        content: Data[];
      };
      errorCode: number;
    };
  }

const Projects = ({ repo }: ProjectsProps) => {
    const [projectList, setProjectList] = useState<JSX.Element[]>([]);

    useEffect(() => {
        console.log(repo.data);
        if (repo.errorCode != 200) {
            console.error('데이터를 가져오는데 문제가 발생했습니다.');
        } else {
            const projects = repo.data.content.map((aProject: Data, index: number) => (
                <ProjectItems key={index} data={aProject} />
            ));
            setProjectList(projects);
        }
    }, [repo]);

    return (
        <Layout>
            <Page
            frontMatter={{
                title: 'Projects',
                description: 'Showcase of my front-end related work.',
            }}
            >
            <div className="flex flex-col items-center min-h-screen px-5 mb-10">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap w-full mb-20">
                            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                                    PROJECT : 
                                    <span className="pl-4 text-blue-500">{repo.data.content.length}</span>
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
                </div>
                <ProjectsContents />
            </Page>            
        </ Layout>
    )
}


export const getServerSideProps: GetServerSideProps<ProjectsProps> = async () => {
    try {
        const requestHeaders: HeadersInit = new Headers();
        if (GITHUB_TOKEN) {
            requestHeaders.set('X-Github-Token', GITHUB_TOKEN);
            console.log("토큰 있음");
        } else {
            console.log("토큰이 없어요!");
        }
        const res = await fetch(`${DEFAULT_URL}/api/projects?size=8`, {
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
  
        const repo: DataType = await res.json();
        return { props: { repo } };
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
};
  
  export default Projects;