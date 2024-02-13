const resultadoDiv = document.getElementById("resultado");
const form = document.getElementById("cachipun");
const estado = document.getElementById("estado");

let juegosTotales;
let juegosRestantes;

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const opciones = ["Piedra", "Papel", "Tijera"];
    const opcionUsuario = document.getElementById("jugada").value;
    const opcionMaquina = opciones[Math.floor(Math.random() * opciones.length)];
    const resultadoJuego = ganador(opcionUsuario, opcionMaquina);
    mostrarResultado(resultadoJuego, juegosTotales - juegosRestantes + 1);

    juegosRestantes--;
    if (juegosRestantes > 0) {
        estado.innerHTML = `<p class="fw-bold">Juegos restantes: ${juegosRestantes}</p>`;
        jugar();
    } else {
        document.getElementById("jugar").hidden = true;
        document.getElementById("cachipun").hidden = true;
        estado.innerHTML = 
        `<div>
        <p class="fw-bold">¡Juegos finalizados!</p>
        <button id="reset" class="btn btn-success m-1" type="button" onclick="recargarPagina()">Volver a jugar</button>
        </div>`
    }
});

function ganador(opcionUsuario, opcionMaquina) {
    if (opcionUsuario === opcionMaquina) {
        return {
            resultado: "empate",
            usuario: opcionUsuario,
            maquina: opcionMaquina
        };
    } else if (
        (opcionUsuario === "Piedra" && opcionMaquina === "Tijera") || 
        (opcionUsuario === "Papel" && opcionMaquina === "Piedra") || 
        (opcionUsuario === "Tijera" && opcionMaquina === "Papel")
    ) {
        return {
            resultado: "ganado",
            usuario: opcionUsuario,
            maquina: opcionMaquina
        };
    } else {
        return {
            resultado: "perdido",
            usuario: opcionUsuario,
            maquina: opcionMaquina
        };
    }
}

function solicitarJuego() {
    juegosTotales = parseInt(prompt("¿Cuántas veces deseas jugar?"));
    if (!isNaN(juegosTotales) && juegosTotales > 0) {
        juegosRestantes = juegosTotales;
        jugar();
    } else {
        alert("Introduce un número válido mayor que cero.");
        solicitarJuego();
    }
}

function jugar() {
    form.reset();
}

function mostrarResultado(resultadoJuego, numeroJuego) {
    let mensaje;
    if (resultadoJuego.resultado === "empate") {
        mensaje = "¡Es un empate!";
    } else if (resultadoJuego.resultado === "ganado") {
        mensaje = "¡Has ganado!";
    } else {
        mensaje = "¡Has perdido contra la máquina!";
    }
    resultadoDiv.innerHTML += `<div class="container bg-${resultadoJuego.resultado === "empate" ? "info" : resultadoJuego.resultado === "ganado" ? "success" : "danger"} mt-5 text-light"><h3>Juego ${numeroJuego}</h3><p>${mensaje}</p><p>Tu jugada: ${resultadoJuego.usuario}</p><p>Jugada de la máquina: ${resultadoJuego.maquina}</p></div>`;
}

function recargarPagina() {
    location.reload();
}

solicitarJuego();