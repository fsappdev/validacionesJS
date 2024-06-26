const validaciones = {
  valDNI: (value) => /^[0-9]{0,10}$/.test(value),
  valNYA: (value) => /^[a-zA-Z\s\u00F1\u00D1]{1,60}$/.test(value),
  valTEL: (value) => /^[0-9]{10,10}$/.test(value),
  valMayorDeEdad: (value) => {
    //console.log("value", value)
    let anioActual = new Date().getFullYear();

    let anioNac = new Date(value).getFullYear();
    console.log(anioNac);
    if (anioActual - anioNac < 18) {
      console.log("es menor de edad", anioActual - anioNac);
      return false;
    } else {
      console.log("es MAYOR de edad", anioActual - anioNac);
      return true;
    }
  },
  /*
   * @param {*} value = "direccion de correo electronico"
   * @returns true or false
   */
  valEMAIL: (value) => {
    //console.log('value', value);
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
  },
  /*
   * @param {*} value = "texto con numeros y letras no mayor a 100"
   * @returns true or false
   */
  valDOM: (value) => {
    //es-lint-ignore-next-line no-useless-escape
    return /^[A-Za-z0-9\s\!\@\#\$\%\^\&\*\)\(+\=\/._-]{0,100}$/.test(value);
  },
  valObjNullOrEmpty: (value) => {
    console.log("⚠⚠PROCESAR ESTO => ", value);
    const arrayValues = Object.values(value);
    const nullishOrEmpty = arrayValues.some(
      (item) =>
        item === null || item === "" || item === 0 /* || item.length === 0 */
    );
    if (nullishOrEmpty) console.log("⭕😡NO SE PUEDE ENVIAR", nullishOrEmpty);
    if (!nullishOrEmpty) console.log("✔👽SI SE PUEDE ENVIAR", nullishOrEmpty);
    return nullishOrEmpty;
  },
  valObjNullOrEmpty_WArrays: (value) => {
    const arrayValues = Object.values(value);
    const nullishOrEmpty = arrayValues.some(
      (item) => item === null || item === "" || item === 0 || item.length === 0
    );
    if (nullishOrEmpty) console.log("NO SE PUEDE ENVIAR", nullishOrEmpty);
    return nullishOrEmpty;
  },
  valCBU: (value) => {
    console.log("value => ", value);

    function validarBloque1(bloque1) {
      if (bloque1.length != 8) {
        return false;
      }
      var banco = bloque1.substr(0, 3);
      var digitoVerificador1 = bloque1[3];
      var sucursal = bloque1.substr(4, 3);
      var digitoVerificador2 = bloque1[7];
      var suma =
        banco[0] * 7 +
        banco[1] * 1 +
        banco[2] * 3 +
        digitoVerificador1 * 9 +
        sucursal[0] * 7 +
        sucursal[1] * 1 +
        sucursal[2] * 3;
      var diferencia = 10 - (suma % 10);
      return diferencia == digitoVerificador2;
    }

    function validarBloque2(bloque2) {
      if (bloque2.length != 14) {
        return false;
      }
      var digitoVerificador = bloque2[13];
      var suma =
        bloque2[0] * 3 +
        bloque2[1] * 9 +
        bloque2[2] * 7 +
        bloque2[3] * 1 +
        bloque2[4] * 3 +
        bloque2[5] * 9 +
        bloque2[6] * 7 +
        bloque2[7] * 1 +
        bloque2[8] * 3 +
        bloque2[9] * 9 +
        bloque2[10] * 7 +
        bloque2[11] * 1 +
        bloque2[12] * 3;
      var diferencia = 10 - (suma % 10);
      return diferencia == digitoVerificador;
    }

    function validarLargoCBU(numero) {
      if (numero.length != 22) {
        return false;
      }
      return true;
    }

    function validarCBU(nrocbu) {
      return (
        validarLargoCBU(nrocbu) &&
        validarBloque1(nrocbu.substr(0, 8)) &&
        validarBloque2(nrocbu.substr(8, 14))
      );
    }

    const validacionDeCBU = validarCBU(value);

    console.log("resultado", validacionDeCBU);

    return validacionDeCBU;
  },
  valMontoCredito: (value) => {
    if (value === 0 || value > 500000) return false;
    return /^[0-9]{0,7}$/.test(value);
  },
  valTNA: (value) => {
    if (value > 999) return false;
    return /^[0-9]{0,3}$/.test(value);
  },
};

module.exports = validaciones;

/* console.log(/^[0-9]{0,8}$/.test(1234567456)) // true */
