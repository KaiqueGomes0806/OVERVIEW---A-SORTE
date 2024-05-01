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

/*
const data = new Date()
const dia = String(data.getDate()).padStart(2,'0') // 1-> 01 (Insere duas casas decimais)
const mes = String(data.getMonth() + 1).padStart(2, '0') // jan = 0, 1 -> 01 (getMonth inicia em 0 então add + 1) (padstart para add +1 casa decimal)
const ano = data.getFullYear()

dia.textContent = dia;
mes.textContent = mes;
ano.textContent = ano;
*/
//const dataAtual = `${dia}/${mes}/${ano}`

//console.log(dataAtual)

//_____________________________________________________________________________________

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


// Função para adicionar um zero à esquerda se o número for menor que 10
function addLeadingZero(num) {
  return (num < 10 ? '0' : '') + num;
}

//Atualizar a div com o DIA DO MêS atual 
  function getDiaAtual() {
    var data = new Date();
    //var diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    //var diaSemana = diasSemana[data.getDay()];
    var dia = addLeadingZero(data.getDate());
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
  var mes = addLeadingZero(data.getMonth() + 1);
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

//----------------------------------------------------------------------
//CODIGO BOTÕES SOMAR E DIMINUIR - DIAS TRABALHADOS

// document.addEventListener("DOMContentLoaded", function() {
//   const countElement = document.getElementById("count");
//   //const increaseButton = document.getElementById("increase");
//   //const decreaseButton = document.getElementById("decrease");
  
//   let count = 0;

//   function updateCount(value) {
//     count += value;
//     countElement.textContent = count;
//   }

//   increaseButton.addEventListener("click", function() {
//     updateCount(1);
//   });

//   decreaseButton.addEventListener("click", function() {
//     updateCount(-1);
//   }); 
// });

// countElement.innerText = `${count} Dias`
//_____________________________________________________________________________
//TOTAL VENDIDO

// Função para calcular o total da soma das divs com a classe "number"
function calcularTotal() {
  // Selecionar todas as divs com a classe "number"
  var divs = document.getElementsByClassName('number');
  divs - parseFloat;
  var total = 0;

  // Iterar sobre as divs e somar os valores dentro delas
  for (var i = 0; i < divs.length; i++) {
    // Converter o conteúdo da div para um número e adicioná-lo ao total
    total += parseFloat(divs[i].textContent);
  }

  // Exibir o total na div com id "total"
  document.getElementById('total').textContent = 'R$: ' + total;
}

// Chamar a função para calcular o total assim que a página carregar
window.onload = calcularTotal;

//_____________________________________________________________________________
//CONTADOR DIARIO - DIAS TRABALHADOS
// Função para atualizar o contador diariamente
//  function updateCounter() {
//    let currentDate = new Date();
//    let storedDate = localStorage.getItem('lastDate');
  
// //   // Se não houver data armazenada ou se a data armazenada for diferente da atual
//    if (!storedDate || storedDate !== currentDate.toDateString()) {
//      let counter = parseInt(localStorage.getItem('counter')) || 0;
//      counter++;
//      localStorage.setItem('counter', counter);
//      localStorage.setItem('lastDate', currentDate.toDateString());
//      document.getElementById('counter').innerText = counter;
//    }
//  }

//  // Atualize o contador quando a página for carregada
//  updateCounter();

//_____________________________________________________________________________-
//CODIGO BOTÃO "ADICIONAR NOVO INDICADOR"
document.addEventListener("DOMContentLoaded", function() {
  const openPageButton = document.getElementById("openPageButton");

  openPageButton.addEventListener("click", function() {
    window.open("http://127.0.0.1:5501/forms.html", "_blank");
  });
});

//----------------------------------------------------------------------------------------
//CODIGO PARA ABRIR PAGE DE RESULTADOS 
document.addEventListener("DOMContentLoaded", function() {
  const abrirResultados = document.getElementById("abrirResultados");

  abrirResultados.addEventListener("click", function() {
    window.open("http://127.0.0.1:5501/resultados.html");
  });
});

//----------------------------------------------------------------------------------------
//CODIGO PARA ABRIR PAGE PALPITE DO DIA 
document.addEventListener("DOMContentLoaded", function() {
  const abrirpalpites = document.getElementById("abrirpalpites");

  abrirpalpites.addEventListener("click", function() {
    window.open("http://127.0.0.1:5501/bixo-palpite.html", "_blank");
  });
});