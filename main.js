// main
import { calcularAreaCirculo } from './area.js';

const radio = 5; // Cambia este valor por el radio deseado
const area = calcularAreaCirculo(radio);

document.getElementById('resultado').textContent = `El área de la circunferencia es: ${area}`;
