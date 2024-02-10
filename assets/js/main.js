const resultadoDiv = document.getElementById("resultado");
const form = document.getElementById("cachipun");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const opciones = ["Piedra", "Papel", "Tijera"];
    const opcionUsuario = document.getElementById("jugada").value;
    const opcionMaquina = opciones[Math.floor(Math.random() * opciones.length)];
    ganador(opcionUsuario, opcionMaquina);
});

function ganador(opcionUsuario, opcionMaquina) {
    if (opcionUsuario === opcionMaquina) {

        return resultadoDiv.innerHTML = 
            `<div class="container bg-info mt-5 "><p>¡Es un empate!</p>
            <p>Tu jugada: ${opcionUsuario}</p>
            <p>Jugada de la máquina: ${opcionMaquina}</p></div>
            `;
    } else if (
        (opcionUsuario === "Piedra" && opcionMaquina === "Tijera") || (opcionUsuario === "Papel" && opcionMaquina === "Piedra") || (opcionUsuario === "Tijera" && opcionMaquina === "Papel")
    ) {
        return resultadoDiv.innerHTML = 
            `<div class="container bg-success text-light mt-5"><p>¡Has ganado!</p>
            <p>Tu jugada: ${opcionUsuario}</p>
            <p>Jugada de la máquina: ${opcionMaquina}</p></div>
            `;
    } else {
        return resultadoDiv.innerHTML = 
            `<div class="container bg-danger text-light mt-5"><p>¡Has perdido contra la máquina!</p>
            <p>Tu jugada: ${opcionUsuario}</p>
            <p>Jugada de la máquina: ${opcionMaquina}</p></div>
            `;
    }
}