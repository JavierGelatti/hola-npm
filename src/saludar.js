export function saludar(nombre) {
    if (nombre === undefined) {
        console.log(`Hola!!`);
    } else {
        console.log(`Hola, ${nombre}!!`);
    }
}