function calculadora(operacion, numero1, numero2) {
   if (operacion == 'suma') { 
     let resultado = numero1 + numero2  
    return resultado
    } else if (operacion == 'resta') {
      let resultado = numero1 - numero2
        return resultado 
    }  else if (operacion == 'multiplicacion'){
        let resultado = numero1 * numero2
        return resultado
    }  else if (operacion = 'division'){
         let resultado = numero1 / numero2
       return resultado
    }   else {

    }
    return 'error'
    

} 

console.log(calculadora('suma', 10,10 ))