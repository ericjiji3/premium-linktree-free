import axios from "axios"
import { renderToStaticMarkup} from 'react-dom/server';
import Template1 from "../templates/template1";
// import Template2 from "../templates/Template2";
import Home from '../index';

export default async function handler(req, res) {
    // const API_KEY = process.env.JOTFORM_API_KEY;
    const stringHTML = req.query.stringHTML;
    const siteID = req.query.siteID;

    var fs = require("fs");
    console.log(" Writing into an file ");
    let htmlWDoc = "<!DOCTYPE html>" + stringHTML;

    // Sample.txt is an empty file
    fs.writeFile(
      "output.html",
      htmlWDoc,
      function (err) {
        if (err) {
          return console.error(err);
        }
      
        // If no error the remaining code executes
        console.log(" Finished writing ");
        console.log("Reading the data that's written");
      
        // Reading the file
        fs.readFile("output.html", function (err, data) {
          if (err) {
            return console.error(err);
          }
          console.log("Data read : " + data.toString());
            
        });
      }
    );
    try{
        const response = await axios.post(`https://api.netlify.com/api/v1/sites/${siteID}/deploys`,
            {
                "files": {
                  
                },
                    
            },
            {headers: {
                'User-Agent' : 'MyApp (YOUR_NAME@EXAMPLE.COM)',
                'Authorization' : 'Bearer hAHnCOPnqN3xiKgcxMo2HY-ADcOj56kT6NhPdB3sF3U'
            }}
            );
        
        const data = response.data;
        res.status(200).json(data);
    }catch(error){
        res.status(500).json({message: error});
    }
    
  }