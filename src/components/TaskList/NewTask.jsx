const NewTask = ({data}) => {
    //console.log("new")
    const handleComplete = (taskId) => {
        console.log("handleComplete");
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId
                    ? { ...task, completed: true, active: false, newTask: false }
                    : task
            )
        );
    };
    
    const handleFail = (taskId) => {
        console.log("handleFail");
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId
                    ? { ...task, failed: true, active: false, newTask: false }
                    : task
            )
        );
    };
    return (
        <>
            <div className="h-full w-[300px] bg-[#217A88] p-5 rounded-xl shrink-0">
                    <div className="flex  justify-between items-center">
                        <h3 className="bg-red-600 px-3 py-1 rounded text-sm">{data.category}</h3>
                        <h4 className="text-sm">{data.taskDate}</h4>
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
                    <p className="text-sm mt-2">
                    {data.taskDescription}
                    </p>
                    <div className="mt-4">
                        <button>Accept Task</button>
                    </div>
                </div>
        </>
    );
}
 
export default NewTask;