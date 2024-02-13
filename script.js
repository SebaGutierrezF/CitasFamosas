const quoteContainer = document.getElementById('quote');
const authorContainer = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

const quotes = [
  { text: 'La vida es lo que pasa mientras estás ocupado haciendo otros planes.', author: 'John Lennon' },
  { text: 'La única forma de hacer un gran trabajo es amar lo que haces.', author: 'Steve Jobs' },
  { text: 'Nuestra cultura concibe las emociones como algo más complejo y oscuro que el intelecto.', author: 'Clarice Lispector' },
  { text: 'Todos los grandes inventos tecnológicos creados por el hombre – el avión, el automóvil, el ordenador – dicen poco acerca de su inteligencia, pero dicen mucho de su pereza.', author: 'Mark Kennedy' },
  { text: 'La programación no es sobre lo que sabes; es sobre lo que puedes descubrir.', author: 'Chris Pine' },
  { text: 'La tecnología se alimenta de sí misma. La tecnología hace posible más tecnología.', author: 'Alvin Toffler' },
  { text: 'La creatividad es la inteligencia divirtiéndose.', author: 'Albert Einstein' },
  { text: 'La simplicidad es la máxima sofisticación.', author: 'Leonardo da Vinci' },
  { text: 'La mejor manera de predecir el futuro es crearlo.', author: 'Alan Kay' },
  { text: 'La lógica te llevará de A a B. La imaginación te llevará a cualquier parte.', author: 'Albert Einstein' },
  { text: 'La tecnología se vuelve obsoleta rápidamente. La habilidad de programar no.', author: 'Cay Horstmann' },
  { text: 'La calidad nunca es un accidente; siempre es el resultado de un esfuerzo de la inteligencia.', author: 'John Ruskin' },
  { text: 'La curiosidad es la clave para aprender y crecer.', author: 'Arnold Schwarzenegger' },
  { text: 'La simplicidad es la máxima sofisticación.', author: 'Leonardo da Vinci' },
  { text: 'La tecnología no es buena ni mala; solo es poderosa.', author: 'Benjamin Franklin' },
  { text: 'La tecnología se alimenta de sí misma. La tecnología hace posible más tecnología.', author: 'Alvin Toffler' },
  { text: 'La creatividad es la inteligencia divirtiéndose.', author: 'Albert Einstein' },
  { text: 'La simplicidad es la máxima sofisticación.', author: 'Leonardo da Vinci' },
  { text: 'La mejor manera de predecir el futuro es crearlo.', author: 'Alan Kay' },
  { text: 'La lógica te llevará de A a B. La imaginación te llevará a cualquier parte.', author: 'Albert Einstein' },
  { text: 'La tecnología se vuelve obsoleta rápidamente. La habilidad de programar no.', author: 'Cay Horstmann' },
  { text: 'La calidad nunca es un accidente; siempre es el resultado de un esfuerzo de la inteligencia.', author: 'John Ruskin' },
  { text: 'La curiosidad es la clave para aprender y crecer.', author: 'Arnold Schwarzenegger' }
  // Agrega más citas aquí
];


// Función para obtener una cita aleatoria
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Mostrar una cita al cargar la página
const initialQuote = getRandomQuote();
quoteContainer.textContent = initialQuote.text;
authorContainer.textContent = `- ${initialQuote.author}`;

// Evento para obtener una nueva cita al hacer clic en el botón
newQuoteButton.addEventListener('click', () => {
  const newQuote = getRandomQuote();
  quoteContainer.textContent = newQuote.text;
  authorContainer.textContent = `- ${newQuote.author}`;
});
