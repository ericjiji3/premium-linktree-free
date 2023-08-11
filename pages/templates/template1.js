


export default function Template1(props){
    return props.data && (
        <div>
            TEMPLATE 1
            {
              props.data.length != 0 && <div>Full Name: {props.data.firstName} {props.data.lastName}</div>
            }
            {
              props.data.length != 0 && <div>Bio: {props.data.bio}</div>
            }
            {props.data.socials?.map((social, index) => {
              return(<div key={index}>
                <div>Platform: {social.Dropdown}</div>
                <div>URL: {social.URL}</div>
              </div>)
            })}
            {props.data.photoVideo?.map((photo, index) => {
              return(<div key={index}>
                Photo URL: {photo}
              </div>)
            })}

        </div>
    )
}