import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useState, useEffect} from 'react';
import axios from "axios"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [formData, setFormData] = useState([]);

  const parseForm = (answers) => {
    answers.forEach((field) => {
      if(typeof field.answer !== 'undefined' && typeof field.answer =='string')
      return(
        <div>
          <div>Answer: {field.answer}</div>
          <div>Text: {field.text}</div>
        </div>
      )
      
    if(typeof field.answer !== 'undefined' && typeof field.answer == 'object' && !Array.isArray(field.answer))
      return(
        <div>
          <div>Answer: {field.answer.first} {field.answer.last}</div>
          <div>Text: {field.text}</div>
        </div>
      )
    if(typeof field.answer !== 'undefined' && Array.isArray(field.answer))
      return(
        <div>
          {field.answer.map((assets,i)=>(
            <div key={i}>{assets}</div>
          ))}
          <div>Text: {field.text}</div>
        </div>    
      )
    }
    )
  }

  const fetchForm = async(e) =>{
    e.preventDefault();
      const id = e.target.submitID.value;
      const response = await fetch(`/api/form?id=${id}`);
      const data = await response.json();
      const cleanData = parseForm(data.content.answers);
      console.log(cleanData);
      setFormData(data.content.answers); 
  }
  
  // useEffect(()=>{
  //   async function fetchForm(){
  //     const response = await fetch('/api/form');
  //     const data = response.json();
  //     console.log(data);
  //     setFormData(data);
  //   }
  //   fetchForm();
  // }, [])

  return formData && (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
          <form onSubmit={fetchForm}>
            <label>Submission ID:</label>
            <input type="text" id="submitID" name="submitID" />
            <button type="submit">SUBMIT</button>
          </form>
          {Object.values(formData).map((item,i)=>(
            <div key={i}>
              {parseForm}
            </div>

          ))}
      </main>
    </>
  )
}
