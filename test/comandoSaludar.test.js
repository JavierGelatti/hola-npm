import { execSync } from 'node:child_process';

describe("comando saludar", () => {
    test("muestra un saludo por consola", () => {
        const resultado = execSync('./index.js "mundo"').toString();

        expect(resultado).toEqual("Hola, mundo!!\n");
    });

    test("muestra simplemente hola si no se provee un nombre", () => {
        const resultado = execSync('./index.js').toString();

        expect(resultado).toEqual("Hola!!\n");
    });
});