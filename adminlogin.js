function login()
{
var name=document.getElementById("name").value;
var password=document.getElementById("password").value;

    
if(name=="sathish" &&  password==1234567)
    {
        
        window.alert("log in successfully")

    } 
    else{

        window.alert("invalid user")    
    }
}