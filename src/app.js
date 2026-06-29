window.onload = function() {
    const suits = ['heart', 'diamond', 'spade', 'club'];
    const suitIcons = {
        'heart': '♥',
        'diamond': '♦',
        'spade': '♠',
        'club': '♣'
    };
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    // Generar selecciones aleatorias
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];

    // Capturar elementos del DOM
    const cardElement = document.getElementById('card');
    const topSuitElement = document.querySelector('.top-suit');
    const numberElement = document.querySelector('.number');
    const bottomSuitElement = document.querySelector('.bottom-suit');

    // Asignar los valores obtenidos
    numberElement.innerHTML = randomValue;
    topSuitElement.innerHTML = suitIcons[randomSuit];
    bottomSuitElement.innerHTML = suitIcons[randomSuit];

    // Cambiar la clase para el color según el palo
    cardElement.classList.remove('heart', 'diamond', 'spade', 'club');
    cardElement.classList.add(randomSuit);
};