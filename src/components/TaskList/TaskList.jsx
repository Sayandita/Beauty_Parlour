import { useEffect, useState } from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

// const tasksWithIds = data.tasks.map((task, index) => ({
//     ...task,
//     id: task.id || index + 1, // Use existing id or generate one
// }));
const TaskList = ({ data }) => {
    const [tasks, setTasks] = useState(data.tasks)
    
    const handleComplete = (taskId) => {
        console.log("handleComplete");

        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: true, active: false, newTask: false } : task
            )
        );
    };

    const handleFail = (taskId) => {
        console.log("handleFail");

        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, failed: true, active: false, newTask: false } : task
            )
        );
    };

    

    return (
        <>
            <div id="tasklist" className="overflow-x-auto h-[55%] w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap">
                {tasks.map((elem, idx) => {
                    //console.log(elem.newTask);

                    if (elem.active) {
                        return <AcceptTask key={idx} data={elem} onComplete={handleComplete} onFail={handleFail} />
                    }
                    if (elem.newTask) {
                        //console.log(elem.newTask);

                        return <NewTask key={idx} data={elem} />
                    }
                    if (elem.completed) {
                        return <CompleteTask key={idx} data={elem} />
                    }
                    if (elem.failed) {
                        return <FailedTask key={idx} data={elem} />
                    }
                })}
            </div>
        </>
    );
}

export default TaskList;