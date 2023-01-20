let number = "*";
let res, a = 12, b = 12;
res = a + b;
//    res= a+b;
//    res=a*b;
//    res= a/b;
//    res= a%b;

switch (number) {
    case "+":
        console.log("addition of number", res);
        break;

    case "-":
        console.log("sub of number" + res);
        break;

    case "*":
        console.log("multiplication of number", res);
        break;

    case "/":
        console.log("dividation of number", res);
        break;
    case "%":
        console.log("modulus of number", res);
        break;

}