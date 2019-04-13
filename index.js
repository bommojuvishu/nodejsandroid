const port = process.env.PORT || 3000;

var Tesseract = require("tesseract.js");
var request = require("request");
var fs = require("fs");

var url = "http://tesseract.projectnaptha.com/img/eng_bw.png";
var filename = "pic.png";

var writeFile = fs.createWriteStream(filename);

// app.get("/", function(req, res) {
//   res.send("Hello world!");
// });

const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();

// default options
app.use(fileUpload());

app.post("/upload", function(req, res) {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;
  console.log("IRONMAN", __dirname);

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(__dirname + "/pic.png", function(err) {
    if (err) return res.status(500).send(err);

    Tesseract.recognize(filename)
      .progress(function(p) {
        console.log("progress", p);
      })
      .catch(err => console.error(err))
      .then(function(result) {
        console.log(result.text);
        res.send(result.text);

        // process.exit(0);
      });
    // res.send("File uploaded!");
  });
});

app.get("/", function(req, res) {
<<<<<<< HEAD
  request(url)
    .pipe(writeFile)
    .on("close", function() {
      console.log(url, "saved to", filename);
      Tesseract.recognize(filename)
        .progress(function(p) {
          console.log("progress", p);
        })
        .catch(err => console.error(err))
        .then(function(result) {
          console.log(result.text);
          res.send(result.text);

          process.exit(0);
        });
    });
=======
  res.send("god says you have to go the shazam movie!");
>>>>>>> 33bc8776241d1d34dc1c87cca195a54507a4b5ab
});

app.listen(port, () => {
  console.log(`Server running at port ` + port);
});
