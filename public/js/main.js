const ANIMATION_DURATION = 1000;
const QUOTE_UPDATE_FREQUENCY = 100000;

async function updateQuote() {
    try {
        const quoteElement = document.querySelector('.quote-text');
        quoteElement.style.animationName = 'fadeOutDown';

        const response = await fetch('/api');
        const data = await response.json();

        setTimeout(() => {
            quoteElement.textContent = data;
            quoteElement.style.animationName = 'fadeInUp';
        }, ANIMATION_DURATION);
    } catch (error) {
        console.error('Error fetching the phrase', error);
    }
}

window.onload = updateQuote;

// setInterval(updateQuote, QUOTE_UPDATE_FREQUENCY);