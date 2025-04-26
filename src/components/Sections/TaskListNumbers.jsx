const TaskListNumbers = ({data}) => {
    return (
        <>
            <div className="flex mt-10 pt-5 justify-between gap-5">
                <div className="rounded-xl py-6 px-9 w-[40%] bg-[hsl(202,49%,20%)] text-[hsl(188,61%,53%)]">
                    <h2 className="text-3xl font-semibold">{data.taskCounts.newTask}</h2>
                    <h3 className="text-xl font-medium">New Task</h3>
                </div>
                <div className="rounded-xl py-6 px-9 w-[40%] bg-[hsl(185,39%,17%)] text-[hsl(171,53%,53%)]">
                    <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
                    <h3 className="text-xl font-medium">Completed</h3>
                </div>
                <div className="rounded-xl py-6 px-9 w-[40%] bg-[hsl(11,15%,23%)] text-[hsl(25,33%,60%)]">
                    <h2 className="text-3xl font-semibold">{data.taskCounts.active}</h2>
                    <h3 className="text-xl font-medium">Accepted Task</h3>
                </div>
                <div className="rounded-xl py-6 px-9 w-[40%] bg-[hsl(323,28%,21%)] text-[hsl(348,42%,60%)]">
                    <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
                    <h3 className="text-xl font-medium">Failed Task</h3>
                </div>
            </div>
        </>
    );
}
 
export default TaskListNumbers;