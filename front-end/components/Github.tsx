import Image from 'next/image'
import clsx from 'clsx'
import React from 'react'; 
  
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

const Github = ({ props }: {props: Repository}) => {
	return (
        <>
            <li className="float-left lg:w-[48%] w-full m-[1%] hover:shadow-2xl transition duration-300 ease-in-out">
                <a href={props.html_url} target="_blank" >
                    <Image src={`https://opengraph.githubassets.com/${props.id}/javascriptKR/${props.name}`} width={1000} height={1000} alt='Graph_images' quality={100}/>
                </a>
            </li>
        </>
	)
}
export default Github;
