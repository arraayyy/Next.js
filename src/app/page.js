
"use client";
import Login from "./Login.";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  // const [user, setUser] = useState('Roe');
  // const [user1, setUser1] = useState('Roe11');
 
  // const update = () => {
  //   setUser("Kim"); 
  // }

  // const update1 = () => {
  //   setUser1("Kim1"); 
  // }

  // useEffect(() => {
  //   alert('useEffect called');
  // }, [user]);
  
  const router = useRouter();
  const navigate = (blog) => {
    router.push("/blogs/" + blog);
  }
  return (
    <main >
      
      <Login />

      <h1>My first name is </h1>
      <button onClick={() => update()}>Click here</button>
      <button onClick={() => update1()}>Click here</button>
      <br/> <br/>
      <button Click={() => router.push("/blogs")}>
        Go to Blogs Page
      </button>
      <br/> <br/>
      <button onClick={() => router.push("/Login-form")}>
        Go to Login Form
      </button>
      <br/> <br/>
      <button onClick={() => navigate("/Newblog")}>
        Go to NewBlog
      </button>
      <br/> <br/>
      <button onClick={() => router.push("/Login-form/Signup")}>
        Go to Signup
      </button>
    </main>
  );
}

const Page = (props) => {
  return (
    <div>{props.name} Page</div>
  )
}


