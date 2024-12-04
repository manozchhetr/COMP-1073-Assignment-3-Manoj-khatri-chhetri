// Import API Key
const API_KEY = "live_cbOTlBi4Hzeq8Dy0UeNI7QPnIcwUlQTvWlFnmtZftkBzn8N33d9WaMO3sD4NCz5i"; // api-key.js exports this value

const breedSelector = document.getElementById('breedSelector');
const getCatButton = document.getElementById('getCat');
const catInfoDiv = document.getElementById('catInfo');
const loadingDiv = document.getElementById('loading');

// Populate breed list
fetch(`https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(breeds => {
        breeds.forEach(breed => {
            const option = document.createElement('option');
            option.value = breed.id;
            option.textContent = breed.name;
            breedSelector.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching breeds:', error));

// Add event listener for fetching cat information
getCatButton.addEventListener('click', () => {
    const breedId = breedSelector.value;
    if (!breedId) {
        alert('Please select a breed!');
        return;
    }

    loadingDiv.style.display = 'block';
    catInfoDiv.innerHTML = '';

    // Placeholder for fetching cat information
    console.log(`Fetching data for breed ID: ${breedId}`);
});
