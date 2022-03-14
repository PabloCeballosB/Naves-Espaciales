/**
  Fichero que sirve para obtener y devolver los codigos y el numero de motores
  @author Pablo Ceballos Benitez
*/

/**
  @class Clase que captura el codigo y numero de motores
  @param {string} codigo Parametro que obtiene el codigo de la Nave
  @param {string} numMotores Parametro que obtiene el numero de motores de la nave
*/
class Nave{
  constructor(codigo, numMotores){
    this._codigo = codigo
    this._numMotores = numMotores
  }

  get codigo(){
    return this._codigo
  }

  set codigo(cod){
    this._codigo = cod
  }

  get numMotores(){
    return this._numMotores
  }

  set numMotores(nuMoto){
    this._numMotores = nuMoto
  }
}
