import { use, useState } from "react";
import Counter from "./Counter";
import AllIssues from "./AllIssues";

const MainLayout = ({dataPromise}) => {
    const allIssues = use(dataPromise);
    const [completedIssues, setCompletedIssues] = useState([]);
    return (
        <div className="container mx-auto">
            <Counter completedIssues={completedIssues}></Counter>
            <AllIssues setCompletedIssues={setCompletedIssues} completedIssues={completedIssues} allIssues={allIssues}></AllIssues>
        </div>
    );
};

export default MainLayout;