// const fs=require("fs")
// const http=require("http")

// const server=http.createServer((req,res)=>{
const { Console } = require("console");
const express = require("express");
const app = express();
const fs = require("fs");
const port = process.env.port || 8000;
const file1 = fs.readFileSync(
  "/Users/ishansinghal/Documents/nodejs/ishan.html",
  "utf-8"
);
const hello = "hello";
console.log(file1);
let htmlnew = file1.replace("{%dynaimc%}", hello);
console.log(htmlnew);
app.set("view engine", "hbs");
app.get("/", (req, res) => {
  res.sendFile("/Users/ishansinghal/Documents/nodejs/ishan.html");
});
app.get("/about", (req, res) => {
  res.render("index", {
    helo: req.query.age,
  });
});
app.get("/about/*", (req, res) => {
  res.status(404).send("this about us paghhe ios not found");
});
app.get("*", (req, res) => {
  res.status(404).end("pagenot founf");
});
app.listen(port, () => {
  console.log("hello");
});

// fs.readFile("ishan.txt","utf-8",(err,data)=>{
//     console.log(data)
//     res.end(data)
// })
// const stream=fs.createReadStream("ishan.txt")
// fs.createReadStream("ishan.txt","utf-8",(err,data)=>{
//     res.end(data)
// },(err,end)=>{
//     res,end()
// });
// stream.on("data",(data)=>{
// res.end(data);
// })
// stream.on("end",()=>{
//     res.end()
// })
// })``ß
// server.listen(3000,"127.0.0.1")

// const Event=require("events")
// const event=new Event();
// event.on("my naame",(a)=>{
//     console.log(`my name is ${a}`)
// })
// event.on("my naame",()=>{
//     console.log(`hello guys}`)
// })
// event.emit("my naame","ishan")
