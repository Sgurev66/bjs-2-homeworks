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

function calculateTotalMortgage(percent, cont
  let p = percent / 100 /12;
  let s = amount - countMonths;
  let n = countMonths;

  let summPercMonths = s * (p + (p / (((1 + p
  let total = (summPercMonths * countMonths).
  return total;
}
calculateTotalMortgage (10, 10000, 50000, 12)
