import toast from "react-hot-toast";
import CompletedIssueCard from "./CompletedIssueCard";
import IssueCard from "./IssueCard";

const AllIssues = ({allIssues, completedIssues, setCompletedIssues}) => {

    console.log(completedIssues.length);
    return (
        <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 md:col-span-9">
                <h2>Customer Tickets</h2>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-2">
                    {
                        allIssues.map(issue=>(
                            <IssueCard 
                            key={issue.id} 
                            issue={issue} 
                            setCompletedIssues={setCompletedIssues} 
                            completedIssues={completedIssues}>
                            </IssueCard>
                        ))
                    }
                </div>
            </div>
            <div className="col-span-12 md:col-span-3">
                <h2>Completed Issues</h2>
                <button onClick={()=>{
                    
                    setCompletedIssues([])
                    toast.error('All Issues Clear');
                    
                    }} className="bg-cyan-600 p-2 w-full border rounded text-white font-bold text-xl">Clear All</button>
                {
                    completedIssues.length===0?<p className="text-black">No Resolved Tasks Yet</p>
                    :
                    completedIssues.map(completedIssue=><CompletedIssueCard 
                        key={completedIssue.id} 
                        completedIssue={completedIssue}
                        setCompletedIssues={setCompletedIssues} 
                        completedIssues={completedIssues}
                        >

                        </CompletedIssueCard>)
                }
                
            </div>
        </div>
    );
};

export default AllIssues;