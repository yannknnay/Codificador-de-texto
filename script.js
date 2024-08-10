const inputText = document.getElementById("input_text");
const outputText = document.getElementById("output_text");
const encryptButton = document.getElementById("crypt_btn"); // Corrigido de 'encrypt_btn' para 'crypt_btn'
const decryptButton = document.getElementById("decrypt_btn");
const copyButton = document.getElementById("copy_btn");

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

encryptButton.addEventListener("click", () => {
    const textoCriptografado = criptografar(inputText.value);
    outputText.value = textoCriptografado;
});

decryptButton.addEventListener("click", () => {
    const textoDescriptografado = descriptografar(inputText.value);
    outputText.value = textoDescriptografado;
});

copyButton.addEventListener("click", () => {
    outputText.select();
    document.execCommand("copy");
    outputText.value = "";
});
