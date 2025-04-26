import Header from "../Sections/Header";
import TaskListNumbers from "../Sections/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
    
    return (
        <>
            <div className="p-10 h-screen w-screen">
                <Header changeUser={props.changeUser} data={props.data}/>
                <div className=" box-border px-5 ">
                    <TaskListNumbers data={props.data}/>
                    <TaskList data={props.data}/>
                </div>
            </div>
        </>
    );
}
 
export default EmployeeDashboard;