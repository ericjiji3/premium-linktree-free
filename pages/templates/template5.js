import { forwardRef } from 'react';
import Image from 'next/image'
import {useState, useEffect, useRef} from 'react';



const Template5 = forwardRef(({data}, ref) => {


    return data && (
        <div ref={ref}>
          <div className="temp5Container">
          <div className="hero">
            {
              data.length != 0 && 
              
                <div className="imgText">
                    <span><p>Hello, my name is</p>{data.firstName}</span>
                  <div className="imgContainer"><img className="imageBanner" src={data.photoVideo[0]}></img></div>
                  <span>{data.lastName}</span> 
                </div>    
        
                
            }
            <div id="about" className='aboutContainer'>
                <span className="heading"><b>ABOUT ME</b></span>
                {
                data.phone && 
                <div className="flex">
                    <div className="bio">{data.bio}</div>
                    <div className="socialLinks">
                    <div className="socialContainer">
                    <a className="phoneContainer" href={`tel: ${data.phone.replace(/([()])/g, '').replace(/\s+/g, '-')}`}>
                        <div className="imageBanner">
                        <img width="20" height="20" src="https://img.icons8.com/fluency/48/ringer-volume.png" alt="ringer-volume"/>
                        </div>
                    </a>
                    </div>
                    <div className="socialContainer">
                    <a className="mailContainer" href={`mailto: ${data.email}`}>
                        <div className="imageBanner">
                        <img width="20" height="20" src="https://img.icons8.com/fluency/48/gmail.png" alt="gmail"/>
                        </div>
                    </a>
                    </div>
                    {data.socials?.map((social, index) => {
                    return(
                    <div key={index} className="socialContainer">
                    {/* <div>Platform: {social.Dropdown}</div> */}
                    <a href={social.URL}>
                        <div className={social.Dropdown}></div>
                    </a>
                        {/* <div>URL: {social.URL}</div> */}
                    </div>
                    )
                    
                })}
                </div>
                
            </div>
            }
            </div>
          </div>
          </div>
        </div>
    )
});

Template5.displayName = 'Template5';
export default Template5;