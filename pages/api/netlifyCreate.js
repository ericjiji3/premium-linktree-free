import axios from "axios"

export default async function handler(req, res) {
    // const API_KEY = process.env.JOTFORM_API_KEY;
    // const id = req.query.id;
    // console.log(id);
    const config = {
		headers: {
			'User-Agent' : 'MyApp (YOUR_NAME@EXAMPLE.COM)',
            'Authorization' : 'Bearer hAHnCOPnqN3xiKgcxMo2HY-ADcOj56kT6NhPdB3sF3U'
		}
	};

    try{
        const response = await axios.post('https://api.netlify.com/api/v1/sites',
            {
               
            },
            {headers: {
                'User-Agent' : 'MyApp (YOUR_NAME@EXAMPLE.COM)',
                'Authorization' : 'Bearer hAHnCOPnqN3xiKgcxMo2HY-ADcOj56kT6NhPdB3sF3U'
            }}
            );
        
        const data = response.data;
        res.status(200).json(data);
    }catch(error){
        res.status(500).json({message: 'Error creating site'});
    }
    
    try{
        const response = await axios.post('https://api.netlify.com/api/v1/sites',
            {
               
            },
            {headers: {
                'User-Agent' : 'MyApp (YOUR_NAME@EXAMPLE.COM)',
                'Authorization' : 'Bearer hAHnCOPnqN3xiKgcxMo2HY-ADcOj56kT6NhPdB3sF3U'
            }}
            );
        
        const data = response.data;
        res.status(200).json(data);
    }catch(error){
        res.status(500).json({message: 'Error creating site'});
    }
  }