function calculadora(n1, n2, operation) {
  if (operation == 1) {
    let sum = n1 + n2;
    return sum;
  } else if (operation == 2) {
    let sub = n1 - n2;
    return sub;
  } else if (operation == 3) {
    let mult = n1 * n2;
    return mult;
  } else if (operation == 4) {
    let div = n1 / n2;
    return div;
  } else if (operation == 0) {
    return 0;
  }
}

let myCalc = calculadora(10, 2, 2);
console.log(myCalc);
