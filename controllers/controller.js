const { response } = require("express");
const fs = require("fs");

function makeFile(req, res) {
  res.writeHead(200, { "Content-Type": "html/json" });
  // console.log("Name: ", req.query.name);
  // console.log("Age:", req.query.age);
  req.on("data", function (data) {
    // console.log(data.toString());
    // var dataD = JSON.stringify(data)
    fs.writeFile("neww.json", data, function (err) {
      if (err) throw err;
      console.log("file saved!");
      res.end("File Write Successfully!");
    });
  });
}
function getFile(req, res) {
  res.writeHead(200, { "Content-Type": "html/JSON" });
  fs.readFile("new.json", function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log("file saved");
    res.end(data);
  });
}
function updateFile(req, res) {
  res.writeHead(200, { "Content-Type": "html/JSON" });
  let Name = req.param.name;
  let age = req.param.age;
  response.json({Name , age})
  req.on("data", (data) => {
    console.log(data.toString());
    // var data = req.body;
    // var dataD = json.stringify(data);
    fs.appendFile("new.json", data, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("file saved");
      res.end("File Update");
    });
  });
}
function deleteFile(req, res) {
  res.writeHead(200, { "Content-Type": "html/JSON" });
  let Name = req.param.name;
  let age = req.param.age;
  response.json({Name , age})
  fs.unlink("new.json", function (err) {
    if (err) {
      console.log(err);
    }
    console.log("file saved");
    res.end("sucsessful deleted");
  });
}
module.exports = { makeFile, getFile, updateFile, deleteFile };
