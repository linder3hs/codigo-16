// while (condicion) { }

// nota: Un while suele ir acompañado de un conador
let contador = 0;

while (contador < 10) {
  console.log(contador); // 0
  // para que esto de aca no sea siempre true
  // vamos a sumarle a contador 1 en cada vuelta
  // contador = contador + 1
  // contador = 0 + 1sasas
  // contador = 1
  contador += 1;
}

// Ejemplo
const alumnos = ["Juana", "Pepe", "Hugo", "Paco", "Luis"];
let contador2 = 0;

// 1 era vuelta
// 0 < 5
// 2 da vuelta
// 1 < 5
// 3ra vuelta
// 2 < 5
// 4 ta vuelta
// 3 < 5
// 5 ta vuelta
// 4 < 5
// 6ta vuelta
// 5 < 5

while (contador2 < alumnos.length) {
  console.log(alumnos[contador2]);
  contador2 += 1;
}
