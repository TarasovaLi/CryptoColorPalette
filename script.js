const paletteDiv = document.getElementById('palette');
const generateBtn = document.getElementById('generate');

function randomColor() {
  const hex = Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');
  return `#${hex}`;
}

function generatePalette() {
  paletteDiv.innerHTML = '';
  for(let i=0;i<5;i++){
    const color = randomColor();
    const div = document.createElement('div');
    div.className = 'color-box';
    div.style.backgroundColor = color;
    div.textContent = color;
    div.onclick = () => navigator.clipboard.writeText(color);
    paletteDiv.appendChild(div);
  }
}

generateBtn.addEventListener('click', generatePalette);
generatePalette();
