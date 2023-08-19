import { forwardRef } from 'react';
import Image from 'next/image'
import {useState, useEffect, useRef} from 'react';



const Template4 = forwardRef(({data}, ref) => {
    const [dark,setDark] = useState(false);
    const toggle = () => {
        if(dark){
            setDark(false);
        }else{
            setDark(true);
        }
    }

    return data && (
        <div ref={ref}>
          <div className={dark ? "temp4Container active" : "temp4Container"}>
            {
              data.length != 0 && 
              <div className="hero">
                <div className="avatar">
                  <img className="imageBanner" src={data.photoVideo[0]}></img>
                </div>  
                <div className="nameContainer">
                  <span>Welcome to <b>{data.firstName} {data.lastName}&apos;s links</b></span>
                  <div className="darkMode" onClick={toggle}>

                  </div>
                  
                </div>  
              </div>
            }
            <div className="bio">{data.bio}</div>
            {
                data.phone && 
                <div className="socialLinks">
                    <div className="socialContainer">
                    <a className="phoneContainer" href={`tel: ${data.phone.replace(/([()])/g, '').replace(/\s+/g, '-')}`}>
                        <div className="imageBanner">
                            <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="phone"/>
                        </div>
                        <span><b>Contact</b></span>
                        <span>{data.phone}</span>
                    </a>
                    </div>
                    <div className="socialContainer">
                    <a className="mailContainer" href={`mailto: ${data.email}`}>
                        <div className="imageBanner">
                        <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/ffffff/secured-letter--v1.png" alt="secured-letter--v1"/>
                        </div>
                        <span><b>Email</b></span>
                        <span>{data.email}</span>
                    </a>
                    </div>
                    {data.socials?.map((social, index) => {
                    return(
                    <div key={index} className="socialContainer">
                    {/* <div>Platform: {social.Dropdown}</div> */}
                    <a href={social.URL}>
                        <div className="imageBanner">
                            <div className={social.Dropdown}></div>
                        </div>
                        <span><b>{social.Dropdown}</b></span>
                    </a>
                    {/* <div>URL: {social.URL}</div> */}
                </div>
                )
              })}
            </div>
            }
            
           
            
          </div>
        </div>
    )
});

Template4.displayName = 'Template4';
export default Template4;