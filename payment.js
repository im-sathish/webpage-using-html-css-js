function payment(){
var name=document.getElementById("op11").value
var food=document.getElementById("op3").value
if(food=="chicken-biriyani")
{
    document.write("welcome ", name,"<br>")
    document.write("your food is chicken-biriyani","<br>")
    document.write("130","<br>")
    document.write("Thanking you")
}
else if(food=="mutton-biriyani")
{
    document.write("welcome ", name,"<br>")
    document.write("your food is mutton-biriyani","<br>")
    document.write("150","<br>")
    document.write("Thanking you")
}
else if(food=="fish-biriyani")
{
    document.write("welcome ", name,"<br>")
    document.write("your food is fish-biriyani","<br>")
    document.write("180","<br>")
    document.write("Thanking you")
}
else if(food=="prawn-biriyani")
{
    document.write("welcome ", name,"<br>")
    document.write("your food is prawn-biriyani","<br>")
    document.write("180","<br>")
    document.write("Thanking you")
}
else if(food=="veg-soup")
{
    document.write("welcome ",name,"<br>")
    document.write("your food is veg-soup","<br>")
    document.write("90","<br>")
    document.write("Thanking you")

}
else if(food=="chicken-soup")
{
    document.write("welcome ",name,"<br>")
    document.write("your food is chicken-soup","<br>")
    document.write("100","<br>")
    document.write("Thanking you")

}
else if(food=="mutton-soup")
{
    document.write("welcome ",name,"<br>")
    document.write("your food is mutton-soup","<br>")
    document.write("120","<br>")
    document.write("Thanking you")

}
else if(food=="veg-meals")
{
    document.write("welcome ",name,"<br>")
    document.write("your food is veg-meals","<br>")
    document.write("120","<br>")
    document.write("Thanking you ")
}
else if(food=="non-veg-meals")
{
    document.write("welcome ",name,"<br>")
    document.write("your food is non-veg-meals","<br>")
    document.write("180","<br>")
    document.write("Thanking you ")
}
 else{

    document.write("inavlid order")
}
}
