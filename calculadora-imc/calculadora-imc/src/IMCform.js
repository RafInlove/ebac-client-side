import React, { useState } from 'react';
import './IMCform.module.css';

function IMCForm() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setIMC] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const calcularIMC = () => {
        if (altura && peso) {
            const alturaEmMetros = altura / 100;
            const imcCalculado = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2);
            setIMC(imcCalculado);
            setClassificacao(classificarIMC(imcCalculado));
        }
    };

    const classificarIMC = (imc) => {
        if (imc < 18.5) return 'Abaixo do peso';
        if (imc >= 18.5 && imc <= 24.9) return 'Peso normal';
        if (imc >= 25 && imc <= 29.9) return 'Sobrepeso';
        if (imc >= 30 && imc <= 34.9) return 'Obesidade Grau 1';
        if (imc >= 35 && imc <= 39.9) return 'Obesidade Grau 2';
        return 'Obesidade Grau 3';
    };

    return (
        <div>
            <h2>Calculadora de IMC</h2>
            <div>
                <label>Altura (cm): </label>
                <input
                    type="number"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                />
            </div>
            <div>
                <label>Peso (kg): </label>
                <input
                    type="number"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                />
            </div>
            <button onClick={calcularIMC}>Calcular IMC</button>

            {imc && (
                <div>
                    <h3>Seu IMC: {imc}</h3>
                    <p>Classificação: {classificacao}</p>
                </div>
            )}
        </div>
    );
}

export default IMCForm;
