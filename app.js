const express = require("express");
const bodyParser = require("body-Parser");

const date=require(__dirname+"/date.js");
// const res = require("express/lib/response");
const app = express();
var items=["Buy food", "cook food", "eat food"];
var workItems=[];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extened: true}));
app.use(express.static("public"));



app.get("/",function(req,res){
  let day= date();
res.render("list",  {  listTitle:day ,  ListItem:items  } );

});


app.get("/work",function(req,res){
    res.render("list", {listTitle:"Work List", ListItem: workItems});
});

app.get("/contact",function(req,res){
    res.render("contact");
});


app.post("/",function(req,res){
    var  item=req.body.newItem;
    console.log(req.body);
    if(req.body.list === "Work")
    {
        workItems.push(item);
        res.redirect("/work");
    }
    else
    {
    items.push(item);
     res.redirect("/");
    }
});



app.listen(5000,function(){
    console.log("the website is running at 5000 port");
});

