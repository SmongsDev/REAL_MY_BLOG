import Link from "next/link";
import Image from "next/image";
import { format, parseISO } from "date-fns";

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
        return <h1>데이터가 없습니다.</h1>
    }
    const title = data.title;
    const content = data.content;

    const dateTimeString = data.createdAt;
    const parsedDate = parseISO(dateTimeString);
    const formattedDate = format(parsedDate, 'MMM dd, yyyy');

    return (
        <>
            <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-3 rounded-lg project-card">
                    { !data.img
                        ? <Image className="h-60 rounded-t-xl w-full object-cover object-center" width={1000} height={1000} src={'/img/background.png'} alt="cover image" quality={100}/>
                        : null// ? <Image className="h-60 rounded-t-xl w-full object-cover object-center" width={100} height={100} src={data.img} alt="cover image" quality={100}/>
                    }
                    
                    {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{title}</h3> */}
                    <Link href={`/projects/${data.id}`}>
                        <div className="p-4 flex flex-col">
                            <h1 className="text-2xl text-gray-900 font-bold title-font mt-1 font-goryeong">{title}</h1>
                            <h3 className="leading-relaxed mt-2 text-base text-gray-800 ">{content}</h3>
                            <h3 className="my-1">
                                {formattedDate}
                            </h3>

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