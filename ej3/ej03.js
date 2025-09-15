/*
# Ejercicio 03.

La función `showRandomDigit` está asociada al click en el display. Al ejecutarse
debe definir un valor aleatorio entre 0 y 9 y mostrar el dígito correspondiente.
*/
let segA = document.getElementById('seg-a')
let segB = document.getElementById("seg-b")
let segC = document.getElementById('seg-c')
let segD = document.getElementById('seg-d')
let segE = document.getElementById('seg-e')
let segF = document.getElementById('seg-f')
let segG = document.getElementById('seg-g')

let segmentos = document.getElementsByClassName('segment')

function showRandomDigit() {
  const numero = Math.floor(Math.random()*10)
  for (const segmento of segmentos) {
    if (segmento.classList.contains('activado')) {
      segmento.classList.remove('activado')
    }
  }

  switch (numero) {
    case 1:
    
      segB.classList.add('activado')
      segC.classList.add('activado')
      break;
    case 2:
    segA.classList.add('activado')
      segE.classList.add('activado')
      segD.classList.add('activado')
      segG.classList.add('activado')
      segB.classList.add('activado')
      break;
    case 3:
    
      segA.classList.add('activado')
      segB.classList.add('activado')
      segC.classList.add('activado')
      segD.classList.add('activado')
      segG.classList.add('activado')
      break;
    case 4:
      segB.classList.add('activado')
      segC.classList.add('activado')
      segG.classList.add('activado')
      segF.classList.add('activado')
      break;
    case 5:
      segA.classList.add('activado')
      segC.classList.add('activado')
      segD.classList.add('activado')
      segG.classList.add('activado')
      segF.classList.add('activado')
      break;
    case 6:
    segA.classList.add('activado')
      segB.classList.add('activado')
      segC.classList.add('activado')
      segD.classList.add('activado')
      segE.classList.add('activado')
  
      segG.classList.add('activado')
      break;
    case 7:
    
      segA.classList.add('activado')
      segB.classList.add('activado')
      segC.classList.add('activado')
      break;
    case 8:segA.classList.add('activado')
      segB.classList.add('activado')
      segC.classList.add('activado')
      segD.classList.add('activado')
      segE.classList.add('activado')
      segG.classList.add('activado')
      segF.classList.add('activado')
      break;
    case 9:
    segA.classList.add('activado')
      segB.classList.add('activado')
      segC.classList.add('activado')
      segD.classList.add('activado')
      segG.classList.add('activado')
      segF.classList.add('activado')
      break;
    case 0:
      
      segA.classList.add('activado')
      segB.classList.add('activado')
      segC.classList.add('activado')
      segD.classList.add('activado')
      segE.classList.add('activado')
      segF.classList.add('activado')
      break;
  
  }


}

showRandomDigit()

