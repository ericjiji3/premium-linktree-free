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
import Template3 from './templates/template3'
import Template4 from './templates/template4'
import Template5 from './templates/template5'
import Qr from '../public/qr-code.png';
import Logo from '../public/logo.png';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [formData, setFormData] = useState([]);
  const [showSubmit, setShowSubmit] = useState(false);
  const [template1, setTemplate1] = useState(false);
  const [template2, setTemplate2] = useState(false);
  const [template3, setTemplate3] = useState(false);
  const [template4, setTemplate4] = useState(false);
  const [template5, setTemplate5] = useState(false);
  const temp1 = useRef(null);
  const temp2 = useRef(null);
  const temp3 = useRef(null);
  const temp4 = useRef(null);
  const temp5 = useRef(null);

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
        }else if(field.text == "Photo(just one pls!!)"){
          cleaningForm['photoVideo'] = field.answer;
        }else if(field.text == "Phone Number"){
          cleaningForm['phone'] = field.answer.full;
        }else if(field.text == "Email"){
          cleaningForm['email'] = field.answer;
        }else{
          let res = field.answer.replace('#', '%23');
          cleaningForm['bio'] = res;
        }
      }
    })
    
    return cleaningForm;
  }
  // setTemplate1(true);
  // setTemplate2(true);
  // setTemplate3(true);
  // setTemplate4(true);
  // setTemplate5(true);
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
      
      // console.log(stringHTML);
      // console.log('eiraoe');
      if(template1){
        const stringHTML = temp1.current.innerHTML;
        const env = await fetch(`/api/createHTML?stringHTML=${stringHTML}&siteID=${createData.site_id}&template=1`)
        const envData = await env.json();
        console.log('envData:' ,envData);
      }
      if(template2){
        const stringHTML = temp2.current.innerHTML;
        const env = await fetch(`/api/createHTML?stringHTML=${stringHTML}&siteID=${createData.site_id}&template=2`)
        const envData = await env.json();
        console.log('envData:' ,envData);
      }
      if(template3){
        const stringHTML = temp3.current.innerHTML;
        console.log('innerhtml:' ,stringHTML);
        const env = await fetch(`/api/createHTML?stringHTML=${stringHTML}&siteID=${createData.site_id}&template=3`)
        const envData = await env.json();
        console.log('envData:' ,envData);
      }
      if(template4){
        const stringHTML = temp4.current.innerHTML;
        console.log('innerhtml:' ,stringHTML);
        const env = await fetch(`/api/createHTML?stringHTML=${stringHTML}&siteID=${createData.site_id}&template=4`)
        const envData = await env.json();
        console.log('envData:' ,envData);
      }
      if(template5){
        const stringHTML = temp5.current.innerHTML;
        console.log('innerhtml:' ,stringHTML);
        const env = await fetch(`/api/createHTML?stringHTML=${stringHTML}&siteID=${createData.site_id}&template=5`)
        const envData = await env.json();
        console.log('envData:' ,envData);
      }
      
      
      
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
      setTemplate1(true);
      setTemplate2(false);
      setTemplate3(false);
      setTemplate4(false);
      setTemplate5(false);
      setShowSubmit(true);
      
    }
    if(e.currentTarget.id == '2'){
      setTemplate1(false);
      setTemplate2(true);
      setTemplate3(false);
      setTemplate4(false);
      setTemplate5(false);
      setShowSubmit(true);
    }
    if(e.currentTarget.id == '3'){
      setTemplate1(false);
      setTemplate2(false);
      setTemplate3(true);
      setTemplate4(false);
      setTemplate5(false);
      setShowSubmit(true);
    }
    if(e.currentTarget.id == '4'){
      setTemplate1(false);
      setTemplate2(false);
      setTemplate3(false);
      setTemplate4(true);
      setTemplate5(false);
      setShowSubmit(true);
    }
    if(e.currentTarget.id == '5'){
      setTemplate1(false);
      setTemplate2(false);
      setTemplate3(false);
      setTemplate4(false);
      setTemplate5(true);
      setShowSubmit(true);
    }
  }

  const clickBack = (e) => {
    e.preventDefault();
    setTemplate1(true);
    setTemplate2(true);
    setTemplate3(true);
    setTemplate4(true);
    setTemplate5(true);
    setShowSubmit(false);
  }



  return formData && (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.hero}>
          <div className={styles.topContainer}>
            <div className={styles.col}>
              <div className={styles.flex}>
                <h2>JIJITREE</h2>
                <Image className={styles.logo} src={Logo} width={50} height={50}/>
              </div>
              
              <h3>Put all of your social media links on one page!</h3>
            </div>
            <div className={styles.col}>
              <h3>Its like LinkTree, but cooler😎</h3>
              <form onSubmit={fetchForm}>
                <label>Submission ID</label>
                <input type="text" id="submitID" name="submitID" />
                <button type="submit">SUBMIT</button>
              </form>
            </div>
          </div>
          <h3 className={styles.howTitle}>How it Works:</h3>
          <div className={styles.stepsContainer}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>
                <span>Step 1.</span>
              </div>
              <div className={styles.stepContent}>
                <span>Scan the QR code and fill out the form.</span>
                <Image src={Qr} width={150} height={150}/>
              </div>
              
            </div>
            <div className={styles.step}>
            <div className={styles.stepNumber}>
              <span>Step 2.</span>
            </div>
            <div className={styles.stepContent}>
              <span>Enter the submission ID of the form.</span>
            </div> 
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>
                <span>Step 3.</span>
              </div>
              <div className={styles.stepContent}>
                <span>Pick a Jijitree template.</span>
              </div>

            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>
                <span>Step 4.</span>
              </div>
              <div className={styles.stepContent}>
              <span>Submit the template, and your personalized Jijitree website will be published!</span>
              </div>
              
            </div>
          </div>
          
        </div>
          <div className={styles.tempNav}>
            <div id="1" className={styles.navItem} onClick={clickTemplate}>Template 1</div>
            <div id="2" className={styles.navItem} onClick={clickTemplate}>Template 2</div>
            <div id="3" className={styles.navItem} onClick={clickTemplate}>Template 3</div>
            <div id="4" className={styles.navItem} onClick={clickTemplate}>Template 4</div>
            <div id="5" className={styles.navItem} onClick={clickTemplate}>Template 5</div>
          </div>
          <div id="1" className={template1 ? styles.tempContainer : `${styles.tempContainer} ${styles.inactive}`} >
            <Template1 data={formData} ref={temp1}/>
          </div>
          <div id="2" className={template2 ? styles.tempContainer : `${styles.tempContainer} ${styles.inactive}`} >
            <Template2 data={formData} ref={temp2}/>
          </div>
          <div id="3" className={template3 ? styles.tempContainer : `${styles.tempContainer} ${styles.inactive}`} >
            <Template3 data={formData} ref={temp3}/>
          </div>
          <div id="4" className={template4 ? styles.tempContainer : `${styles.tempContainer} ${styles.inactive}`} >
            <Template4 data={formData} ref={temp4}/>
          </div>
          <div id="5" className={template5 ? styles.tempContainer : `${styles.tempContainer} ${styles.inactive}`} >
            <Template5 data={formData} ref={temp5}/>
          </div>
          <div className={showSubmit ? styles.tempSubmit : `${styles.tempSubmit} ${styles.inactive}`} onClick={submitTemplate}>SUBMIT TEMPLATE</div>
          {/* <div className={showSubmit ? styles.tempSubmit : `${styles.tempSubmit} ${styles.inactive}`} onClick={clickBack}>GO BACK</div> */}
      </main>
    </>
  )
}
