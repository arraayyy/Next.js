"use client";

import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();

    return (
        <>
            <h1>Login Form</h1>
            <button onClick={() => router.push("/")}>Home Page</button>
            <br/><br/>
            <button onClick={() => router.push("/blogs")}>Blogs Page</button>
            <br/><br/>
            <button onClick={() => router.push("/Login-form/Signup")}>Signup</button>
        </>
    )
}

export default Page