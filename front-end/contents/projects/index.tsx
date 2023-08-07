import clsx from "clsx";
import Link from "next/link";
import ProjectPreview from "./ProjectPreview";

interface Data{
    id: number,
    title: string,
    content: string,
    hits: number,
    createdAt: string,
    img?: string
}

interface P{
    key?: number | undefined;
    data: Data;
}

function ProjectsContents({data}: P){
    if(!data){
        return <h1>로딩중</h1>
    }
    const title = data.title;
    const content = data.content;

    return (
        <>
            <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-3 rounded-lg project-card">
                    {/* { !img
                        ? <Image className="h-60 rounded-t-xl w-full object-cover object-center" width={100} height={100} src={img} alt="cover image" quality={100}/>
                        : null
                    } */}
                    
                    {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{title}</h3> */}
                    <Link href={`/projects/${data.id}`}>
                        <div className="p-4 flex flex-col">
                            <h1 className="text-2xl text-gray-900 font-bold title-font mt-1 font-goryeong">{title}</h1>
                            <h3 className="leading-relaxed mt-2 text-base text-gray-800 ">{content}</h3>
                            {/* <h3 className="my-1">
                                작업 기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
                            </h3> */}

                            <div className="flex items-start mt-2">
                                {/* {tagList} */}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default ProjectsContents;