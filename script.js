const textoEntrada = document.getElementById("texto_entrada");
const textoSaida = document.getElementById("texto_saida");
const botaoCriptografar = document.getElementById("botao_criptografar");
const botaoDescriptografar = document.getElementById("botao_descriptografar");
const botaoCopiar = document.getElementById("botao_copiar");

function criptografar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function descriptografar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function conferirLowerCase(texto) {
    if (texto === texto.toLowerCase() && !/[áéíóúãõâêîôûç]/.test(texto)) {
        return true;
    } else {
        textoSaida.value = "Digite apenas letras minúsculas e sem acento!"
        return false;
    }
}

botaoCriptografar.addEventListener("click", () => {
    const texto = textoEntrada.value;
    if (conferirLowerCase(texto)) {
        const textoCriptografado = criptografar(texto);
        textoSaida.value = textoCriptografado;
    }
});

botaoDescriptografar.addEventListener("click", () => {
    const texto = textoEntrada.value;
    if (conferirLowerCase(texto)) {
        const textoDescriptografado = descriptografar(texto);
        textoSaida.value = textoDescriptografado;
    }
});

botaoCopiar.addEventListener("click", () => {
    textoSaida.select();
    document.execCommand("copy");
    textoSaida.value = "";
});
