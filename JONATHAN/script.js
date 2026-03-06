const body = document.body;
const toggle = document.getElementById('modeToggle');
const welcome = document.getElementById('welcome');

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

window.addEventListener('load', () => {
  welcome.style.animation = 'welcomeSlide 3s forwards';
  setTimeout(() => { welcome.style.display = 'none'; }, 3000);
});

const slideElements = document.querySelectorAll('.slide-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

slideElements.forEach(el => observer.observe(el));
