const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
//const segundos = document.getElementById('segundos');

const relogio = setInterval(function time (){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    //let s = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    //if(s < 0) s = '0' + s;
    
    horas.textContent = hr;
    minutos.textContent = min;
    //segundos.textContent = s;
})


// Função para obter a dia da semana atual
function getDataAtual() {
    var data = new Date();
    var diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    var diaSemana = diasSemana[data.getDay()];
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    
    var dataFormatada = data + ', ' + dia + '/' + mes + '/' + ano;
    
    return diaSemana;
  }
  
  // Atualizar a div com a dia da semana atual
  document.getElementById('data').innerText = getDataAtual();


//Atualizar a div com o DIA DO MêS atual 
  function getDiaAtual() {
    var data = new Date();
    //var diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    //var diaSemana = diasSemana[data.getDay()];
    var dia = data.getDate();
    //var mes = data.getMonth() + 1;
    //var ano = data.getFullYear();
    
    //var dataFormatada = dia + ', ' + dia + '/' + mes + '/' + ano;
    
    return dia;
  }
  
  // Atualizar a div com a data atual
  document.getElementById('dia').innerText = getDiaAtual();

  
//Atualizar a div com o DIA DO MêS atual 
function getMesAtual() {
  var data = new Date();
  //var diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  //var diaSemana = diasSemana[data.getDay()];
  //var dia = data.getDate();
  var mes = data.getMonth() + 1;
  //var ano = data.getFullYear();
  
  //var dataFormatada = dia + ', ' + dia + '/' + mes + '/' + ano;
  
  return mes;
}

// Atualizar a div com a data atual
document.getElementById('mes').innerText = getMesAtual();

function getAnoAtual() {
  var data = new Date();
  //var diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  //var diaSemana = diasSemana[data.getDay()];
  //var dia = data.getDate();
  //var mes = data.getMonth() + 1;
  var ano = data.getFullYear();
  
  //var dataFormatada = dia + ', ' + dia + '/' + mes + '/' + ano;
  
  return ano;
}

// Atualizar a div com a data atual
document.getElementById('ano').innerText = getAnoAtual();