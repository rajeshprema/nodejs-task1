
//const { timeStamp } = require("console");
const express = require("express")
const fs = require("fs")
const path = require("path")
const dirPath = path.join(__dirname,"timestamp")
const app = express()

app.get("/timestamp", (req, res) => {
  let date = new Date();
  const timeStampDate =` Last updated : ${date.toUTCString().slice(0,-3)}`;
  fs.writeFileSync(`${dirPath}/current-date-time.txt`, timeStampDate, (err) => {
    if (err) { 
      res.send({message:"error writing timeStamp"})
    }
  })
  res.sendFile(path.join(dirPath, "current-date-time.txt"));
  
  //const timeStampData = ` Last updated : ${data.toUTCString().slice(0, -3)}`;
  // fs.writeFileSync(`${path.join(dirPath,"current-date-time.txt")}`, timeStampData,
  // if(err) {
  // res.send({message:"error wriiting timeStamp"})
})

 // })
//res.sendFile(path.join(dirPath, "current-date-time-txt"))

//})

//http://localhost:9000/

app.listen(9000, () => console.log(`server started in localhost:9000`))

//https://learning.postman.com/docs/publishing-your-api/documenting-your-api/ 