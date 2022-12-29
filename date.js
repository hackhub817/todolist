
function getDate()

{var today = new Date();
var day="";


var option ={
   weekday:"long",
   day :"numeric",
   month:"long"
};
 day = today.toLocaleDateString("en-US" , option);
return day;
}

module.exports=getDate;