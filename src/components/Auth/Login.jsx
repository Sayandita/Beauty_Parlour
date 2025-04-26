import { useState } from "react";

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Email is", email)
        console.log("Password is", password)
        handleLogin(email, password)
        setEmail('')
        setPassword('')
    }
    return (
        <>
            <div className="flex h-screen w-screen items-center justify-center">
                <div className="border-2 h-fit border-[#373649] bg-[#232230] px-15 py-20 rounded-xl">
                    <h1 className="text-center font-bold text-4xl mb-10">Login</h1>

                    <form
                        onSubmit={(e) => {
                            submitHandler(e)
                        }}
                        className="flex gap-5 flex-col items-center justify-center">
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            required
                            className="text-xl outline-none bg-transparent border-2 border-[#373649] rounded-full py-3 px-5 placeholder:text-gray-400" type="email" placeholder="Enter your Email"
                        />
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            required
                            className="text-xl outline-none bg-transparent border-2 border-[#373649] rounded-full py-3 px-5 placeholder:text-gray-400" type="password" placeholder="Enter Password"
                        />
                        <button className="duration-200 font-bold mt-2.5 text-xl outline-none border-none bg-[#217A88] hover:bg-[#2b9cad] rounded py-3 w-[100%]">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;