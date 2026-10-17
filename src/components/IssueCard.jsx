import { Check, Settings, Star } from "lucide-react";
import toast from "react-hot-toast";

const IssueCard = ({issue, completedIssues, setCompletedIssues}) => {
    
    const handleCompletedTask = ()=>{
        if(isCompleted){
            return toast.error('already completed');
        }
        setCompletedIssues([...completedIssues, issue]);
        toast.success(`${issue.title} is added to your stack!`);
    }

    const isCompleted = completedIssues.some(iss=>iss.id === issue.id);

    return (
        <div>

            <div className={`w-full rounded-lg border p-3 ${isCompleted? "border-2 border-pink-400":"border-gray-400"} px-3 text-sm`}>
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
                </div>

                <p className="mt-1 text-sm text-gray-600">
                    {issue.description}
                </p>

                <div className="flex justify-between items-center">
                    <p>{issue.tags}</p>
                    <p>{issue.level}</p>
                    <p className="flex items-center gap-1"><span class="text-yellow-400 text-xl">★</span> <span className="mt-1">{issue.rating}</span></p>
                </div>

                <div>
                    <button 
                    onClick={handleCompletedTask} 
                    disabled={isCompleted}
                    className={`flex items-center justify-center gap-2 ${isCompleted ? "bg-transparent text-pink-500" : "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white"} font-medium px-4 py-2 rounded-full w-full disabled:cursor-not-allowed disabled:opacity-70`}
                    >
                    {isCompleted && <Check className="w-5 h-5 text-pink-500" />}
                    <span>{isCompleted ? "Added to Stack" : "Add to Stack"}</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default IssueCard;