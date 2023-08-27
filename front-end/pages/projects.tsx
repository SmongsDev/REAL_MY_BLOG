import Layout from "@/components/Layout";

import { GITHUB_NAME } from '@/config';
import Page from "@/components/content-layouts/Page";
import PageHeader from "@/components/content-layouts/PageHeader";
import Github from "@/components/Github";
import { GetServerSideProps } from "next";


interface User {
    login: string;
    name: string;
    avatar_url: string;
    html_url: string;
  }
  
  interface Repository {
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
  
  interface ProjectsProps {
    repos: Repository[];
    user: User;
  }
  

function Projects({ repos, user }: ProjectsProps){
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
                <div className='px-10'>
                    <Github repos={repos} user={user}/>
                </div>            
            </Page>            
        </ Layout>
    )
}

export const getServerSideProps: GetServerSideProps<ProjectsProps> = async ({ res }) => {

	res.setHeader(
		'Cache-Control',
		'public, s-maxage=600, stale-while-revalidate=59'
	)

	const [ gitUserRes, gitReposRes] = await Promise.all( [
		fetch(`https://api.github.com/users/${GITHUB_NAME}`),
		fetch(`https://api.github.com/users/${GITHUB_NAME}/repos`),
	] )
	
	let [user, repos]: [User, Repository[]] = await Promise.all([
        gitUserRes.json(),
        gitReposRes.json(),
    ]);
    
	if (user.login) {
		user = [user].map( 
			({ login, name, avatar_url, html_url }) => ({ login, name, avatar_url, html_url })
		)
	}
	
	if (repos.length) {
		repos = repos.map( 
			({ name, fork, description, forks_count, html_url, language, watchers, default_branch, homepage, pushed_at, topics }) => {
				const timestamp = Math.floor(Date.parse(pushed_at) / 1000)
				return ({ name, fork, description, forks_count, html_url, language, watchers, default_branch, homepage, timestamp, topics, pushed_at })
			}
		)

		repos.sort( (a, b) => b.timestamp - a.timestamp )

		repos = repos.filter( (e, i) => {
			if ( i < 8 && ! e.topics.includes('github-config')) return e
			return false
		})
	}

	if (!repos || !user) { return { notFound: true,	} }

    console.log("유저 : ",user);

	return { props: { repos, user } }
}
  
export default Projects;