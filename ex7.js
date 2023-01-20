let d=new Date();
let h=d.getHours();
let m=d.getMinutes();
let s=d.getSeconds();
console.log("Time "+h+":"+m+":"+s);


switch (true){
    case (h<=12):
        console.log("good morning");  
        break;
        

        case (h>=12&&h<4):
        console.log("good aftrenoon");  
        break;

        case (h<4):
        console.log("good eveneing");  
        break;

        case (h>=9&&h<12):
        console.log("good night");  
        break;
    
}