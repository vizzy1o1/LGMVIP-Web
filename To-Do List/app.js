const express=require("express");
const bodyParser=require("body-parser");
const https=require("https");
const app=express();
let Tasks=[];
let work=[];
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
  const today=new Date();
  var options={
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  var day=today.toLocaleDateString("en-US",options);
  res.render("list",{kindOfDay: day,newTasks:Tasks});
});
app.listen(3000,function(){
  console.log("server tuned to port 3000");
});
app.post("/",(req,res)=>{
  
  Tasks.push(req.body.task);
  res.redirect("/");
});
app.get("/work",(req,res)=>{
  res.render("list",{kindOfDay:"Work List",newTasks:work});
});
app.post("/work",(req,res)=>{
  work.push(req.body.task);
  res.redirect("/work");
});
