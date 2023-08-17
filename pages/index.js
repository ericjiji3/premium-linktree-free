import Head from 'next/head'
import Image from 'next/image'
import JSZip from "jszip"
import { saveAs } from 'file-saver'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useState, useEffect, useRef} from 'react';
import { renderToStaticMarkup} from 'react-dom/server';
import Template1 from './templates/template1'
import Template2 from './templates/template2'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [formData, setFormData] = useState([]);
  const [showSubmit, setShowSubmit] = useState(false);
  const [template1, setTemplate1] = useState(true);
  const [template2, setTemplate2] = useState(true);
  const temp1 = useRef(null);
  const temp2 = useRef();

  const parseForm = (answers) => {
    const cleaningForm = {};
    console.log('parsing: ', answers);
    
    Object.values(answers).map((field, i)=> {
      
      if(typeof field.answer != 'undefined'){
        
        if(field.text == "Social Links"){
          let convertToArr = JSON.parse(field.answer);
          
          cleaningForm['socials'] = convertToArr;
          convertToArr.map((social, index) => {
            console.log(social);
          })
          
          
        }else if(field.text == "Name"){
          cleaningForm['firstName'] = field.answer.first;
          cleaningForm['lastName'] = field.answer.last;
        }else if(field.text == "Photo/Video"){
          cleaningForm['photoVideo'] = field.answer;
        }else if(field.text == "Phone Number"){
          cleaningForm['phone'] = field.answer.full;
        }else if(field.text == "Email"){
          cleaningForm['email'] = field.answer;
        }else{
          cleaningForm['bio'] = field.answer;
        }
      }
    })
    
    return cleaningForm;
  }

  const fetchForm = async(e) =>{
    e.preventDefault();
      const id = e.target.submitID.value;
      const response = await fetch(`/api/form?id=${id}`);
      const data = await response.json();
      // const dataJSON = JSON.parse(data.content.answers);
      const cleanData = parseForm(data.content.answers);
      
      setFormData(cleanData); 
  }

  const submitTemplate = async(e) => {
      e.preventDefault();
      const create = await fetch(`/api/netlifyCreate`);
      const createData = await create.json();
      console.log('createData:' ,createData);
      const stringHTML = temp1.current.innerHTML;
      // console.log(stringHTML);
      // console.log('eiraoe');
      const env = await fetch(`/api/createHTML?stringHTML=${stringHTML}&siteID=${createData.site_id}&template=1`)
      const envData = await env.json();
      console.log('envData:' ,envData);
      
      // const zip = new JSZip();
      // zip.file(`output.html`,output)
      // zip.generateAsync({type:"blob"}).then(content => {
      //   console.log('donwloading zip');
      //   saveAs(content, "example.zip");
      // })
  }


  const clickTemplate = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.id);
    if(e.currentTarget.id == '1'){
      setTemplate2(false);
      setShowSubmit(true);
      
    }
    if(e.currentTarget.id == '2'){
      setTemplate1(false);
      setShowSubmit(true);
    }
  }

  const clickBack = (e) => {
    e.preventDefault();
    setTemplate1(true);
    setTemplate2(true);
    setShowSubmit(false);
  }



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
          <div id="1" className={template1 ? styles.tempContainer : `${styles.tempContainer} ${styles.inactive}`} onClick={clickTemplate}>
            <Template1 data={formData} ref={temp1}/>
          </div>
          <div id="2" className={template2 ? styles.tempContainer : `${styles.tempContainer} ${styles.inactive}`} onClick={clickTemplate}>
            <Template2 data={formData}/>
          </div>
          <div className={showSubmit ? styles.tempSubmit : `${styles.tempSubmit} ${styles.inactive}`} onClick={submitTemplate}>SUBMIT TEMPLATE</div>
          <div className={showSubmit ? styles.tempSubmit : `${styles.tempSubmit} ${styles.inactive}`} onClick={clickBack}>GO BACK</div>
      </main>
    </>
  )
}
