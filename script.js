const rabbit = document.getElementById('rabbit');

// Function to randomize rabbit size and position
function randomizeRabbit() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const randomSize = Math.random() * 2 + 0.5;
    rabbit.style.transform = `scale(${randomSize})`;

    const randomX = Math.random() * (windowWidth - rabbit.offsetWidth * randomSize);
    const randomY = Math.random() * (windowHeight - rabbit.offsetHeight * randomSize);
    rabbit.style.left = `${randomX}px`;
    rabbit.style.top = `${randomY}px`;
}

// Glitch effect
function glitchEffect() {
    rabbit.classList.add('glitch');
    setTimeout(() => {
        rabbit.classList.remove('glitch');
    }, 500);  // Glitch lasts 500ms
}

setInterval(() => {
    randomizeRabbit();
    glitchEffect();
}, 2000);

// Show hidden message on hover
rabbit.addEventListener('mouseenter', () => {
    document.getElementById('secret-message').style.display = 'block';
});

rabbit.addEventListener('mouseleave', () => {
    document.getElementById('secret-message').style.display = 'none';
});

// Click to reveal secret
rabbit.addEventListener('click', () => {
    alert('you found the rabbit\'s burrow!');
});

// Easter egg timer - shows message after 30 seconds
setTimeout(() => {
    let secretTimerMessage = document.createElement('div');
    secretTimerMessage.innerHTML = "patience is key...";
    secretTimerMessage.style.position = 'fixed';
    secretTimerMessage.style.bottom = '100px';
    secretTimerMessage.style.left = '50%';
    secretTimerMessage.style.transform = 'translateX(-50%)';
    secretTimerMessage.style.fontSize = '20px';
    secretTimerMessage.style.color = '#ff66cc';
    document.body.appendChild(secretTimerMessage);
}, 30000);  // Shows after 30 seconds

// Konami Code activation
let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑ ↑ ↓ ↓ ← → ← → B A
let konamiIndex = 0;

document.addEventListener('keydown', (event) => {
    if (event.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            alert('konami code activated! you found a hidden treasure!');
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

