function imageReveal() {
  const revealButton = document.querySelector('.reveal-button');

  revealButton.addEventListener('click', () => {
    const imageContainer = document.querySelector('.image-container');
    imageContainer.style.display = 'block';
  });
}
imageReveal();