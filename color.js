// Assignment 1: Change Background Color

getRandomColor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  let color = "rgb(" + red + "," + green + "," + blue + ")";
  console.log(color);
  return color;
};

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

document.onclick = changeBackgroundColor;
