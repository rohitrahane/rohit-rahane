let d= new Date();
let h=d.getHours();
let m=d.getMinutes();
let s=d.getSeconds();
console.log("Time "+h+":"+m+":"+s);

if(h<=12){
    console.log("good morning");
}else
 if(h>=12&&h<17){
    console.log("good Afternoon");
}else 
if(h<=17){
    console.log("goog evenning");
}else
if(h>=17&&h<=24){
    console.log("good night")
}