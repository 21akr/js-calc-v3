let a = document.getElementById("output1");
let num1 = prompt();

let b = document.getElementById("output2");
let num2 = prompt();

a.innerHTML = "Number1" + "<br>" + "<br>" + +num1;
b.innerHTML = "Number2" + "<br>" + "<br>" + +num2;

let c = document.getElementById("divide");
let d = document.getElementById("multiple");
let e = document.getElementById("plus");
let f = document.getElementById("minus");
let g = document.getElementById("remain");
let h = document.getElementById("degree");

let divide, mult, plus, minus, remain, degree;

divide = num1 / num2;
mult = num1 * num2;
plus = +num1 + +num2;
minus = num1 - num2;
remain = num1 % num2;
degree = num1 ** num2;

c.innerHTML = "/" + "<br>" + divide;
d.innerHTML = "*" + "<br>" + mult;
e.innerHTML = "+" + "<br>" + plus;
f.innerHTML = "-" + "<br>" + minus;
g.innerHTML = "%" + "<br>" + remain;
h.innerHTML = "**" + "<br>" + degree;
