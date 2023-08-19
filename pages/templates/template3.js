import { forwardRef } from 'react';


const Template3 = forwardRef(({data}, ref) => {
    return data && (
        <div ref={ref}>
            {
              data.length != 0 && 
              <div className="temp3Container">
                <div className="hero">
                    <div className="intro">
                        <div className="name"><b>{data.firstName} {data.lastName}®</b></div>
                        <div className="bioContainer">
                            <div className="col1">
                                <span>(DESCRIPTION)</span>
                            </div>
                            <div className="col2">
                                <span className="bio"><b>{data.bio}</b></span>
                                <div className="imageContainer">
                                    <img src={data.photoVideo[0]}/>
                                </div>
                            </div>
                            
                            
                        </div>
                        <div className="contactButtons">
                            <div className="col1">
                                <span>(CONTACT)</span>
                            </div>
                            <div className="col2">
                            {
                                data.phone && 
                                <a className="phoneContainer" href={`tel: ${data.phone.replace(/([()])/g, '').replace(/\s+/g, '-')}`}>
                                    <div className="info">
                                        <span className="title">
                                            <div className="number">(01).</div>
                                            <div className="action">Call</div>
                                        </span>
                                        <span className="data">{data.phone}</span>
                                    </div>
                                </a>
                            }
                            {
                                data.email && 
                                <a className="mailContainer" href={`mailto: ${data.email}`}>
                                    <div className="info">
                                        <span className="title">
                                            <div className="number">(02).</div>
                                            <div className="action">Email</div>
                                        </span>
                                        <span className="data">{data.email}</span>
                                    </div>
                                </a>
                            }
                            </div>    
                        </div>
                    </div>
                    
                </div>
                <div className="socialLinks">
                    <div className="header"><b>Socials®</b></div>
                    {data.socials?.map((social, index) => {
                        return(
                        <div key={index} className="socialContainer">
                        {/* <div>Platform: {social.Dropdown}</div> */}
                        <a href={social.URL}>
                            <span><b>{social.Dropdown}</b></span>
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
    )
});

Template3.displayName = 'Template3';
export default Template3;