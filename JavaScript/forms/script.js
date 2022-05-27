function validateForm(){
var returnVal=true;
 
//  name validation
 var name=document.forms['myForm']["fname"].value;
 console.log(name) 

 if(name.length<5){
    setError("name","*Length is too short");
    returnVal=false;
}
if(name.length==0){
    setError("name","*Length of name cannot be zero!")
    returnVal=false
}

// email
var email=document.forms['myForm']['femail'].value
console.log(email)

if(email.length>15){
    setError("email","*Email length is too long")
    returnVal=false
}

// phone
var phone=document.forms['myForm']['fphone'].value
if(phone.length!=10){
    setError("phone","*Phone number should be of 10 digits!")
    returnVal=false
}

return returnVal;

}

function setError(id,error){
    var element=document.getElementById(id)
    element.getElementsByClassName('formError')[0].innerHTML=error;
}

