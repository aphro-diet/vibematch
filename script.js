// Utility to generate random colors
function getRandomColor() {
  const colors = ['#ff8c42', '#fceabb', '#6A1B9A', '#FF4081', '#f8b500', '#fad0c4', '#ff9a9e'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Process user input
function processInput() {
  const text = document.getElementById('inputText').value.trim();
  if (!text) {
    alert("Please enter a theme or vibe.");
    return;
  }
  displayCard(`Generated for: ${text}`);
}

// Generate vibe by preset button
function generateVibe(vibe) {
  displayCard(`Vibe selected: ${vibe.charAt(0).toUpperCase() + vibe.slice(1)}`);
}

// Display the result card
function displayCard(title) {
  const cardContainer = document.getElementById('cardContainer');
  const card = document.createElement('div');
  card.className = 'card';

  const heading = document.createElement('h3');
  heading.textContent = title;

  const colorBoxWrapper = document.createElement('div');
  colorBoxWrapper.className = 'color-boxes';

  for (let i = 0; i < 4; i++) {
    const box = document.createElement('div');
    box.className = 'color-box';
    box.style.backgroundColor = getRandomColor();
    colorBoxWrapper.appendChild(box);
  }

  const quote = document.createElement('p');
  quote.textContent = "“Let your vibe speak before your words.”";

  const songLink = document.createElement('a');
  songLink.href = "#";
  songLink.textContent = "Suggested playlist";
  songLink.target = "_blank";

  card.appendChild(heading);
  card.appendChild(colorBoxWrapper);
  card.appendChild(quote);
  card.appendChild(songLink);

  cardContainer.appendChild(card);
}
