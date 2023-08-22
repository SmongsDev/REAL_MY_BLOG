import Image from 'next/image'
import clsx from 'clsx'
import React from 'react'; // React import 추가

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
  
function Github({ repos, user }: ProjectsProps) {
	return (
        <>
            <div className="bg-gray-800 border-b-2 border-primary-dark">
                <div className="container mx-auto py-8">
                    <section className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center">
                            <Image src={user[0].avatar_url} alt="Github Profile Photo" width={64} height={64} className="rounded-full" unoptimized={true} quality={100}/>
                            <div className="ml-4">
                                <p className="text-white text-lg font-bold">{user[0].name}</p>
                                <a className="text-gray-400 text-sm font-normal" href={user[0].html_url} rel="noreferrer" target="_blank">{user[0].html_url}</a>
                            </div>
                        </div>
                    </section>
                    <div className="flex flex-wrap gap-4 mt-8">
                        {repos.map(({
                            name,
                            description,
                            topics,
                            forks_count,
                            html_url,
                            language,
                            watchers,
                            homepage,
                            pushed_at
                        }, index) => {
                            const date = new Date(pushed_at).toDateString();
                            return (
                                <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                                    <div className="bg-white shadow-lg p-4 rounded-md">
                                        <a href={html_url} rel="noreferrer" target="_blank" className="text-blue-600 font-bold text-lg">{name}</a>
                                        <p className="text-gray-600 text-sm">{homepage}</p>
                                        <p className="text-gray-800 mt-2">{description}</p>
                                        <div className="flex mt-4 text-gray-600 text-sm">
                                            <span className="flex items-center mr-4">
                                                <span className="w-4 h-4 mr-1">
                                                    <i className={`devicon-${language.toLowerCase()}-plain colored`} />
                                                </span>
                                                {language}
                                            </span>
                                            <span className="flex items-center mr-4">
                                                <i className="fad fa-star text-yellow-500 mr-1"></i> {watchers}
                                            </span>
                                            <span className="flex items-center">
                                                <i className="fad fa-code-branch text-green-500 mr-1"></i> {forks_count}
                                            </span>
                                        </div>
                                        <p className="mt-2 text-gray-400">{date}</p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {topics.map((e, index) => {
                                                return (
                                                    <span key={index} className="bg-gray-900 text-white px-2 py-1 text-xs rounded">
                                                        <i className="devicon-github-plain"></i> {e}
                                                    </span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
	)
}
export default Github;
