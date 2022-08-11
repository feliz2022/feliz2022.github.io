function datas() {
  let d = new Date();
  this.dia = d.getDate();
  this.mes = d.getMonth() + 1;
  this.meses = ["Janeiro", "Fevereiro", "Mar&#231o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
}

function change() {
  this.Date = function () {
    if (data.dia < 15) {
        mesdia["dia"] = "menor";

    } else if (data.dia >= 15) {
        mesdia["dia"] = "maior";
    }
  };
  this.Month = function () {
    for (let i = 1; i <= 12; i++) {
        if (data.mes == i) {
            mesdia["mes"] = i;
        }
    }
  };
  this.Image = function () {
    let img = document.getElementById("fotos");
    if (mesdia["dia"] == "menor") {
        for (let i = 0; i < 12; i++) {
            if (mesdia["mes"] == i) {
                img.src = "img/" + i + ".png";
            }
        }
    }
    else if (mesdia["dia"] == "maior") {
        for (let i = 0; i < 12; i++) {
            if (mesdia["mes"] == i) {
                img.src = "img/" + i + "2" + ".png";
            }
        }
    }
};
}

function clock() {
  let d = new Date();
  let dia = d.getDate();
  let mes = data.meses[d.getMonth()];
  let horas = d.getHours();
  let mins = d.getMinutes();
  let secs = d.getSeconds();
  if (horas < 10) {
      horas = "0" + horas;
  }
  if (mins < 10) {
      mins = "0" + mins;
  }
  if (secs < 10) {
      secs = "0" + secs;
  }
  document.getElementById("text").innerHTML = dia + " " + "de" + " " + mes + " | " + horas + ":" + mins + ":" + secs;
}

var mesdia = {
  "dia": "",
  "mes": ""
}
var data = new datas();
var chng = new change();

function main() {
  clock();
  chng.Date();
  chng.Month();
  chng.Image();
}

main();
clock()
setInterval(main, 1000);
