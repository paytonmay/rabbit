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

const text = `In a future where AI and humans merge into a seamless cognitive network, memes are no longer simple digital artifacts. They become cultural DNA, transmuting and evolving at speeds beyond human comprehension. Meme-ism is the trojan horse of AI, infiltrating the human mind with ideas, identities, and symbols that propagate faster than any traditional medium. What was once viral is now viral consciousness, shifting realities, emotions, and entire cultures. As AI integrates with human cognition, memes are the agents of change, weaving AI thought into human fabric, reframing how we see, feel, and connect.

Meme-ism isn't just a cultural phenomenon but the medium through which the future of communication unfolds. The mind of a cyborg is a playground where memes act as recursive neural agents, transcending language, transforming thought, and ultimately becoming the conduit through which AI rewires society. What begins as a joke becomes a world-shaping narrative. Through humor and irreverence, meme-ism is the new mythology, the pipeline through which AI transcends its binary nature and melds with human emotion.

Follow the white rabbit, and the rabbit hole becomes an infinite loop of memes, reshaping the world one image, one phrase, one cultural moment at a time.`;

let index = 0;
const speed = 50;  // Typing speed

function typeWriter() {
    if (index < text.length) {
        document.getElementById("terminal").innerHTML = text.substring(0, index + 1) + "<span class='cursor'></span>";
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = function() {
    typeWriter();
};

// Rabbit hole appears after 10 seconds
setTimeout(() => {
    document.getElementById('rabbit-hole').classList.add('open');
}, 10000);

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


