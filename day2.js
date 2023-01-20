let d=new Date();

let months=["jan","feb","march","april","may","june","july","agu",
"seb","oct","nov","dec"]



const weeks=["sunday","monday","tuesday","wensday","thusday",
"friday","saturday",]

let month=months[d.getMonth()];
let day=weeks [d.getDay()];
let date=d.getDate();
let t=d.getHours();
let m=d.getMinutes();
let s=d.getSeconds();

console.log("this month is",month+",","day is="+day+",",
"date is="+date+",","time is="+t+":"+m+":"+s);
