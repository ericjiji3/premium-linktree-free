import { forwardRef } from 'react';
import Image from 'next/image'
import {useState, useEffect, useRef} from 'react';

const Template1 = forwardRef(({data}, ref) => {

  console.log(data);
    return data && (
        <div ref={ref}>
            TEMPLATE 1
            {
              data.length != 0 && <div className="name">Full Name: {data.firstName} {data.lastName}</div>
            }
            {
              data.length != 0 && <div>Bio: {data.bio}</div>
            }
            <div className="">

            </div>
            {data.socials?.map((social, index) => {
              return(
              <div key={index} className="socialContainer">
                {/* <div>Platform: {social.Dropdown}</div> */}
                <a className={social.Dropdown} href={social.URL}>{social.Dropdown}</a>
                {/* <div>URL: {social.URL}</div> */}
              </div>
              )
            })}
            {data.photoVideo?.map((photo, index) => {
              return(<div key={index}>
                <Image src="https://www.jotform.com/uploads/jijijiweb/232195484018054/5673341588127755826/logo%20(1).png" width={50} height={100}/>
                
              </div>)
            })}
            <a href="https://www.jotform.com/uploads/jijijiweb/232195484018054/5673341588127755826/logo%20%281%29.png" target="_blank" title="logo (1).png">logo (1).png</a>
        </div>
    )
});

export default Template1;