/**
  Un fichero que comprueba el codigo de una nave
  @author Pablo Ceballos Benitez
*/

import {Nave} from "./nave.js"

var divError = document.getElementById("divError")

/**
  Evento que llama a validarFormulario si se presiona el boton "Comprobar"
*/
const boton = document.getElementById("iBoton");
boton.addEventListener("click", function(evento){
	validarFormulario()
});

/**
  Evento que llama a "rellenarTipoPilotaje" si se cambia el Pilotaje por "Automatico" o "Personal"
*/
const select = document.getElementById("sPilotaje")
select.addEventListener("change", function(evento){
	rellenarTipoPilotaje()
});

/**
  Está función ordena un array de strings alfabéticamente.
  @param {Array} lista de strings que se va a ordenar.
  @param {boolean} booleano que indica si debe ordenarse de modo ascendente (true) o descendente (false).
  @return array El array ordenado.
*/

function ordenarArray(lista, booleano){
  if(booleano == true)
  {
    lista.sort()
    return lista
  }
  else {
    lista.sort().reverse()
    return lista
  }
}

/**
  Codigo que sirve para comprobar que la funcion ordenarArray funcione correctamente
*/
  const lista1 = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo']
  console.log(ordenarArray(lista1, true)) //Debe aparecer [ "domingo", "jueves", "lunes", "martes", "miércoles", "sábado", "viernes" ]
  console.log(ordenarArray(lista1, false))// Debe aparecer [ "viernes", "sábado", "miércoles", "martes", "lunes", "jueves", "domingo" ]

/**
  Funcion que se utiliza para validar los datos introducidos en el formulario
  @param {string} codigo Obtiene el codigo de la Nave
  @param {int} nMotores Obtiene el numero de motores de la Nave
*/
function validarFormulario(){
  try {
    var regExpCodigo = /^([A-Z]{2})?[-]\d{2,3}$/
    var codigo = document.getElementById("iCodigo").value
    var nMotores = document.getElementById("iNumMotores").value
    var nave = new Nave(codigo, nMotores);
    if (!regExpCodigo.test(nave.codigo)) throw "Codigo incorrecto"
    if(Math.sign(nave.numMotores) != 1) throw "Añade un numero positivo"

    divError.style.display= "none"
    console.log("Todo correcto")
    crearRespuesta()

  } catch (e) {

    mostrarError(e)

  }
}

/**
  Funcion que crea respuesta si el usuario selecciona "IA Windows" de la categoria "Automatico"
  @param {string} e Parametro que captura el texto de error
*/
function crearRespuesta(){
  try {
    var tipoPilotaje = document.getElementById("s2").value
    if(tipoPilotaje == "IA Windows") throw "Te la vas a pegar"
  } catch (e) {
    mostrarError(e)
  }
}

/**
  Funcion que sirve para rellenar el tipo de pilotaje segun sea Automatico o Personal
*/
function rellenarTipoPilotaje(){
  var pilotaje = document.getElementById("sPilotaje").value
  var tipoPilotaje = document.getElementById("s2")
  var arrayAuto = ["IA Linux", "IA Windows", "IA Mac"]
  var arrayPerso = ["Humano", "Klingon", "Alien"]

  if(pilotaje == "auto")
  {
    borrarElementosOptions()
    for(let i = 0; i<=2;i++)
    {
      var option = document.createElement("option")
      option.value = arrayAuto[i]
      option.text = arrayAuto[i]
      tipoPilotaje.appendChild(option)
    }
  }
  else
  {
    borrarElementosOptions()
    for(let i = 0; i<=2;i++)
    {
      var option = document.createElement("option")
      option.value = arrayPerso[i]
      option.text = arrayPerso[i]
      tipoPilotaje.appendChild(option)
    }
  }
}

/**
  Funcion que se utiliza para mostrar error en caso de que los datos introducidos esten erroneos
  @param {string} texto Parametro que contiene el texto del error a corregir
*/
function mostrarError(texto){
  var pError = document.getElementById("pError")
  pError.innerHTML=""
  divError.style.display= "block"
  pError.appendChild(document.createTextNode(texto))
}

/**
  Funcion que se utiliza para borrar los elementos secundarios del tipo de pilotaje para evitar repeticiones
*/
function borrarElementosOptions(){
  var tipoPilotaje = document.getElementById("s2");
  var finTipoPilotaje = tipoPilotaje.options.length;
  for (let i = finTipoPilotaje - 1; i >= 0; i--) {
    tipoPilotaje.options[i] = null;
  }
}
