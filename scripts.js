function vypocitejCtverec() {
  let x = document.getElementById("strana-a_c").value;
  let text;
  if (isNaN(x) || x <= 0) {
    text = "Nevalidni input";
  } else {
    text = "Povrch: " + x * x + "cm&sup2<br>Obvod: " + x * 4 + "cm<br>Úhlopříčka: " + (Math.sqrt(x * x + x * x)).toFixed(2) + "cm";
  }
  document.getElementById("ccv").innerHTML = text;
}

function vypocitejObdelnik() {
  let x = document.getElementById("strana-a_o").value;
  let y = document.getElementById("strana-b_o").value;
  let text;
  if (isNaN(x) || x <= 0 || isNaN(y) || y <= 0) {
    text = "Nevalidni input";
  } else {
    text = "Povrch: " + x * y + "cm&sup2<br>Obvod: " + ((x * 2) + (y * 2)) + "cm<br>Uhlopricka: " + Math.sqrt(x ^ 2 + y ^ 2).toFixed(2) + "cm";
  }
  document.getElementById("oov").innerHTML = text;
}


//trojuhelnik

//lichobeznik
//rovnobeznik
//kruh

var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();