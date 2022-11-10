import { useRouter } from "next/router";
import { useContext, useState } from "react"

export default function LogIn() {

    const [email,setEmail] = useState();
    const [password, setPassword] = useState();

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = 
        router.push('/dashboard')
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
                <label class="block text-gray-700 text-sm font-bold mb-2" >
                    Password
                </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setPassword(e.target.value)} type="password" placeholder="Password"></input>
                </div>
                <div class="flex items-center justify-between">
                <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSubmit} type="submit">
                    Log In
                </button>
                </div>
            </form>
            </div>
        </div>
    )
}