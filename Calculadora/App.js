import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// Definir el componente principal de la app
export default function App() {
  // Estado que almacena el resultado
  const [result, setResult] = useState('');
   // Estados que almacena los 2 numeros
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  // Estado que almacena el operador
  const [operator, setOperator] = useState('');


 // Evento al presionar boton
  const handleButtonPress = (button) => {
     // Si el botón es un operador, se coloca como el operador actual
    if (button === '+' || button === '-' || button === '*' || button === '/') {
      setOperator(button);
      // Si el botón es '=', da el resultado
    } else if (button === '=') {
      calculate();
       // Si el botón es 'C', limpia el valor
    } else if (button === 'C') {
      clear();
      // Si el botón es un número,se agrega
    } else {
      if (!operator) {
        setNum1(num1 + button);
        setResult(num1 + button);// Muestra el numero ingresado
      } else {
        setNum2(num2 + button);
        setResult(num1 + operator + num2 + button);// Muestra el resultado
      }
    }
  };
// Función para calcular el resultado
  const calculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let result = 0;
    switch (operator) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '/':
        result = number1 / number2;
        break;
      default:
        break;
    }
    // Da el resultado y limpia el valor
    setResult(result.toString());
    setNum1('');
    setNum2('');
    setOperator('');
  };
 // Limpia los valores
  const clear = () => {
    setResult('');
    setNum1('');
    setNum2('');
    setOperator('');
  };

  // Estructura del componente
  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleButtonPress('7')} style={styles.button}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('8')} style={styles.button}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('9')} style={styles.button}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('/')} style={styles.buttonOperador}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleButtonPress('4')} style={styles.button}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('5')} style={styles.button}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('6')} style={styles.button}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('*')} style={styles.buttonOperador}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleButtonPress('1')} style={styles.button}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('2')} style={styles.button}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('3')} style={styles.button}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('-')} style={styles.buttonOperador}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleButtonPress('C')} style={styles.buttonOperador}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('0')} style={styles.button}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('+')} style={styles.buttonOperador}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('=')} style={styles.buttonResult}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// CSS del componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    flex: 1,
    alignSelf:'flex-end',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginTop:10,
    backgroundColor: 'black',
    padding: 10,
  },
  resultText: {
    fontSize: 45,
    color: '#fff',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '98%',
  },
  buttonOperador: {
    backgroundColor: '#142E47',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    margin: 5,
    width: 80,
    height: 83,
  },
  buttonResult: {
    backgroundColor: '#17BEC6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    margin: 5,
    width: 80,
    height: 83,
  },
  button: {
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    margin: 5,
    width: 80,
    height: 83,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
});