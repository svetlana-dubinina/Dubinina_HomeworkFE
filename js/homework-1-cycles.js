/* Задача 1*/
let i=43
let s="квартира "
let m=" находится в "
let n=" подъезде"
if(i<1||i>100){
console.log("Такого номера квартиры нет в этом доме");
}
if (i<21&&i>0){
console.log (s+i+m+1+n);
}
if (i>60&&i<81){
console.log (s+i+m+3+n);
}
if (i>20&&i<41){
console.log (s+i+m+2+n);
}
if (i>40&&i<61){
console.log (s+i+m+4+n);
}
if (i>80){
console.log (s+i+m+5+n);
}
/* Задача 2*/
let i="brand"
switch("Ford"){
case "Ford":
console.log("USA");
break;
case "BMW":
console.log("Germany");
break;
case "Renault":
console.log("France");
break;
default:
console.log("Choose another brand, please");}
/* Задача 3*/
let i=2011
let m=" год високосный"
let n=" год не високосный"
if(i%4==0&i%400!==0){
console.log(i+m)}
else{
console.log(i+n)}
/* Задача 4*/
let n=7
let m=1

while(n>0,n<20){
  if(m>9){break;}
  m++
  console.log(n+"x"+m+"="+(n*m));
}
/* Задача 5*/
for(let i=1;i<50;i++){
    if(i%2!==0){console.log(i)}
  }


