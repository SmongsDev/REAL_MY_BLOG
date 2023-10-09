import TagType from "@/interface/projectT.interface";
import Link from "next/link";

const TagList = ({ repo }: { repo: TagType }) => {
    console.log(repo)
    return (
        <>
            <Link href={`/tag/${repo.name}`}>
                <div className="pt-1 text-lg">
                    # {repo.name} ({repo.cnt})
                </div>
            </Link>
        </>
    );
}

export default TagList;