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
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
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
                <div className="col-span-12 md:col-span-3 w-full rounded-lg border border-gray-400 p-3 h-fit">
                    <h2 className="text-xl font-bold">Your Stack</h2>

                    {
                        <p className="pt-2 text-sm text-slate-600">{completedIssues.length} Technology selected</p>
                    }
                    
                    {
                        completedIssues.length===0?<p className="text-black"></p>
                        :
                        completedIssues.map(completedIssue=><CompletedIssueCard 
                            key={completedIssue.id} 
                            completedIssue={completedIssue}
                            setCompletedIssues={setCompletedIssues} 
                            completedIssues={completedIssues}
                            >

                            </CompletedIssueCard>)
                    }


                    {
                        completedIssues.length===0?
                        
                        <div className="border-dashed border-[0.5px] border-gray-400 p-10 rounded-xl mt-3 text-center">
                            <p className="text-sm text-slate-400">Your Stack is Empty</p>
                            <small className="text-[10px] text-slate-400">Add technologies to build your stack</small>
                        </div>
                        
                        : <button onClick={()=>{
                        
                        setCompletedIssues([])
                        toast.error('All technologies is deleted from you stack!');
                        
                        }} className="p-2 w-full border-red-500 border rounded text-red-500 mt-5">
                            Remove All
                        </button>
                    }

                    
                    
                </div>
            </div>
        </div>
        
    );
};

export default AllIssues;