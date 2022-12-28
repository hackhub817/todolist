const express = require("express");
const bodyParser = require("body-Parser");
// const res = require("express/lib/response");
const app = express();
var items=["Buy food", "cook food", "eat food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extened: true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    var today = new Date();
    var day="";
    

   var option ={
       weekday:"long",
       day :"numeric",
       month:"long"
    };
     day = today.toLocaleDateString("en-US" , option)
res.render("list",  {  Kind:day ,  ListItem:items  } );

});
app.post("/",function(req,res){
    var  item=req.body.newItem;
    items.push(item);
     res.redirect("/");
});

app.listen(5000,function(){
    console.log("the website is running at 5000 port");
});















;



  // ONE WAY OF USING DAY FUNCITON
 // switch(curr)
 // {
 //     case 0:
 //         day="sunday";
 //         break;

 //     case 1:
 //         day="monday";
 //             break;
         
 //     case 2:
 //         day="tuesday";
 //         break;
     
 //     case 3:
 //         day="wednesday";

 //         break;
     
 //     case 4:
 //         day="thursday";
 //         break;
     
 //     case 5:
 //         day="friday";
 //         break;
        
 //     case 6:
 //         day="satuday";
 //             break;    

 
 // }
// res.render("list",{Kind:day});