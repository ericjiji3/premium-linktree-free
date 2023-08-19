import { forwardRef } from 'react';


const Template2 = forwardRef(({data}, ref) => {
    return data && (
        <div ref={ref}>
            {
              data.length != 0 && 
              <div className="temp2Container">
                <div className="hero">
                    <div className="intro">
                        <div className="hello"><b><span className="red">Hello</span>, my name is</b></div>
                        <div className="name"><span className="red"><b>{data.firstName} {data.lastName}</b></span></div>
                        <div className="bio">{data.bio}</div>
                        <div className="contactButtons">
                        {
                            data.phone && 
                            <a className="phoneContainer" href={`tel: ${data.phone.replace(/([()])/g, '').replace(/\s+/g, '-')}`}>
                                <span>📲<b>Call</b></span>
                            </a>
                        }
                        {
                            data.email && 
                            <a className="mailContainer" href={`mailto: ${data.email}`}>
                                <span>📧<b>Email</b></span>
                            </a>
                        }
                        
                        </div>
                    </div>
                    <div className="imageContainer">
                        <img src={data.photoVideo[0]}/>
                    </div>
                </div>
                <div className="divider">
                    <span>Social Links</span>
                </div>
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
            }
        </div>
    )
});

export default Template2;