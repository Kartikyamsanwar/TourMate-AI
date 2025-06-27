const form = document.getElementById('tripForm');
const resultBox = document.getElementById('resultBox');
const itineraryText = document.getElementById('itineraryText');
const summaryText = document.getElementById('summaryText');

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
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    itineraryText.textContent = result.itinerary || 'No itinerary received.';
    summaryText.textContent = result.summary || 'No summary received.';
    resultBox.style.display = 'block';
  } catch (error) {
    alert('Failed to generate itinerary. Please try again later.');
    console.error(error);
  }
});
