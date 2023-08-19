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
    console.log(req.query.stringHTML);
    var fs = require("fs-extra");
    console.log(" Writing into an file ");
    
    if(req.query.template == '1'){
      console.log('doing 1');
      let styleSheet = "<head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><meta http-equiv='X-UA-Compatible' content='ie=edge'><title>Jijitree</title><link rel='stylesheet' href='template1.css'></head>";
      let htmlWDoc = "<!DOCTYPE html>" + styleSheet + stringHTML + "</html>";
      console.log(htmlWDoc);
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
          zip.addLocalFile("template1.css", "website");
          zip.addLocalFile("logo.png", "website");
          zip.writeZip('website.zip');

          }
      );
    }
    if(req.query.template == '2'){
      let styleSheet = "<head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><meta http-equiv='X-UA-Compatible' content='ie=edge'><title>Jijitree</title><link rel='stylesheet' href='template2.css'></head>";
      let htmlWDoc = "<!DOCTYPE html>" + styleSheet + stringHTML + "</html>";
      console.log(htmlWDoc);
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
          zip.addLocalFile("template2.css", "website");
          zip.addLocalFile("logo.png", "website");
          zip.writeZip('website.zip');

          }
      );
    }
    if(req.query.template == '3'){
      let styleSheet = "<head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><meta http-equiv='X-UA-Compatible' content='ie=edge'><title>Jijitree</title><link rel='stylesheet' href='template3.css'></head>";
      let htmlWDoc = "<!DOCTYPE html>" + styleSheet + stringHTML + "</html>";
      console.log(htmlWDoc);
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
          zip.addLocalFile("template3.css", "website");
          zip.addLocalFile("logo.png", "website");
          zip.writeZip('website.zip');

          }
      );
    }
    if(req.query.template == '4'){
      let styleSheet = "<head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><meta http-equiv='X-UA-Compatible' content='ie=edge'><title>Jijitree</title><script src='temp4.js'></script><link rel='icon' type='image/x-icon' href='logo.png'><link rel='stylesheet' href='template4.css'></head>";
      let htmlWDoc = "<!DOCTYPE html>" + styleSheet + stringHTML + "</html>";
      console.log(htmlWDoc);
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
          zip.addLocalFile("template4.css", "website");
          zip.addLocalFile("temp4.js", "website");
          zip.addLocalFile("logo.png", "website");
          zip.writeZip('website.zip');

          }
      );
    }
    if(req.query.template == '5'){
      let styleSheet = "<head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><meta http-equiv='X-UA-Compatible' content='ie=edge'><title>Jijitree</title><link rel='icon' type='image/x-icon' href='logo.png'><link rel='stylesheet' href='template5.css'></head>";
      let htmlWDoc = "<!DOCTYPE html>" + styleSheet + stringHTML + "</html>";
      console.log(htmlWDoc);
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
          zip.addLocalFile("template5.css", "website");
          zip.addLocalFile("logo.png", "website");
          zip.writeZip('website.zip');

          }
      );
    }
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
    
    
  }