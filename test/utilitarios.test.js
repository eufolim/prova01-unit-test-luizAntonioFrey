/* import Utilitarios from "../src/utilitarios"; */
const Utilitarios = require("../src/utilitarios")

describe("testar a clase Utilitarios", () => {
    let util

    beforeEach(() => {
        util = new Utilitarios();
    })

    test("deve retornar a string invertida", async () => {
        expect(util.inverterString("teste")).toStrictEqual("etset");
    });

    test("deve retornar o numero de caracteres de uma string", async () => {
        expect(util.contarCaracteres("teste")).toStrictEqual(5);
    });

    test("deve retornar toda a string em maiusculas", async () => {
        expect(util.paraMaiusculas("teste")).toStrictEqual("TESTE");
    });

    test("deve retornar toda a string em minuscular", async () => {
        expect(util.paraMinusculas("TESTE")).toStrictEqual("teste");
    });

    test("deve retornar a string com a primeira letra maiuscula", async () => {
        expect(util.primeiraLetraMaiuscula("teste")).toStrictEqual("Teste");
    });

    test("Somar dois valores válidos", async () => {
        expect(util.somar(5, 10)).toStrictEqual(15);
    });

    test("Subtrair dois valores válidos", async () => {
        expect(util.subtrair(20, 10)).toStrictEqual(10);
    });
    
    test("Multiplicar dois valores válidos", async () => {
        expect(util.multiplicar(5, 10)).toStrictEqual(50);
    });
    
    test("Dividir dois valores válidos", async () => {
        expect(util.dividir(20, 10)).toStrictEqual(2);
    });

    test("deve returnar verdadeira para par e falso para impar", async () => {
        expect(util.ehPar(2)).toBeTruthy();
        expect(util.ehPar(3)).toBeFalsy();
    });

    test("deve retornar o primeiro elemento do array", async () => {
        expect(util.primeiroElemento(["t","e","s","t","e"])).toStrictEqual("t");
    });

    test("deve retornar o ultimo elemento do array", async () => {
        expect(util.ultimoElemento(["t","e","s","t","e"])).toStrictEqual("e");
    });

    test("deve retornar o numero de elementos no array", async () => {
        expect(util.tamanhoArray(["t","e","s","t","e"])).toStrictEqual(5);
    });

    test("deve retornar o array em ordem alfanumerica", async () => {
        expect(util.ordenarArray([5,1,4,3,2])).toStrictEqual([1,2,3,4,5]);
    });

    test("deve retornar o array invertido", async () => {
        expect(util.inverterArray(["t","e","s","t","e"])).toStrictEqual(["e","t","s","e","t"]);
    });

    /* test("", async () => {
        expect(util.gerarNumeroAleatorio(10)).toBeDefined()();
    }); */

    /* test("", async () => {
        expect(util.ehNumero(10)).toBeInteger();
    }); */

    test("deve retornar a string com os espaços do inicio, final e maiores que 1 removidos ", async () => {
        expect(util.removerEspacos(" teste ")).toStrictEqual("teste");
    });

    test("deve retornar a string repetida n vezes", async () => {
        expect(util.repetirTexto("teste",3)).toStrictEqual("testetesteteste");
    });

    test("deve retornar uma string com os elementos do array separados por ',' ", async () => {
        expect(util.juntarArray(["t","e","s","t","e"])).toStrictEqual("t,e,s,t,e");
    });

    test("deve retornar o numero de palavras", async () => {
        expect(util.contarPalavras(" teste de contar palavras ")).toStrictEqual(4);
    });

    /* test("", async () => {
        expect(util.mediaArray(["t","e","s","t","e"])).toStrictEqual();
    }); */

    test("identificar palindromo", async () => {
        expect(util.ehPalindromo("arara")).toBeTruthy();
        expect(util.ehPalindromo("teste")).toBeFalsy();
    });

    /* test("", async () => {
        expect(util.mesclarObjetos("abc","def")).toStrictEqual();
    }); */
});