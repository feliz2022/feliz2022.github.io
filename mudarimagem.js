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
  if (mes == "0") {
    mesdia["mes"] = "janeiro"
  } else if (mes == "1") {
    mesdia["mes"] = "fevereiro"
  } else if (mes == "2") {
    mesdia["mes"] = "março"
  } else if (mes == "3") {
    mesdia["mes"] = "abril"
  } else if (mes == "4") {
    mesdia["mes"] = "maio"
  } else if (mes == "5") {
    mesdia["mes"] = "junho"
  } else if (mes == "6") {
    mesdia["mes"] = "julho"
  } else if (mes == "7") {
    mesdia["mes"] = "agosto"
  } else if (mes == "8") {
    mesdia["mes"] = "setembro"
  } else if (mes == "9") {
    mesdia["mes"] = "outubro"
  } else if (mes == "10") {
    mesdia["mes"] = "novembro"
  } else if (mes == "11") {
    mesdia["mes"] = "dezembro"
  }
}

function changeImage() {
  var img = document.getElementById("fotos");
  if (mesdia["dia"] == "menor") {
    if (mesdia["mes"] == "janeiro") {
      img.src = "jan.png"
    } else if (mesdia["mes"] == "fevereiro") {
      img.src = "fev.png"
    } else if (mesdia["mes"] == "marco") {
      img.src = "mar.png"
    } else if (mesdia["mes"] == "abril") {
      img.src = "abr.png"
    } else if (mesdia["mes"] == "maio") {
      img.src = "mai.png"
    } else if (mesdia["mes"] == "junho") {
      img.src = "jun.png"
    } else if (mesdia["mes"] == "julho") {
      img.src = "jul.png"
    } else if (mesdia["mes"] == "agosto") {
      img.src = "ago.png"
    } else if (mesdia["mes"] == "setembro") {
      img.src = "set.png"
    } else if (mesdia["mes"] == "outubro") { 
      img.src = "out.png"
    } else if (mesdia["mes"] == "novembro") {
      img.src = "nov.png"
    } else if (mesdia["mes"] == "dezembro") {
      img.src = "dez.png"
    }
  } else if (mesdia["dia"] == "maior") {
    if (mesdia["mes"] == "janeiro") {
      img.src = "jan2.png"
    } else if (mesdia["mes"] == "fevereiro") {
      img.src = "fev2.png"
    } else if (mesdia["mes"] == "março") {
      img.src = "mar2.png"
    } else if (mesdia["mes"] == "abril") {
      img.src = "abr2.png"
    } else if (mesdia["mes"] == "maio") {
      img.src = "mai2.png"
    } else if (mesdia["mes"] == "junho") {
      img.src = "jun2.png"
    } else if (mesdia["mes"] == "julho") {
      img.src = "jul2.png"
    } else if (mesdia["mes"] == "agosto") {
      img.src = "ago2.png"
    } else if (mesdia["mes"] == "setembro") {
      img.src = "set2.png"
    } else if (mesdia["mes"] == "outubro") { 
      img.src = "out2.png"
    } else if (mesdia["mes"] == "novembro") {
      img.src = "nov2.png"
    } else if (mesdia["mes"] == "dezembro") {
      img.src = "dez2.png"
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
  document.getElementById("text") .innerHTML = data + " de " + mes + " | " + hora + ":" + min + ":" + sec;
}
setInterval(relogio, 1000);
