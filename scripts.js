function vypocitejCtverec() {
  let x = document.getElementById("strana-a_c").value;
  let text;
  if (isNaN(x) || x <= 0) {
    text = "Neplatné hodnoty";
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
    text = "Neplatné hodnoty";
  } else {
    text = "Povrch: " + x * y + "cm&sup2<br>Obvod: " + ((x * 2) + (y * 2)) + "cm<br>Uhlopricka: " + Math.sqrt(x * x + y * y).toFixed(2) + "cm";
  }
  document.getElementById("oov").innerHTML = text;
}


//trojuhelnik
function vypocitejTrojuhelnik() {
  let a = parseFloat(document.getElementById("strana-a_t").value);
  let va = parseFloat(document.getElementById("va_t").value);

  ///Vypocty///
  let obsah = ((a*va)/2).toFixed(2)
  /////

  let text;
  if (isNaN(a) || a <= 0 || isNaN(va) || va <= 0) {
    text = "Neplatné hodnoty";
  } else {
    text = "Obsah: " + obsah + "cm&sup2"
  }
  document.getElementById("ttv").innerHTML = text;
}


//lichobeznik
function vypocitejLichobeznik() {
  let a = parseFloat(document.getElementById("strana-a_l").value);
  let b = parseFloat(document.getElementById("strana-b_l").value);
  let c = parseFloat(document.getElementById("strana-c_l").value);
  let d = parseFloat(document.getElementById("strana-d_l").value);
  let h = parseFloat(document.getElementById("vyska_l").value);

  ///Vypocty///
  let obvod = (a + b + c + d).toFixed(2);
  let obsah = (0.5 * (a + b) * h).toFixed(2);
  /////

  let text;
  if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || a <= 0 || b <= 0 || c <= 0 || d <= 0) {
    text = "Neplatné hodnoty";
  } else {
    text = "Obvod: " + obvod + "cm<br>Obsah: " + obsah + "cm&sup2";
  }
  document.getElementById("llv").innerHTML = text;
}

//rovnobeznik
function vypocitejRovnobeznik() {
  let a = document.getElementById("strana-a_r").value;
  let h = document.getElementById("vyska_r").value;
  let text;
  if (isNaN(a) || a <= 0 || isNaN(h) || h <= 0) {
    text = "Neplatné hodnoty";
  } else {
    text = "Povrch: " + (a*h).toFixed(2) + "cm&sup2";
  }
  document.getElementById("rrv").innerHTML = text;
}


//kruh
function vypocitejKruh() {
  let r = document.getElementById("strana-a_k").value;
  let text;
  if (isNaN(r) || r <= 0) {
    text = "Neplatné hodnoty";
  } else {
    text = "Povrch: " + (Math.PI * (r * r)).toFixed(2) + "cm&sup2<br>Obvod: " + (2 * Math.PI * r).toFixed(2) + "cm";
  }
  document.getElementById("kkv").innerHTML = text;
}

/////////////////////////////////
window.addEventListener('load', function () {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d')

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.fillRect(120, 150, 100, 200)
})

window.addEventListener('load', function () {
  const iframe = document.getElementById('ifr');
  iframe.width = window.width;
})




















