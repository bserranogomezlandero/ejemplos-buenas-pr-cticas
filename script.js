const eventPropagationContainers = document.querySelectorAll(
  '.event-propagation-container'
);

function showText(ev) {
  // ev.stopPropagation();
  // console.log(ev.target.dataset.text);
  console.log(ev.currentTarget.dataset.text);
}

eventPropagationContainers.forEach(container => {
  container.addEventListener('click', showText);
});

// eventPropagationContainers[0].addEventListener('click', showText, false); // Abuelo
// eventPropagationContainers[1].addEventListener('click', showText, true); // Padre
// eventPropagationContainers[2].addEventListener('click', showText, false); // Nieto
