import toast from "react-hot-toast";
import CompletedIssueCard from "./CompletedIssueCard";
import IssueCard from "./IssueCard";

const AllIssues = ({allIssues, completedIssues, setCompletedIssues}) => {

    return (
        <div className="mt-[100px]">
            <h2 className="text-4xl font-bold">Explore the <span className="text-purple-500">Technologies</span></h2>
            <p className="text-[18px] text-slate-600 my-3">Pick one technology per category to build your ideal stack.</p>
            <div className="grid grid-cols-12 gap-10 mt-[40px]">
                <div className="col-span-12 md:col-span-9">
                    
                    <div className="grid grid-cols-1 md: grid-cols-3 gap-2">
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
                    <h2>Your Stack</h2>
                    <button onClick={()=>{
                        
                        setCompletedIssues([])
                        toast.error('All Issues Clear');
                        
                        }} className="bg-cyan-600 p-2 w-full border rounded text-white font-bold text-xl">Clear All</button>
                    {
                        completedIssues.length===0?<p className="text-black">No technology Selected</p>
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
        </div>
        
    );
};

export default AllIssues;