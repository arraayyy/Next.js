
"use client";
import styles from "./page.module.css";

export default function Home() {
  const color = (picker) => {
    alert(picker);
   // var a = "Jhone";
   myNameState = "Lewis";
  }
  return (
    <main className={styles.main}>
      {/* 
      <Page name="First"/>
      <Page name="Second"/>
      <Page name="Third"/>
      <Page name="Fourth"/>
      <Page name="Fifth"/>
      <Login data="My name  is Roe" /> 
      */}

      <h1>Hello World</h1>
      {/* <button onClick={() => color('yellow')}>Click here</button> */}
    </main>
  );
}

const Page = (props) => {
  return (
    <div>{props.name} Page</div>
  )
}


