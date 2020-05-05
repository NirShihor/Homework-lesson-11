var array = ["shoes", "slippers", "newspaper", "pencils"];
var text = "";
function run(){
  var i, len, text;
  for (i = 0, len = array.length, text = ""; i < len; i++) {
    text += "<div class='card' style='width: 10rem; border-radius: 50px; display:inline-grid !important; background-color:#727A82; margin-right: 40px;margin-bottom: 30px;''><div class='card-body'>  <h4 class='card-title' style='color: #DDDDDD;'>" + array[i] + "</h4></div> </div>";
  }
  document.getElementById("heading").innerHTML = text;
}
function add(){
  var x = document.getElementById('items').value;
  array.push(x);
  run();
}
function remove(){
  array.pop();
  run();
}

function dim() {
  document.getElementsByClassName("film")[0].style.backgroundColor = "rgb(0,0,0,0.6)";
}
