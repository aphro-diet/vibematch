function getVibe() {
  const vibe = document.getElementById('vibeInput').value.toLowerCase();
  const songs = document.getElementById('songList');
  const layouts = document.getElementById('layoutList');
  const colors = document.getElementById('colors');
  const result = document.getElementById('resultSection');

  songs.innerHTML = '';
  layouts.innerHTML = '';
  colors.innerHTML = '';

  let songData = [];
  let layoutData = [];
  let colorData = [];

  if (vibe.includes("rain") || vibe.includes("sad")) {
    songData = ["‘From the Start’ – Laufey", "‘Let Me Down Slowly’ – Alec Benjamin", "‘Another Love’ – Tom Odell"];
    layoutData = ["Use blurred background with white serif font", "Add raindrop overlay with subtle animation"];
    colorData = ["#b3cde0", "#a1a1a1", "#333333"];
  } else if (vibe.includes("pink") || vibe.includes("soft") || vibe.includes("grunge")) {
    songData = ["‘death bed’ – Powfu", "‘jealous’ – Eyedress", "‘Lover is a Day’ – Cuco"];
    layoutData = ["Use Polaroid-style photo cutouts", "Layer text in typewriter font on pink overlay"];
    colorData = ["#ffc0cb", "#f7cac9", "#4b4b4b"];
  } else {
    songData = ["‘Golden Hour’ – JVKE", "‘Sunflower’ – Post Malone", "‘Cloud 9’ – Beach Bunny"];
    layoutData = ["Use sunburst effect with center quote", "Overlay handwritten font over aesthetic photo"];
    colorData = ["#ffe066", "#fad390", "#f8c291"];
  }

  songData.forEach(song => {
    const li = document.createElement('li');
    li.textContent = song;
    songs.appendChild(li);
  });

  layoutData.forEach(layout => {
    const li = document.createElement('li');
    li.textContent = layout;
    layouts.appendChild(li);
  });

  colorData.forEach(color => {
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    colors.appendChild(box);
  });

  result.classList.remove('hidden');
}
