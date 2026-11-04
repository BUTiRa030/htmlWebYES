//server.js
var express = require("express");
var DB = require('nedb-promises'); 
var bodyParser = require('body-parser');
var Contact = new DB({ filename: 'users.db', autoload: true });

server = express();
server.use(express.static(__dirname + "/Bootstrap5")); //設定靜態檔案路徑
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
// server.get("/",function(req,res){ //web root
//  	res.send("Hello, World!"); //回傳固定內容
//  });
server.get("/contact",(req,res)=>{ //contact page
 	res.send("hello world!");
	Contact.insert(req.query);
 });
server.post("/contact",(req,res)=>{ //contact page
 	res.send("hello world!");
	Contact.insert(req.body);
});
 server.get("/*splat",function(req,res){ //other pages
 	res.send("Page not found", 404);
 });
 server.listen(8080);
console.log("Express run on port: 8080");
//run: node server.js
//browser: http://localhost:8080