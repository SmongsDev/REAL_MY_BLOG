import Layout from "@/components/Layout";

import { GITHUB_MY_TOKEN, GITHUB_NAME } from '@/config';
import Page from "@/components/content-layouts/Page";
import PageHeader from "@/components/content-layouts/PageHeader";
import Github from "@/components/Github";
import { Octokit } from "octokit";
import { useEffect, useState } from "react";

interface Repository {
    id: number;
    name: string;
    fork: boolean;
    description: string;
    forks_count: number;
    html_url: string;
    language: string;
    watchers: number;
    default_branch: string;
    homepage: string;
    timestamp: number;
    topics: string[];
    pushed_at: string;
}

function Projects(){
    const [projects, setProjects] = useState([]);

    async function getProjects() {
        const octokit = new Octokit({
            auth: GITHUB_MY_TOKEN
        });

        return await octokit.request('GET /users/{username}/repos?sort={sort}&per_page={perPage}', {
            username: 'javascriptKR',
            sort: 'updated', // created(기본값), updated, pushed, full_name
            perPage: 6,
            'X-GitHub-Api-Version': '2022-11-28'
        })
    }

    useEffect(() => {
        getProjects().then(response => {
            if (response.status === 200) {
                setProjects(response.data);
            }
        });
    }, []);

    return ( 
        <Layout>
            <Page
                frontMatter={{
                    title: 'Projects',
                }}
            >
                <PageHeader
                    info={{
                        title: 'Projects',
                        description: "Check out my projects on GitHub!"
                    }}
                />
                <div className='min-h-screen px-3'>
                    <div className="mt-10 text-left md:px-14 px-0">
                        <div className="mt-10 text-justify flex flex-col gap-2">
                            <ul>
                                {
                                    projects.map((ele:Repository) => <Github key={ele.id} props={ele} />)
                                }
                            </ul>
                        </div>
                    </div>
                </div>            
            </Page>            
        </ Layout>
    )
}

export default Projects;