"use strict"
let studentName;
let english,Maths,IT,chemisty,biology,Marathi;

studentName="narendra"
let rooundedoffpercentage

english=45;
Math=100;
IT=80;
chemisty=90;
biology=67;
Marathi=36;

let markObtained=english+Math+IT+chemisty+biology+Marathi;
const totalmark=600;

// percentage=markobtain/totalmark*100;

// console.log(studentName+"has got+percentage+marks");

let percentage=markObtained/totalmark*100;
console.log("percentage:"+percentage)


if(english<35||
 IT<35 ||
  Math<35 || 
  biology<35 || 
  Marathi<35 ||
  chemisty<35)
  {
    console.log(studentName+"is faild");
  }else
  {
    console.log(studentName+ "has got"+percentage+"%marks")
  }
  switch(true)


{
    case rooundedoffpercentage>=35 && rooundedoffpercentage<45:
console.log("pass class");

break;
case rooundedoffpercentage>=45 && rooundedoffpercentage<=60:
  console.log("first class")
break;

case rooundedoffpercentage>=60 && rooundedoffpercentage<=75:
  console.log("second class");
  break;

  case rooundedoffpercentage>=75 && rooundedoffpercentage<=100:
    console.log("distinction class")
    break;

    default:
      console.log("Invalid calculation");
}


// console.log("first class");
// break;
// }
//  case roundedofpercentage>=60 && roundedoffpercentage<75
// console.log("second class");
// break;


//     case roundedoffpercentage>=75&&roundedoffpercentage<100
// console.log("");

// }
