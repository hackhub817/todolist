const express = require("express");
const bodyParser = require("body-Parser");
// const res = require("express/lib/response");
const app = express();
var item="";

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extened: true}));

app.get("/",function(req,res){
    var today = new Date();
    var day="";
    

   var option ={
       weekday:"long",
       day :"numeric",
       month:"long"
    };
     day = today.toLocaleDateString("en-US" , option)
res.render("list",  {  Kind:day ,  ListItem:item  } );

});
app.post("/",function(req,res){
     item=req.body.newItem;
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