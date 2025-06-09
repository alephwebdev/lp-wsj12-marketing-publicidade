// Scripts da seção Home (efeitos, animações, etc.)

// Exemplo: animação de título
// function animateHomeTitle() {}

// Animação de troca de títulos no h1#home-titles
const titles = [
  'Marketing Digital de Impacto',
  'Branding para Grandes Marcas',
  'Publicidade Sofisticada',
  'Resultados Reais para Seu Negócio'
];
let current = 0;
const h1 = document.getElementById('home-titles');
function animateChange(newText) {
  h1.style.opacity = 0;
  setTimeout(() => {
    h1.textContent = newText;
    h1.style.opacity = 1;
  }, 400);
}
function changeTitle() {
  animateChange(titles[current]);
  current = (current + 1) % titles.length;
}
changeTitle();
setInterval(changeTitle, 3500);

// Adiciona transição suave no CSS via JS (caso não esteja no CSS)
h1.style.transition = 'opacity 0.5s';
