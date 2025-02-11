function calcularRepeticoes(nome: string, series: number, repeticoes: number): string {
    const totalRepeticoes = series * repeticoes;
    return `Olá ${nome}, você fará ${totalRepeticoes} repetições, sendo ${series} séries de ${repeticoes} repetições.`;
}

document.getElementById('calculadorForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o recarregamento da página

    const nome = (document.getElementById('nome') as HTMLInputElement).value;
    const series = parseInt((document.getElementById('series') as HTMLInputElement).value);
    const repeticoes = parseInt((document.getElementById('repeticoes') as HTMLInputElement).value);

    if (!nome || isNaN(series) || isNaN(repeticoes)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const mensagem = calcularRepeticoes(nome, series, repeticoes);
    const mensagemSaida = document.getElementById('mensagemSaida');
    if (mensagemSaida) {
        mensagemSaida.textContent = mensagem;
        mensagemSaida.style.display = 'block';
    }
});