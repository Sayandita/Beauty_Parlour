import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthProvider"
import { v4 as uuidv4 } from 'uuid';
const CreateTask = () => {

        const [userData,setUserData] = useContext(AuthContext)
    

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    //const [newTask, setNewTask] = useState({})

    const submitHandler = (e)=>{
        e.preventDefault()

        if (!taskTitle || !taskDescription || !taskDate || !asignTo || !category) {
            alert('Please fill in all fields.');
            return;
        }
        

        const newTask ={id: uuidv4(),taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false}
        //const data = JSON.parse(localStorage.getItem('employees'))
        const data = userData
        
        data.forEach((elem)=>{
            if(asignTo == elem.firstName){
                //console.log("hello")
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.NewTask + 1
            }
        })
        setUserData(data)
        console.log(data)
        //localStorage.setItem('employees',JSON.stringify(data))
        //console.log(taskTitle, taskDescription, taskDate, asignTo, Category)
        setTaskDate('')
        setAsignTo('')
        setCategory('')
        setTaskDescription('')
        setTaskTitle('')
        
    }

    return (
        <>
            <div className="p-5 bg-[#232230] mt-5 rounded shadow-sm shadow-[#0e0d1c]">
                    <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-wrap w-full items-start justify-between text-l'>
                        <div className="w-1/2">
                            <div>
                                <h3 className='text-gray-300 mb-0.5'>Task Title</h3>
                                <input 
                                value = {taskTitle} 
                                onChange={(e)=>{
                                    setTaskTitle(e.target.value)
                                }}
                                className='py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder="Make an appointment" 
                                />
                            </div>
                            <div>
                                <h3 className='text-gray-300 mb-0.5'>Date</h3>
                                <input 
                                value = {taskDate} 
                                onChange={(e)=>{
                                    setTaskDate(e.target.value)
                                }}
                                className='py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" 
                                />
                            </div>
                            <div>
                                <h3 className='text-gray-300 mb-0.5'>Assign To</h3>
                                <input
                                value = {asignTo} 
                                onChange={(e)=>{
                                    setAsignTo(e.target.value)
                                }}
                                className='py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder="Employee Name" 
                                />
                            </div>
                            <div>
                                <h3 className='text-gray-300 mb-0.5'>Category</h3>
                                <input 
                                value = {category} 
                                onChange={(e)=>{
                                    setCategory(e.target.value)
                                }}
                                className='py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder="colour,perm etc" 
                                />
                            </div>
                        </div>

                        <div className="w-2/5 flex flex-col items-start">
                            <h3 className="text-l text-gray-300 mb-0.5">Description</h3>
                            <textarea 
                            value = {taskDescription} 
                            onChange={(e)=>{
                                setTaskDescription(e.target.value)
                            }}
                            className='w-full h-44 text-l py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols="30" rows="10"></textarea>
                            <button className='bg-[#20695E] py-3 hover:bg-[#2e8477] px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                        </div>
                    </form>
                </div>
        </>
    );
}
 
export default CreateTask;