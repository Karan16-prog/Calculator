
function sum(a,b){
  return a+b;
}

function subtract(a,b){
  return a-b;
}

function multiply(a,b){
  return a*b;
}

function divide(a,b){
  return a/b;
}

function operate(){
  x = prompt("Enter Operator");
  a = parseInt(prompt("Enter Number 1"));
  b = parseInt(prompt("Enter Number 2"));
  if(x === '+') return sum(a,b);
  else if(x === '-') return subtract(a,b);
  else if(x === '*') return multiply(a,b);
  else if(x === '/') return divide(a,b);
  else return "Incorrect Operator";
}

function operate2(x,a,b){
  if(x === '+') return sum(a,b);
  else if(x === '-') return subtract(a,b);
  else if(x === '*') return multiply(a,b);
  else if(x === '/') return divide(a,b);
  else return "Incorrect Operator";
}
