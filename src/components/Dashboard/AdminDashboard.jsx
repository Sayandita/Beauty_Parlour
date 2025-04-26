import AllTask from "../Sections/AllTask";
import CreateTask from "../Sections/CreateTask";
import Header from "../Sections/Header";


const AdminDashboard = (props) => {
    return (
        <>
            <div className="h-screen w-full p-7">
                <Header changeUser={props.changeUser} />
                <CreateTask />
                <AllTask />
            </div>
        </>
    );
}

export default AdminDashboard;