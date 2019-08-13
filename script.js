var inputs= document.getElementsByTagName("input");
var errors=document.getElementsByClassName("error");
var emp=document.getElementsByClassName("empty");

console.log(errors);
var flag = new Array(10);
for(var j =0 ;j < 10;j++)flag[j]=false;

 function vname()
 {
   var name = inputs[0].value;
   if(name.length==0) { emp[0].setAttribute("style",  "display: block;");
        errors[0].setAttribute("style",  "display: none;");
        errors[1].setAttribute("style",  "display: none;");
   return;}
   else  emp[0].setAttribute("style",  "display: none;");
   var b=true; var i=0;
   while(i < name.length && b){
    if( name[i] < "A" ||name[i] >"z") b=false;
       i++;
    }
   
    if(name.length < 3 || name.length > 10 || !b){

       if(name.length < 3 || name.length > 10) 
             errors[0].setAttribute("style",  "display: block;");
       else  errors[0].setAttribute("style",  "display: none;");

       if(!b) errors[1].setAttribute("style",  "display: block;");
       else   errors[1].setAttribute("style",  "display: none;");
         
       flag[0]=false;
    }
    else{
        errors[0].setAttribute("style",  "display: none;");
        errors[1].setAttribute("style",  "display: none;");
        flag[0]=true;
    }
}


function vpassword()
 {
   var password = inputs[1].value;
   if(password.length==0) { emp[1].setAttribute("style",  "display: block;");
        errors[2].setAttribute("style",  "display: none;");
        errors[3].setAttribute("style",  "display: none;");
   return;}
   else  emp[1].setAttribute("style",  "display: none;");     
   var b=true; var i=0;
   var b2=true;
   while(i < password.length){
       if( isFinite(password[i]) ) b=false;
       if( isNaN(password[i])) b2=false;
       i++;
    }

    if(password.length < 2 || password.length > 8 || b || b2){
          if(password.length < 2 || password.length > 8 )
          errors[2].setAttribute("style", "display: block;");
          else  errors[2].setAttribute("style", "display: none;");
          if(b || b2)
          errors[3].setAttribute("style", "display: block;");
          else 
          errors[3].setAttribute("style", "display: none;");
          flag[1]=false;
    }
    else{
        errors[2].setAttribute("style",  "display: none;");
        errors[3].setAttribute("style",  "display: none;");
        flag[1]=true;
    }
}
function vage()
 { var age = inputs[2].value;
    if(age.length==0) { emp[2].setAttribute("style",  "display: block;");
        errors[4].setAttribute("style",  "display: none;");
        errors[5].setAttribute("style",  "display: none;");
   return;}
   else  emp[2].setAttribute("style",  "display: none;");
    if( age < 16 || age > 60 || !isFinite(age) )
    {
        if(age < 16 || age > 60)
         errors[4].setAttribute("style", "display: block;");
         else  errors[5].setAttribute("style", "display: none;");
         if(!isFinite(age))
         errors[5].setAttribute("style", "display: block;");
         else  errors[5].setAttribute("style", "display: none;");
         
    flag[2]=false;
    }
    else{
        errors[4].setAttribute("style",  "display: none;");
        errors[5].setAttribute("style", "display: none;");
        flag[2]=true;
    }
  
}
function vemail()
 {

  var e =inputs[3].value;
  var bs =false;
  var b1= true;
  var b2= true;
  var b3=true;
  if(e.length==0) { emp[3].setAttribute("style",  "display: block;");
        errors[6].setAttribute("style",  "display: none;");
       
   return;}
   else  emp[3].setAttribute("style",  "display: none;");
  var n = e.indexOf("@");
  var bs= (e[0] >="A" && e[0] <="z" && n-1 >= 0)

  for(var i=n+1;i<e.length;i++){
    if(e[i] >= "A" && e[i] <="z"){
      b1=false;
    }
    if(!b1 && e[i] ==".") b2=false;
    if(!b2 && e[i] >= "A" && e[i] <="z")b3=false;
  }

  if(e.length < 6 || b1 || b2|| b3 || !bs)
  {
     
      errors[6].setAttribute("style",  "display: block;");
      flag[3]=false;
  }
  else{
      errors[6].setAttribute("style",  "display: none;");
      flag[3]=true;
  }
  
}
function vadd()
 {
   
    var add = inputs[4].value;
    if(add.length==0) { emp[4].setAttribute("style",  "display: block;");
    errors[7].setAttribute("style",  "display: none;");
   
return;}
else  emp[4].setAttribute("style",  "display: none;");
    if(add.length < 10)
    {
        errors[7].setAttribute("style",  "display: block;");
       flag[4]=false;
    }
    else{
        errors[7].setAttribute("style",  "display: none;");
        flag[4]=true;
    }
}
function valid(){
    vname();
    vpassword();
    vage();
    vemail();
    vadd();
}