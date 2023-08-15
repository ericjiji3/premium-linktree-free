import { forwardRef } from 'react';


const Template1 = forwardRef(({data}, ref) => {
    return data && (
        <div ref={ref}>
            TEMPLATE 1
            {
              data.length != 0 && <div>Full Name: {data.firstName} {data.lastName}</div>
            }
            {
              data.length != 0 && <div>Bio: {data.bio}</div>
            }
            {data.socials?.map((social, index) => {
              return(<div key={index}>
                <div>Platform: {social.Dropdown}</div>
                <div>URL: {social.URL}</div>
              </div>)
            })}
            {data.photoVideo?.map((photo, index) => {
              return(<div key={index}>
                Photo URL: {photo}
              </div>)
            })}

        </div>
    )
});

export default Template1;