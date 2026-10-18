const preview = document.querySelector('#project-preview');
const previewImage = preview.querySelector('.preview-image');
document.querySelectorAll('button.project').forEach((button) => {
  button.addEventListener('click', () => {
    const image = button.querySelector('img');
    previewImage.src = image.src;
    previewImage.alt = image.alt;
    document.querySelector('#preview-title').textContent = button.dataset.title;
    preview.showModal();
  });
});
preview.querySelector('.close-preview').addEventListener('click', () => preview.close());
preview.addEventListener('click', (event) => {
  if (event.target === preview) {
    const bounds = preview.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) preview.close();
  }
});
document.querySelectorAll('.bottom-nav a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.bottom-nav a').forEach((item) => item.removeAttribute('aria-current'));
    link.setAttribute('aria-current', 'location');
  });
});
