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
function login()
{
var password=document.getElementById("password").value;
var count=0
    for( var i=0;i<password.length;i++)
    {
        count=count+1;
    }
    window.alert(count)

    if(count>5 & count<8)
    {
        window.alert("valid")
    }
    else{
        window.alert("invalid")
    }
}
