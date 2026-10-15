import { X } from "lucide-react";
import toast from "react-hot-toast";

const CompletedIssueCard = ({completedIssue, completedIssues, setCompletedIssues}) => {

    const handleDelete = ()=>{
        const newCompletedIssues = completedIssues.filter(iss=>iss.id!==completedIssue.id);
        setCompletedIssues(newCompletedIssues);
        toast.error("Removed");
    }

    return (
        <div className="flex justify-between items-center p-2 rounded bg-yellow-300 border mt-2">
            <h2>{completedIssue.title}</h2>
            <button onClick={handleDelete} className="cursor-pointer">
                <X/>
            </button>
        </div>
    );
};

export default CompletedIssueCard;