var _a;
function calcularRepeticoes(nome, series, repeticoes) {
    var totalRepeticoes = series * repeticoes;
    return "Ol\u00E1 ".concat(nome, ", voc\u00EA far\u00E1 ").concat(totalRepeticoes, " repeti\u00E7\u00F5es, sendo ").concat(series, " s\u00E9ries de ").concat(repeticoes, " repeti\u00E7\u00F5es.");
}

(_a = document.getElementById('calculadorForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); 

    var nome = document.getElementById('nome').value;
    var series = parseInt(document.getElementById('series').value);
    var repeticoes = parseInt(document.getElementById('repeticoes').value);

    if (!nome || isNaN(series) || isNaN(repeticoes)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    var mensagem = calcularRepeticoes(nome, series, repeticoes);
    var mensagemSaida = document.getElementById('mensagemSaida');
    if (mensagemSaida) {
        mensagemSaida.textContent = mensagem;
        mensagemSaida.style.display = 'block';
    }
});
