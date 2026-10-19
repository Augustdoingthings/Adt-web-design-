document.documentElement.classList.add('js');
const m=document.querySelector('.menu'),n=document.querySelector('nav');
m.addEventListener('click',()=>m.setAttribute('aria-expanded',n.classList.toggle('open')));
document.querySelectorAll('.card').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--x',e.clientX-r.left+'px');c.style.setProperty('--y',e.clientY-r.top+'px')}));
const io=new IntersectionObserver(a=>a.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
const f=document.getElementById('wa');
if(f)f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);open('https://wa.me/263787202185?text='+encodeURIComponent("Hi ADT, I'm "+d.get('n')+' ('+d.get('t')+'). '+d.get('m')))});
