import { useEffect, useState } from "react";
//import { setLocalStorage } from "../../Utils/localStorage";

const Header = (props) => {
    const [username, setUsername] = useState('User')

    useEffect(() => {
        if (props.data && props.data.firstName) {
            setUsername(props.data.firstName);
        } else {
            setUsername('Admin');
        }
    }, [props.data]);
    
    const logOutUser = ()=>{
        localStorage.setItem('loggedInUser','')
        props.changeUser('')
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-medium">Hello<br/><span className="text-3xl font-semibold">{username} 👋</span></h1>
                <button onClick={logOutUser} className="bg-[#9E4153] text-lg font-medium px-5 py-2 rounded-sm">LogOut</button>
            </div>
        </>
    );
}
 
export default Header;