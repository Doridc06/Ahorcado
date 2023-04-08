const palabras = ["rosa", "banana", "perro", "gato", "elefante", "mariposa", "doriana", "jaime", "sonia", "joaquin", "desiree"];
const palabra = palabras[Math.floor(Math.random() * palabras.length)];
let letrasAdivinadas = Array(palabra.length).fill("-");
let intentos = 10;

while (intentos > 0) {
	alert("Adivina la palabra: " + letrasAdivinadas.join(""));
	alert("Te quedan " + intentos + " intentos.");
	let letra = prompt("Ingresa una letra:");

	let acierto = false;

	for (let i = 0; i < palabra.length; i++) {
		if (palabra.charAt(i) === letra) {
			letrasAdivinadas[i] = letra;
			acierto = true;
		}
	}

	if (!acierto) {
		intentos--;
	}

	if (letrasAdivinadas.join("") === palabra) {
		alert("¡ENHORABUENA, Ganaste! La palabra era " + palabra);
		break;
	}
}

if (intentos === 0) {
	alert("Perdiste pendej@ :( La palabra era " + palabra);
}
