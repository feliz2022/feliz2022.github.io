var mesdia = {
  "dia": "dia",
  "mes": "mes",
}

main(); 
setInterval(main, 5000); 

function main() {
  getDate();
  getMonth();

  changeDate();
  changeMonth();

  changeImage();
}

function getDate() {
  d = new Date();
  return d.getDate();
} 

function getMonth() {
  d = new Date();
  return d.getMonth();
} 

function changeDate() {
  let data = getDate()
  if (data < 15) {
    mesdia["dia"] = "menor" 
    return mesdia["dia"]
  } else if (data => 15) {
    mesdia["dia"] = "maior"
    return mesdia["dia"]
  }
} 

function changeMonth() {
  let mes = getMonth()
  for (let i = 0; i < 12; i++) {
    if (mes == i) {
      mesdia["mes"] = i
      return mesdia["mes"]
    }
  }
}

function changeImage() {
  let img = document.getElementById("fotos");
  if (mesdia["dia"] == "menor") {
    for (let i = 0; i < 12; i++) {
      if (mesdia["mes"] == i) {
        img.src = "img/" + i + ".png";
        return img.src;
      }
    }
  } else if (mesdia["dia"] == "maior") {
    for (let i = 0; i < 12; i++) {
      if (mesdia["mes"] == i) {
        img.src = "img/"+i+"2"+".png";
        return img.src;
      }
    }
  }
}

function relogio() {
  let x = new Date();
  let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  let z = x.getMonth();
  let mes = meses[z];
  let data = x.getDate();
  let hora = x.getHours();
  let min = x.getMinutes();
  let sec = x.getSeconds();
  if (hora < 10) {
    hora = "0" + hora;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  document.getElementById("text") .innerHTML = data + " de " + mes + " | " + hora + ":" + min + ":" + sec;
}
setInterval(relogio, 1000);