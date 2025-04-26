const CompleteTask = ({data}) => {
    //console.log("completed");
    
    return (
        <>
            <div className="h-full w-[300px] bg-[#20695E] p-5 rounded-xl shrink-0">
                    <div className="flex  justify-between items-center">
                        <h3 className="bg-red-600 px-3 py-1 rounded text-sm">{data.category}</h3>
                        <h4 className="text-sm">{data.taskDate}</h4>
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
                    <p className="text-sm mt-2">
                    {data.taskDescription}
                    </p>
                    <div className="mt-2 ">
                        <button className="w-full border border-cyan-950">Completed</button>
                    </div>
                </div>
        </>
    );
}
 
export default CompleteTask;