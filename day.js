let d=new Date();
console.log ("print the value"+d);
let v=d.getUTCDay();
console.log("print the value"+ v);
if(v==1)
{
    console.log("today is monday");
}else
if(v==2){
    console.log("today is tuesday");
}else
if(v==3) 
{
console.log("today is wen");
}else
if(v==4){
    console.log("tody is thusday")
}else
if(v==5){
    console.log("today is friday");
}else
if(v==6){
    console.log("today is sat");
}else
if(v==0){
    console.log("today is sunday"+v);
}
