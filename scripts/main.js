//change of subject
document.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.getElementById("theme-toggle");
    const body = document.body;

    const savedTheme = localStorage.getItem("theme");
  
    if (savedTheme === "dark") {
      body.classList.add("dark-mode");
      toggleSwitch.checked = true;
    }
  
    toggleSwitch.addEventListener("change", function() {
      if (this.checked) {
        body.classList.add("light-mode");
        localStorage.setItem("theme", "light");
      } else {
        body.classList.remove("light-mode");
        localStorage.setItem("theme", "dark");
      }
    });
  });
  

//circle that follows the cursor
const circleElement = document.querySelector(".circle");
const mouse = {x: 0, y: 0};
const previousMouse = {x: 0, y: 0};
const circle = {x: 0, y: 0};
let currentScale = 0;

window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

const speed = 0.17;

const tick = () => {
    // Actualiza la posición del círculo
    circle.x += (mouse.x - circle.x) * speed;
    circle.y += (mouse.y - circle.y) * speed;

    const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

    // Calcula la velocidad del ratón
    const deltaMouseX = mouse.x - previousMouse.x;
    const deltaMouseY = mouse.y - previousMouse.y;
    previousMouse.x = mouse.x;
    previousMouse.y = mouse.y;

    const mouseVelocity = Math.min(Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2)*4, 150);

    // Calcula el valor de la escala basado en la velocidad del ratón
    const scaleValue = (mouseVelocity / 150) * 0.05;

    // Ajusta la escala gradualmente
    currentScale += (scaleValue - currentScale) * speed;

    const scaleTransformation = `scale(${1 + currentScale}, ${1 - currentScale})`;

    // Aplica las transformaciones
    circleElement.style.transform = `${translateTransform} ${scaleTransformation}`;

    window.requestAnimationFrame(tick);
};

tick();


//burger menu
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('show');
});