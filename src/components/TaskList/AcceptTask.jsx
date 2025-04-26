const AcceptTask = ({data, onComplete, onFail}) => {
    // console.log("Props received in AcceptTask:", { data, onComplete, onFail });
    
    return (
        <>
            <div className="h-full w-[300px] bg-[#232230] p-5 rounded-xl shrink-0">
                    <div className="flex  justify-between items-center">
                        <h3 className="bg-red-600 px-3 py-1 rounded text-sm">{data.category}</h3>
                        <h4 className="text-sm">{data.taskDate}</h4>
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
                    <p className="text-sm mt-2">
                        {data.taskDescription}
                    </p>
                    <div className="flex justify-between mt-4">
                        <button className="bg-green-500 py-1 px-2 text-sm" onClick={() => onComplete(data.id)}>Mark as Completed</button>
                        <button className="bg-red-500 py-1 px-2 text-sm" onClick={() => onFail(data.id)}>Mark as Failed</button>
                    </div>
                </div>
        </>
    );
}

export default AcceptTask;
/* bg-[#AE8160] */