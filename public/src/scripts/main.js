const form = document.getElementById('tripForm');
const resultBox = document.getElementById('resultBox');
const itineraryText = document.getElementById('itineraryText');
const summaryText = document.getElementById('summaryText');
const translationText = document.getElementById('translationText');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    employeeName: document.getElementById('employeeName').value,
    destination: document.getElementById('destination').value,
    purpose: document.getElementById('purpose').value,
    departure: document.getElementById('departure').value,
    returnDate: document.getElementById('returnDate').value,
    activities: document.getElementById('activities').value,
    meetings: document.getElementById('meetings').value,
  };

  try {
    const response = await fetch('https://your-api-endpoint.com/generate-itinerary', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    itineraryText.textContent = result.itinerary || 'No itinerary received.';
    summaryText.textContent = result.summary || 'No summary received.';
    
    // Example multilingual result
    const phrases = result.translations || [
      "Where is the hotel? — Où est l'hôtel?",
      "I need help. — J'ai besoin d'aide.",
      "Where is the meeting room? — Où est la salle de réunion?"
    ];
    translationText.innerHTML = "";
    phrases.forEach(phrase => {
      const li = document.createElement('li');
      li.textContent = phrase;
      translationText.appendChild(li);
    });

    resultBox.style.display = 'block';

  } catch (error) {
    alert('Failed to generate itinerary. Please try again later.');
    console.error(error);
  }
});
