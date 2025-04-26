import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = ({ }) => {

    const [userData,setUserData] = useContext(AuthContext)
    return (
        <>
            <div className="p-5 bg-[#232230] rounded my-5 shadow-sm shadow-[#0e0d1c] z-10">
                <div className="bg-[#373649] py-2 px-4 mb-2 flex justify-between text-center font-extrabold">
                    <h2 className=" text-lg font-medium w-1/5">Employee Name</h2>
                    <h3 className=" text-lg font-medium w-1/5">New Task</h3>
                    <h5 className=" text-lg font-medium w-1/5">Active Task</h5>
                    <h5 className=" text-lg font-medium w-1/5">Completed</h5>
                    <h5 className=" text-lg font-medium w-1/5">Failed</h5>


                </div>
                <div className="h-[80%] overflow-auto text-center ">
                    {userData.map((elem, idx) => {
                        return (<div key={idx} className="border-t-2 border-b-2 border-[#373649] py-2 px-4 mb-2 flex justify-between">
                            <h2 className="text-lg border-l-2 border-r-2 border-[#373649] font-medium w-1/5">{elem.firstName}</h2>
                            <h3 className="text-lg border-r-2 border-[#373649] font-bold w-1/5 text-[#217A88]">{elem.taskCounts.newTask}</h3>
                            <h5 className="text-lg border-r-2 border-[#373649] font-bold w-1/5 text-[#AE8160]">{elem.taskCounts.active}</h5>
                            <h5 className="text-lg border-r-2 border-[#373649] font-bold w-1/5 text-[#20695E]">{elem.taskCounts.completed}</h5>
                            <h5 className="text-lg border-r-2 border-[#373649] font-bold w-1/5 text-[#9E4153]">{elem.taskCounts.failed}</h5>

                        </div>)
                    })}
                </div>


            </div>
        </>
    );
}

export default AllTask;