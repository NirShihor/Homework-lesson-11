

  var x = Number(prompt ("First Number Is: "));

  var y = Number(prompt ("Second Number Is: "));

  var cal = prompt ("Enter calculation operator: ");

  var result = 0;

switch (cal){
  case "+":
  result = x+y;
document.getElementById("calc").innerHTML ="Your result is " + result;  break;
  case "-":
  result = x-y;
document.getElementById("calc").innerHTML ="Your result is " + result;  break;
  case "*":
  result = x*y;
document.getElementById("calc").innerHTML ="Your result is " + result;  break;
  case "/":
  result = x/y;
document.getElementById("calc").innerHTML ="Your result is " + result;
}
