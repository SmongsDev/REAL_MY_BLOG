import TagType from "@/interface/projectT.interface";
import Link from "next/link";

const TagList = ({ repo, isCnt }: { repo: TagType, isCnt: boolean }) => {
    return (
        <>
            <Link href={`/tag/${repo.name}`}>
                <div className="pt-1 text-lg">
                    # {repo.name} {isCnt === false ? '' : (repo.cnt)}
                </div>
            </Link>
        </>
    );
}

export default TagList;