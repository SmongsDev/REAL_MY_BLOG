import Data from "@/interface/projectT.interface";
import Link from "next/link";
import { format, parseISO } from 'date-fns';
import TagType from "@/interface/projectT.interface";
import Tag from "@/components/Tag";
import DOMPurify from 'isomorphic-dompurify';

function TILContents({ content }: {content: Data}) {
  const dateTimeString = content.createdAt;
  const parsedDate = parseISO(dateTimeString);
  const formattedDate = format(parsedDate, 'MMM dd, yyyy');
  
  const tags = content.hashTag?.map((tag: TagType) => (<Tag key={tag.id} text={tag} />))
  const sanitizedHTML = DOMPurify.sanitize(content.content);
  
  return (
    <>
     <li key={content.id} className="py-4">
        <article className="space-x-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400 pl-3 mt-2">
              <time dateTime={formattedDate}>{formattedDate}</time>
            </dd>
          </dl>
          <div className="space-y-3 xl:col-span-3">
              <div>
                <h2 className="text-3xl font-bold leading-8 tracking-tight">
                  {content.title}
                </h2>
                <div className="flex flex-wrap">
                  {tags}
                </div>
              </div>
              <div className="prose max-w-none pl-2 pt-2 text-gray-500 dark:text-gray-400" dangerouslySetInnerHTML={ {__html: sanitizedHTML}}>
                {/* {summary} 로 교체 예정*/} 
              </div>
              {/* 필요 없음 */}
              {/* <div className="text-base font-medium leading-6">
                <Link
                  href={`/projects/${content.id}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label={`Read "${content.title}"`}
                >
                  Read more &rarr;
                </Link>
              </div> */}
            </div>
        </article>
      </li>
    </>
  );
}

export default TILContents;