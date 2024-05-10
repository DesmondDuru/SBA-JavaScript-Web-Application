// Import styles
// import './style.css';

// Function to fetch forex market data from an external API
async function fetchForexData() {
    try {
        const response = await fetch('https://api.example.com/forex');
        if (!response.ok) {
            throw new Error('Failed to fetch forex data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching forex data:', error);
        throw error;
    }
}

// Function to display forex market data on the webpage
function displayForexData(data) {
    const container = document.getElementById('forex-data-container');
    container.innerHTML = '';
    data.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('forex-item');
        div.innerHTML = `
            <strong>${item.currency_pair}</strong>: ${item.price}
        `;
        container.appendChild(div);
    });
}

// Function to initialize the application
async function init() {
    try {
        const forexData = await fetchForexData();
        displayForexData(forexData);      
    } catch (error) {
        console.error('Initialization error:', error);
    }
}

// Call the init function when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Handle image click event
const imageContainer = document.querySelector('.image-container');
imageContainer.addEventListener('click', () => {
    // Open the image in a new tab
    window.open('forex.jpg', '_blank');
});

// Handle navigation to other webpages
const linksContainer = document.querySelector('.links-container');
linksContainer.addEventListener('click', event => {
    event.preventDefault(); // Prevent default link behavior
    const targetPage = event.target.getAttribute('href');
    if (targetPage) {
        window.location.href = targetPage; // Navigate to the target page
    }
});
