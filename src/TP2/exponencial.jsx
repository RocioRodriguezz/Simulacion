import React, { useState } from "react";

function ExponentialRandomGeneratorWithMean() {
  const [mean, setMean] = useState(1); // valor por defecto de la media es 1
  const [quantity, setQuantity] = useState(10); // valor por defecto de cantidad es 10
  const [randomNumbers, setRandomNumbers] = useState([]);

  const handleMeanChange = (event) => {
    setMean(event.target.value);
  };

  const handleQuantityChange = (event) => {
    let value = parseInt(event.target.value);
    if (value > 50000) {
      value = 50000; // se establece un máximo de 50,000
    }
    setQuantity(value);
  };

  const generateRandomNumbers = () => {
    let numbers = [];
    for (let i = 0; i < quantity; i++) {
      let randomNumber = -mean * Math.log(1 - Math.random());
      numbers.push(randomNumber.toFixed(4));
    }
    setRandomNumbers(numbers);
  };

  return (
    <div>
      <label>
        Media:
        <input type="number" value={mean} onChange={handleMeanChange} />
      </label>
      <br />
      <label>
        Cantidad de números aleatorios (máximo 50,000):
        <input type="number" value={quantity} onChange={handleQuantityChange} />
      </label>
      <br />
      <button onClick={generateRandomNumbers}>Generar</button>
      <br />
      <ul>
        {randomNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}


function ExponentialRandomGeneratorWithLambda() {
  const [lambda, setLambda] = useState(1); // valor por defecto de lambda es 1
  const [quantity, setQuantity] = useState(10); // valor por defecto de cantidad es 10
  const [randomNumbers, setRandomNumbers] = useState([]);

  const handleLambdaChange = (event) => {
    setLambda(event.target.value);
  };

  const handleQuantityChange = (event) => {
    let value = parseInt(event.target.value);
    if (value > 50000) {
      value = 50000; // se establece un máximo de 50,000
    }
    setQuantity(value);
  };

  const generateRandomNumbers = () => {
    let numbers = [];
    for (let i = 0; i < quantity; i++) {
      let randomNumber = -Math.log(1 - Math.random()) / lambda;
      numbers.push(randomNumber.toFixed(4));
    }
    setRandomNumbers(numbers);
  };

  return (
    <div>
      <label>
        Lambda:
        <input type="number" value={lambda} onChange={handleLambdaChange} />
      </label>
      <br />
      <label>
        Cantidad de números aleatorios (máximo 50,000):
        <input type="number" value={quantity} onChange={handleQuantityChange} />
      </label>
      <br />
      <button onClick={generateRandomNumbers}>Generar</button>
      <br />
      <ul>
        {randomNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExponentialRandomGeneratorWithLambda;


/*ExponentialRandomGeneratorWithLambda: Esta función genera números aleatorios que siguen una distribución exponencial negativa, 
donde el usuario especifica el parámetro lambda de la distribución. El usuario también especifica la cantidad de números aleatorios
 que se generarán. La función utiliza la fórmula x = -ln(1 - r) / λ para generar cada número aleatorio, donde r es un número
aleatorio generado por Math.random(). El resultado es un arreglo de números aleatorios que siguen una distribución exponencial 
negativa con el parámetro lambda especificado.

ExponentialRandomGeneratorWithMean: Esta función genera números aleatorios que siguen una distribución exponencial negativa, 
donde el usuario especifica el valor de la media de la distribución. El usuario también especifica la cantidad de números aleatorios 
que se generarán. La función utiliza la fórmula λ = 1 / μ, donde μ es el valor medio especificado por el usuario. Luego, utiliza 
la fórmula para generar cada número aleatorio. El resultado es un arreglo de números aleatorios  que siguen una distribución 
exponencial negativa con el valor medio especificado por el usuario (maximo 50000 numeros). */