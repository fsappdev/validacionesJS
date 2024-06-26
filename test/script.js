const validaciones = require("ddb-validaciones");

const { valEMAIL } = validaciones;

const res = valEMAIL("dario@dario.com");

console.log(res);
