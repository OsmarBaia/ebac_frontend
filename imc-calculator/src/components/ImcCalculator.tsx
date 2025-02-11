import React, { useState } from 'react';
import './ImcCalculator.css'; // Importando o arquivo CSS

const ImcCalculator: React.FC = () => {
  const [altura, setAltura] = useState<number>(0);
  const [peso, setPeso] = useState<number>(0);
  const [imc, setImc] = useState<number | null>(null);
  const [classificacao, setClassificacao] = useState<string>('');

  const calcularIMC = () => {
    if (altura > 0 && peso > 0) {
      const alturaMetros = altura / 100; // Converte altura de cm para metros
      const imcCalculado = peso / (alturaMetros * alturaMetros);
      setImc(imcCalculado);
      setClassificacao(classificarIMC(imcCalculado));
    } else {
      alert('Por favor, insira valores válidos para altura e peso.');
    }
  };

  const classificarIMC = (imc: number): string => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
    if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
    if (imc >= 30 && imc < 34.9) return 'Obesidade grau 1';
    if (imc >= 35 && imc < 39.9) return 'Obesidade grau 2';
    return 'Obesidade grau 3';
  };

  return (
    <div className="container">
      <h1 className="title">Calculadora de IMC</h1>
      <div className="inputGroup">
        <label className="label">
          Altura (cm):
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(parseFloat(e.target.value))}
            className="input"
          />
        </label>
      </div>
      <div className="inputGroup">
        <label className="label">
          Peso (kg):
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(parseFloat(e.target.value))}
            className="input"
          />
        </label>
      </div>
      <button onClick={calcularIMC} className="button">
        Calcular IMC
      </button>
      {imc !== null && (
        <div className="result">
          <h2>Resultado</h2>
          <p>Seu IMC é: {imc.toFixed(2)}</p>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
};

export default ImcCalculator;