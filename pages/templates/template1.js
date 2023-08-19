import { forwardRef } from 'react';
import Image from 'next/image'
import {useState, useEffect, useRef} from 'react';


const template1 = forwardRef(({data}, ref) => {
  console.log(data);
    return data && (
        <div ref={ref}>
          <div className="temp1Container">
            {
              data.length != 0 && 
              <div className="hero">
                <div className="shooting-stars"></div>
                
                <div className="nameContainer">
                  <div className="flex">
                    <div className="fullName">
                      <div className="firstName"><b>{data.firstName}</b></div>
                      <div className="lastName"><b>{data.lastName}</b></div>
                    </div>
                    <div className="imageContainer">
                      <img className="image" src={data.photoVideo[0]}></img>
                    </div> 
                  </div>
                  
                  <div className="bio">{data.bio}</div>
                </div>  
                <div className="phoneEmail">
                  <a className="phoneContainer" href={`tel: ${data.phone.replace(/([()])/g, '').replace(/\s+/g, '-')}`}>
                    <span className="emoji">📲</span>
                    <span><b>Contact</b></span>
                  </a>
                  <a className="mailContainer" href={`mailto: ${data.email}`}>
                    <span className="emoji">📧</span>
                    <span><b>Email</b></span>
                  </a>
                </div>
                {/* {data.photoVideo?.map((photo, index) => {
                  console.log('photo: ', photo);
                  return(
                  <div key={index}>
                    <img src={photo} alt="oops"/>
                    
                  </div>)
                })} */}
              </div>
              
            }
            <div className="socialLinks">
              {data.socials?.map((social, index) => {
                return(
                <div key={index} className="socialContainer">
                  {/* <div>Platform: {social.Dropdown}</div> */}
                  <a href={social.URL}>
                    <div className={social.Dropdown}></div>
                    <span><b>{social.Dropdown}</b></span>
                  </a>
                  {/* <div>URL: {social.URL}</div> */}
                </div>
                )
              })}
            </div>
           
            
          </div>
        </div>
    )
});

export default template1;