"use client";

import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();

    return (
        <>
            <h1>Blog Page</h1>
            <button onClick={() => router.push("/")}>Home Page</button>
            <br/><br/>
            <button onClick={() => router.push("/Login-form")}>Login Form</button>
            <br/><br/>
            <button onClick={() => router.push("/blogs/Newblog")}>NewBlog</button>
        </>
    )
}

export default Page