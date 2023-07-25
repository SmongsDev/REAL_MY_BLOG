import ProjectType from "@/interface/projectType.interface";
import Image from "next/image";

interface Mult{
    id: string;
    name: string;
    color: string;
}
interface P{
    key?: string | undefined;
    data: ProjectType;
}

export default function ProjectItem({data}: P){
    
    const title = data.properties.Name.title[0].plain_text;
    const github = data.properties.Github.url;
    const youtube = data.properties.Youtube.url;
    const content = data.properties.content.rich_text[0].plain_text;
    const imgSrc = data.cover.file?.url || data.cover.external.url;
    const tags = data.properties.Tag.multi_select;
    const start = data.properties.Date.date.start;
    const end = data.properties.Date.date.end;

    const calculatedPeriod = (start: string, end: string) => {
        const startDateStringArray: string[] = start?.split('-');
        const endDateStringArray: string[] = end?.split('-');

        var startDate: any = new Date(parseInt(startDateStringArray[0]), parseInt(startDateStringArray[1]), parseInt(startDateStringArray[2]));
        var endDate: any = new Date(parseInt(endDateStringArray[0]), parseInt(endDateStringArray[1]), parseInt(endDateStringArray[2]));

        const diffInMs = Math.abs(endDate - startDate);
        const result = diffInMs / (1000 * 60 * 60 *24);

        console.log(`기간 : ${result}`);
        return result.toString();
    }
    
    const tagList = tags.map((aTag: Mult) => <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>);

    return (
        <>
            <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-3 rounded-lg project-card">
                    <Image className="h-60 rounded-t-xl w-full object-cover object-center" width={100} height={100} src={imgSrc} alt="cover image" quality={100}/>
                    {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{title}</h3> */}
                    
                    <div className="p-4 flex flex-col">
                        <h1 className="text-2xl text-gray-900 font-bold title-font mt-1">{title}</h1>
                        <h3 className="leading-relaxed mt-2 text-base text-gray-800 ">{content}</h3>
                        <a className="url-link" href={github}>깃허브 바로가기</a>
                        <a className="url-link" href={youtube}>유튜브 바로가기</a>
                        <h3 className="my-1">
                            작업 기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
                        </h3>

                        <div className="flex items-start mt-2">
                            {tagList}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="project-card">
                <Image 
                    className="rounded-t-xl"
                    alt="cover image"
                    src={imgSrc} 
                    width={0}
                    height={0}
                    style={{ width: '100%', height: '50%'}}
                    layout="responsive"
                    // layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className="p-4 flex flex-col">
                    <h1 className="text-2xl lg:text-xl md:text-base font-bold">{title}</h1>
                    <h3 className="mt-4 text-xl">{content}</h3>
                    <a className="url-link" href={github}>깃허브 바로가기</a>
                    <a className="url-link" href={youtube}>유튜브 바로가기</a>

                    <h3 className="my-1">
                        작업 기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
                    </h3>

                    <div className="flex items-start mt-2">
                        {tagList}
                    </div>
                </div>
            </div> */}
        </>
    )
}