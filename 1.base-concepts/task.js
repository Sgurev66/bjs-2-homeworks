"use strict"
function solveEquation(a, b, c) {
  let arr = [];
 let d = b**2 - 4*a*c;
   if (d < 0) {
    return arr;
   } else if (d === 0) {
    x = -b/(2*a);
    arr.push (x);
  } else if (d > 0) {
   x = (-b + Math.sqrt(d) )/(2*a);
   y = (-b - Math.sqrt(d) )/(2*a);
   arr.push (x, y);
  }
  return arr;
}  

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = percent / 100 /12;
  let s = amount - countMonths;
  let n = countMonths;

  let summPercMonths = s * (p + (p / (((1 + p)** n)- 1)));
  let total = (summPercMonths * countMonths).toFixed(2);
  return total;
}