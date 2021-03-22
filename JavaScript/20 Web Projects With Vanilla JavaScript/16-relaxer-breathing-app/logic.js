const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;


const breathAnimation = () => {
  text.innerText = "Breath in";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";
    setTimeout(() => {
      text.innerText = "Breath out";
      container.className = "container shrink";
    }, holdTime);
  }, breathTime);
};

setInterval(breathAnimation, totalTime);

breathAnimation();