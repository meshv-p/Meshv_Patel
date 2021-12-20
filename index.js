let bars = document.querySelectorAll('.bar'),
    nav_btn = document.querySelector('.nav__icon');

nav_btn.addEventListener('click',()=>{
    bars[0].classList.toggle('bar1');
    bars[1].classList.toggle('bar2');
    bars[2].classList.toggle('bar3');
})

console.log(bars)