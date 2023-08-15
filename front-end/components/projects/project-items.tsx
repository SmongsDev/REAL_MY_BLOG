import ProjectPreview from "@/contents/projects/ProjectPreview";
import clsx from "clsx";
import Link from "next/link";

interface Data{
    id: number,
    title: string,
    content: string,
    hits: number,
    createDate: string,
    img?: string
}

interface P{
    key?: number | undefined;
    data: Data;
}

export default function ProjectItems({data}: P){
    return (
        <div className={clsx('content-wrapper')}>
            <div
            className={clsx(
                'flex flex-col gap-8',
                'md:flex-row md:gap-8 lg:gap-24'
            )}
            >
                {/* <ProjectPreview id={data.id}/> */}
            </div>
        </div>
        
    )
}