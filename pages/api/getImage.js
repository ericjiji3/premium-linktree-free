import axios from "axios"

export default async function handler(req, res) {
    const API_KEY = process.env.JOTFORM_API_KEY;
    const url = req.query.url;
    console.log(url);
    // https://api.jotform.com/submission/${id}?apiKey=${API_KEY}
    // try{
        const response = await axios.get(url);
        
        const data = response.data;
    //     res.status(200).json(data);
    // }catch(error){
    //     res.status(500).json({message: 'Error fetching form data'});
    // }
    
  }