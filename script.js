const textoEntrada = document.querySelector(".texto_entrada");
const textoSaida = document.querySelector(".output-section__titulo");
const botaoCriptografar = document.querySelector(".botao_criptografar");
const botaoDescriptografar = document.querySelector(".botao_descriptografar");
const botaoCopiar = document.querySelector(".botao_copiar");
const imagem = document.querySelector(".output-section__imagem");
const paragrafo = document.querySelector(".output-section__paragrafo");
const output = document.querySelector(".output-section");

const mensagemErro = document.createElement("p");
mensagemErro.className = "mensagem_erro";
mensagemErro.style.color = "red";
mensagemErro.style.display = "none";
paragrafo.insertAdjacentElement("beforebegin", mensagemErro);

const codificador = {
    criptografar(texto) {
        return texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    },
    descriptografar(texto) {
        return texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    },
    conferirLowerCase(texto) {
        return texto === texto.toLowerCase() && !/[áéíóúãõâêîôûç]/.test(texto);
    }
};

function mostrarMensagemErro() {
    mensagemErro.textContent = "Digite apenas letras minúsculas sem acento!";
    mensagemErro.style.display = "block";
}

function limparMensagemErro() {
    mensagemErro.style.display = "none";
}

function atualizarVisibilidade() {
    const texto = textoEntrada.value;
    if (codificador.conferirLowerCase(texto) && texto.length > 0) {
        botaoCopiar.style.display = "block";
        imagem.style.display = "none";
        paragrafo.style.display = "none";
        output.classList.add("ajustarEspacamento");
        textoSaida.classList.add("ajustarTextarea");
        limparMensagemErro();
    } else {
        botaoCopiar.style.display = "none";
        imagem.style.display = "block";
        paragrafo.style.display = "block";
        output.classList.remove("ajustarEspacamento");
        textoSaida.classList.remove("ajustarTextarea");
    }
}

function funcaoCriptografar() {
    const texto = textoEntrada.value;
    if (codificador.conferirLowerCase(texto)) {
        const textoCriptografado = codificador.criptografar(texto);
        textoSaida.textContent = textoCriptografado;
        atualizarVisibilidade();
    } else {
        mostrarMensagemErro();
    }
}

function funcaoDescriptografar() {
    const texto = textoEntrada.value;
    if (codificador.conferirLowerCase(texto)) {
        const textoDescriptografado = codificador.descriptografar(texto);
        textoSaida.textContent = textoDescriptografado;
        atualizarVisibilidade();
    } else {
        mostrarMensagemErro();
    }
}

async function funcaoCopiarTexto() {
    try {
        await navigator.clipboard.writeText(textoSaida.textContent);
        textoSaida.textContent = "Nenhuma mensagem encontrada";
        botaoCopiar.style.display = "none";
        imagem.style.display = "block";
        paragrafo.style.display = "block";
        output.classList.remove("ajustarEspacamento");
        textoSaida.classList.remove("ajustarTextarea");

        const mensagemSucesso = document.createElement("p");
        mensagemSucesso.textContent = "Texto copiado com sucesso!";
        mensagemSucesso.style.color = "green";
        output.insertAdjacentElement("beforeend", mensagemSucesso);

        setTimeout(() => {
            mensagemSucesso.remove();
        }, 2000);
    } catch (err) {
        console.error("Erro ao copiar o texto: ", err);
    }
}

botaoCriptografar.addEventListener("click", funcaoCriptografar);
botaoDescriptografar.addEventListener("click", funcaoDescriptografar);
botaoCopiar.addEventListener("click", funcaoCopiarTexto);

const themes = ['tema-padrao', 'tema-dark', 'tema-cofee', 'tema-natura', 'tema-sea',];
let currentThemeIndex = 0;

document.querySelector('.botao_tema').addEventListener('click', function() {
    document.body.classList.remove(themes[currentThemeIndex]);
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    document.body.classList.add(themes[currentThemeIndex]);
});