import { useContext, useState } from "react"
import Router, { useRouter } from "next/router";
import { useRef } from "react"
import validateEmail from "../Functions/auth/validateEmail";
import { UserContext } from "../Functions/auth/contexts/UserContext";
import app from "../Functions/firebase/initFirebase"
import 'firebase/auth'
import { getAuth, createUserWithEmailAndPassword, updatePassword, updateProfile } from "firebase/auth";

export default function Register() {

    const [email,setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const { user, setUser } = useContext(UserContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`/api/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, username: username, password: password })
        })
        setUser(res)
        console.log(res)
        Router = useRouter()
        Router.push('/dashboard')
    }


    return (
        <div className=" bg-gray-100">
            <div class="mx-auto my-auto flex items-center justify-center h-screen">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                    Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setEmail(e.target.value)} id="email" type="text" placeholder="Email"></input>
                </div>
                <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                    Username
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setUsername(e.target.value)} id="username" type="text" placeholder="Username"></input>
                </div>
                <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" >
                    Password
                </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setPassword(e.target.value)} type="password" placeholder="Password"></input>
                </div>
                <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                    Confirm Password
                </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password"></input>
                </div>
                <div class="flex items-center justify-between">
                <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSubmit} type="submit">
                    Register
                </button>
                </div>
            </form>
            </div>
        </div>
    )
}
