
import Data from '@/interface/projectT.interface';

interface DataType{
    data: Data,
    errorCode: number
}
interface ProjectDetailProps {
    repo: DataType;
}
function TagContents({repo}: ProjectDetailProps) {
    console.log(repo);

    return (
        <>
        </>
    );
}

export default TagContents;