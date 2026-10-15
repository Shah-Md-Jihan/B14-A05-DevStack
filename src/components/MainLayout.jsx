import { use, useState } from "react";
import Counter from "./Counter";
import AllIssues from "./AllIssues";
import Hero from "./Hero";

const MainLayout = ({dataPromise}) => {
    const allIssues = use(dataPromise);
    const [completedIssues, setCompletedIssues] = useState([]);
    return (
        <div className="container mx-auto">
            {/* <Counter completedIssues={completedIssues}></Counter> */}
            <Hero></Hero>
            <AllIssues setCompletedIssues={setCompletedIssues} completedIssues={completedIssues} allIssues={allIssues}></AllIssues>
        </div>
    );
};

export default MainLayout;