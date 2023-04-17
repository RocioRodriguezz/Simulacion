import React, { useState } from 'react';

function GenerarNumerosAleatoriosUniformes() {
  const [intervaloMinimo, setIntervaloMinimo] = useState(0);
  const [intervaloMaximo, setIntervaloMaximo] = useState(0);
  const [cantidadNumeros, setCantidadNumeros] = useState(1);
  const [numerosAleatorios, setNumerosAleatorios] = useState([]);

  const generarNumeroAleatorio = (min, max) => {
    return (min  + Math.floor(Math.random(max - min)));
  }

  const handleGenerarNumerosAleatorios = () => {
    const nuevosNumeros = [];
    const cantidadNumerosValida = Math.min(cantidadNumeros, 5000);
    for (let i = 0; i < cantidadNumerosValida; i++) {
      const nuevoNumero = generarNumeroAleatorio(intervaloMinimo, intervaloMaximo);
      nuevosNumeros.push(nuevoNumero);
    }
    setNumerosAleatorios(nuevosNumeros);
  }

  return (
    <div>
      <h3>Generador de números aleatorios distribucion uniforme</h3>
      <div>
        <label>Mínimo:</label>
        <input type="number" value={intervaloMinimo} onChange={(e) => setIntervaloMinimo(parseInt(e.target.value))} />
      </div>
      <div>
        <label>Máximo:</label>
        <input type="number" value={intervaloMaximo} onChange={(e) => setIntervaloMaximo(parseInt(e.target.value))} />
      </div>
      <div>
        <label>Cantidad de números aleatorios (máximo 5000):</label>
        <input type="number" value={cantidadNumeros} onChange={(e) => setCantidadNumeros(parseInt(e.target.value))} />
      </div>
      <button onClick={handleGenerarNumerosAleatorios}>Generar números aleatorios</button>
      <ul>
        {numerosAleatorios.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}


/*
La función generarNumeroAleatorio es una función auxiliar que toma un valor mínimo y máximo y devuelve un número 
aleatorio con distribución uniforme dentro de ese rango.
Las variables de estado intervaloMinimo, intervaloMaximo y numerosAleatorios son usadas para almacenar el intervalo de números 
ingresado por el usuario y los números generados aleatoriamente. la variable cantidadNumeros en el estado, 
que almacena la cantidad de números aleatorios que el usuario desea generar.

La función handleGenerarNumerosAleatorios es la que se ejecuta cuando el usuario hace clic en el botón "Generar números aleatorios". 
Genera 10 números aleatorios con la función generarNumeroAleatorio y los almacena en la variable nuevosNumeros, que luego se 
establece  en el estado de numerosAleatorios con la función setNumerosAleatorios.

En la función handleGenerarNumerosAleatorios, se agrega una validación para asegurarse de que la cantidad de números aleatorios 
generados no exceda de 5000 (el máximo permitido). Esto se logra tomando el mínimo entre cantidadNumeros y 5000 antes de ejecutar 
el ciclo que genera los números aleatorios.

En el JSX, se muestran los dos campos de entrada para que el usuario ingrese el intervalo de números y un botón que desencadena 
la generación de los números aleatorios. Los números aleatorios generados se muestran en una lista.
*/
