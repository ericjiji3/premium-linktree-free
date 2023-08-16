import axios from "axios"
import JSZip from "jszip"
import zip from 'zip'
import { saveAs } from 'file-saver'
import { renderToStaticMarkup} from 'react-dom/server';
import Template1 from "../templates/template1";
// import Template2 from "../templates/Template2";
import Home from '../index';

export default async function handler(req, res) {
    // const API_KEY = process.env.JOTFORM_API_KEY;
    const stringHTML = req.query.stringHTML;
    const siteID = req.query.siteID;

    var fs = require("fs-extra");
    console.log(" Writing into an file ");
    let htmlWDoc = "<!DOCTYPE html>" + stringHTML;

    // Sample.txt is an empty file
    fs.writeFile(
      "index.html",
      htmlWDoc,
      function (err) {
        if (err) {
          return console.error(err);
        }
      
        // If no error the remaining code executes
        console.log(" Finished writing ");
        console.log("Reading the data that's written");
        
        // Reading the file
        fs.readFile("index.html", function (err, data) {
          if (err) {
            return console.error(err);
          }
          console.log("Data read : " + data.toString());
            
        });
        var AdmZip = require("adm-zip");
        var zip = new AdmZip();
        zip.addLocalFile("index.html", 'website');
        zip.writeZip('website.zip');

        }
    );

    // Get the list of files to zip
    // const files = ['output.html'];

    // // Create a new zip file
    // let zip = fs.createWriteStream('website.zip');

    // // Add the files to the zip file
    // files.forEach(file => {
    //   zip.writeFile(file, {
    //     read: fs.readFileSync(file)
    //   });
    // });

    // // Close the zip file
    // zip.close();

    
    
  try{
    // const zip = new JSZip();
    // zip.file(`index.html`, fs.readFileSync('output.html'))

    // zip.generateNodeStream({ type: 'blob', streamFiles: true })
    //     .pipe(fs.createWriteStream('website.zip'))
    //     .on('finish', function () {
    //         console.log("sample.zip written.");
    //     });
      const file = fs.createReadStream(`website.zip`);

      const response = await axios.post(`https://api.netlify.com/api/v1/sites/${siteID}/deploys`,
          file,
          {headers: {
              'Content-Type' : 'application/zip',
              'User-Agent' : 'MyApp (YOUR_NAME@EXAMPLE.COM)',
              'Authorization' : 'Bearer hAHnCOPnqN3xiKgcxMo2HY-ADcOj56kT6NhPdB3sF3U'
          }}
          );
      
      const data = response.data;
      res.status(200).json(data);
  }catch(error){
    console.log('error');
      res.status(500).json({message: error});
  }
    
    // const zip = new JSZip();
    // zip.file(`output.html`, fs.readFileSync('output.html'));
    // zip.generateAsync({type:"blob"}).then(content => {
      
    //   saveAs(content, "example.zip");
    //   try{
    //     const response = axios.post(`https://api.netlify.com/api/v1/sites/${siteID}/deploys`,
    //         content,
    //         {headers: {
    //             'Content-Type' : 'application/zip',
    //             'User-Agent' : 'MyApp (YOUR_NAME@EXAMPLE.COM)',
    //             'Authorization' : 'Bearer hAHnCOPnqN3xiKgcxMo2HY-ADcOj56kT6NhPdB3sF3U'
    //         }}
    //         );
        
    //     const data = response.data;
    //     res.status(200).json(data);
    // }catch(error){
    //     res.status(500).json({message: error});
    // }
    // })

   
    
  }