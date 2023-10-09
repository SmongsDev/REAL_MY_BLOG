import clsx from "clsx";
import BlogPreview from "./BlogPreview";
import Image from "next/image";
import Data from "@/interface/projectT.interface";

interface P{
    data: Data[];
}

function BlogContents({data}: P){
    if(!data){
        return <h1>데이터가 없습니다.</h1>
    }

    return (
        <>
            <div className={clsx('content-wrapper')}>
                <div
                    className={clsx(
                    'flex flex-col gap-8',
                    'md:flex-row md:gap-8 lg:gap-24'
                    )}
                >
                    <div className={clsx('md:w-64')}> 
                        {/* TODO: Filter Posts */}
                        <div className="w-80">
                            <Image
                                src={"/img/background.png"}
                                width={320}
                                height={320}
                                quality={100}
                                alt="Test"
                                className="rounded-md hover:scale-110"
                            />
                        </div>
                    </div>
                    <div className={clsx('flex-1', 'divide-y divide-gray-200 dark:divide-gray-700')}>

                        {data.map(
                            ({
                            id,
                            title,
                            content,
                            createdAt,
                            hits,
                        }) => (
                            <div
                                key={id}
                                className={clsx(
                                'flex items-start gap-4',
                                'md:mb-4 md:gap-6'
                                )}
                            >
                                <div
                                className={clsx(
                                    'border-divider-light mt-14 hidden w-8 -translate-y-1 border-b',
                                    'md:mt-16 md:w-20 lg:block',
                                    'dark:border-divider-dark'
                                )}
                                />
                                <div className={clsx('flex-1')}>
                                    <BlogPreview
                                        id={id}
                                        title={title}
                                        description={content}
                                        date={createdAt}
                                        views={hits}
                                    />
                                </div>
                            </div>
                            )
                        )}
                    </div>
                </div>
            </div>  
        </>
    )
}
export default BlogContents;