const inputs = document.querySelectorAll('.form__input');

for(let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('focus', () => {
    const label = inputs[i].previousSibling;
    label.style.opacity = 0;
    inputs[i].classList.add('form__input--show-placeholder');
  }, { once: true });
}
