import { Settings, Star } from "lucide-react";
import toast from "react-hot-toast";

const IssueCard = ({issue, completedIssues, setCompletedIssues}) => {
    const {customer, date, description, id, priority, status, title} = issue;

    console.log(issue.icon);
    const handleCompletedTask = ()=>{
        if(isCompleted){
            return toast.error('already completed');
        }
        setCompletedIssues([...completedIssues, issue]);
        toast.success("Issue Resoved")
    }

    const isCompleted = completedIssues.some(iss=>iss.id === issue.id);

    return (
        <div onClick={handleCompletedTask} className={`${isCompleted?"cursor-not-allowed":"cursor-pointer"}`}>

            <div className="w-full rounded-lg border border-gray-400 bg-yellow-50 p-3">
                <div>
                    <div className="flex justify-between">
                        <div>
                            <img className="w-[30px]" src={`${issue.icon}`} alt="not found" />
                        </div>
                        <div>
                            <p>{issue.badge}</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    
                    <h3 className="font-semibold text-gray-900">
                        {issue.title}
                    </h3>

                    <button className={`rounded-full ${isCompleted? "bg-green-500 text-white":"bg-yellow-300"} px-3 text-sm`}>
                    ◆ {isCompleted? 'Completed': status}
                    </button>
                </div>

                <p className="mt-1 text-sm text-gray-600">
                    {issue.description}
                </p>

                <div className="flex justify-between items-center">
                    <p>{issue.tags}</p>
                    <p>{issue.level}</p>
                    <p className="flex items-center gap-1"><Star />{issue.rating}</p>
                </div>

                <div className="mt-2 flex justify-between text-xs">
                    <div>
                    <span className="mr-2">#{id}</span>
                    <span className="text-red-500">{priority}</span>
                    </div>

                    <div className="text-gray-500">
                    {customer}
                    </div>

                    <div className="text-gray-500">
                    {date}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default IssueCard;