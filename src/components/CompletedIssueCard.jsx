import { X } from "lucide-react";
import toast from "react-hot-toast";

const CompletedIssueCard = ({completedIssue, completedIssues, setCompletedIssues}) => {

    const handleDelete = ()=>{
        const newCompletedIssues = completedIssues.filter(iss=>iss.id!==completedIssue.id);
        setCompletedIssues(newCompletedIssues);
        toast.error("Removed");
    }

    return (
        <div className="flex justify-between items-center p-2 rounded border-[0.5px] border-gray-300 mt-2">
            <div>
                <div className="flex items-center gap-2">
                    <div>
                        <img className="w-[30px]" src={completedIssue.icon} alt="" />
                    </div>
                    <div>
                        <h2 className="text-[16px]">{completedIssue.title}</h2>
                        <p className="text-[11px]">{completedIssue.tags}</p>
                    </div>
                </div>
            </div>
            <button onClick={handleDelete} className="cursor-pointe">
                <X className="w-[20px]"/>
            </button>
        </div>
    );
};

export default CompletedIssueCard;