(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* year */
  var yearEl = document.getElementById('year'); if(yearEl) yearEl.textContent = new Date().getFullYear();

  /* header scroll glass */
  var header = document.getElementById('header');
  function onScroll(){ header.classList.toggle('scrolled', window.scrollY > 24); }
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  /* mobile menu */
  var burger = document.getElementById('burger');
  var panel = document.getElementById('mobilePanel');
  function toggleMenu(open){
    burger.classList.toggle('open', open);
    panel.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true':'false');
    document.body.style.overflow = open ? 'hidden':'';
  }
  burger.addEventListener('click', function(){ toggleMenu(!panel.classList.contains('open')); });
  panel.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ toggleMenu(false); }); });

  /* active nav link via scrollspy */
  var sections = ['inicio','servicos','como-funciona','planos','sobre','contato'];
  var links = Array.prototype.slice.call(document.querySelectorAll('.menu a'));
  function spy(){
    var pos = window.scrollY + 120, cur = 'inicio';
    sections.forEach(function(id){ var el=document.getElementById(id); if(el && el.offsetTop<=pos) cur=id; });
    links.forEach(function(l){ l.classList.toggle('active', l.getAttribute('href')==='#'+cur); });
  }
  /* só na página inicial: nas páginas internas o item ativo vem marcado no HTML */
  if(document.getElementById('inicio')){ spy(); window.addEventListener('scroll', spy, {passive:true}); }

  /* reveal on scroll */
  var reveals = document.querySelectorAll('.reveal');
  if(reduce){ reveals.forEach(function(r){ r.classList.add('in'); }); }
  else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ e.target.classList.toggle('in', e.isIntersecting); });
    }, {threshold:.12, rootMargin:'0px 0px -8% 0px'});
    reveals.forEach(function(r){ io.observe(r); });
  }

  /* animated counter */
  function animateCount(el){
    var target = parseFloat(el.getAttribute('data-count'));
    var prefix = el.getAttribute('data-prefix') || '';
    if(reduce){ el.textContent = prefix + target.toLocaleString('pt-BR'); return; }
    var start = null, dur = 1600;
    function step(ts){
      if(!start) start = ts;
      var p = Math.min((ts-start)/dur, 1);
      var eased = 1 - Math.pow(1-p, 3);
      el.textContent = prefix + Math.round(target*eased).toLocaleString('pt-BR');
      if(p<1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* hero chart build + draw (só existe na página inicial) */
  if(document.getElementById('chartLine')){
  var data = [38,42,40,48,52,58,55,66,72,70,82,96]; // demonstrativo
  var W=560, H=150, pad=8;
  var max=Math.max.apply(null,data), min=Math.min.apply(null,data);
  var pts = data.map(function(v,i){
    var x = pad + i*((W-pad*2)/(data.length-1));
    var y = H-10 - ((v-min)/(max-min))*(H-28);
    return [x,y];
  });
  function smooth(points){
    var d = 'M'+points[0][0]+','+points[0][1];
    for(var i=0;i<points.length-1;i++){
      var p0=points[i], p1=points[i+1];
      var cx=(p0[0]+p1[0])/2;
      d += ' C'+cx+','+p0[1]+' '+cx+','+p1[1]+' '+p1[0]+','+p1[1];
    }
    return d;
  }
  var linePath = smooth(pts);
  var areaPath = linePath + ' L'+pts[pts.length-1][0]+','+H+' L'+pts[0][0]+','+H+' Z';
  var lineEl = document.getElementById('chartLine');
  var areaEl = document.getElementById('chartArea');
  var dotEl  = document.getElementById('chartDot');
  lineEl.setAttribute('d', linePath);
  areaEl.setAttribute('d', areaPath);
  dotEl.setAttribute('cx', pts[pts.length-1][0]);
  dotEl.setAttribute('cy', pts[pts.length-1][1]);

  var dashValEl = document.querySelector('.dash-value');
  var chartTimer = null;
  function resetChart(){
    if(reduce) return;
    clearTimeout(chartTimer);
    var len = lineEl.getTotalLength();
    lineEl.style.transition = 'none';
    lineEl.style.strokeDasharray = len;
    lineEl.style.strokeDashoffset = len;
    areaEl.style.transition = 'none';
    areaEl.style.opacity = 0;
    dotEl.setAttribute('opacity','0');
    if(dashValEl) dashValEl.textContent = (dashValEl.getAttribute('data-prefix')||'') + '0';
  }
  function drawChart(){
    if(dashValEl) animateCount(dashValEl);
    if(reduce){ areaEl.style.opacity=1; dotEl.setAttribute('opacity','1'); return; }
    var len = lineEl.getTotalLength();
    lineEl.style.transition = 'none';
    lineEl.style.strokeDasharray = len;
    lineEl.style.strokeDashoffset = len;
    areaEl.style.opacity = 0;
    lineEl.getBoundingClientRect(); // reflow
    lineEl.style.transition = 'stroke-dashoffset 1.7s ease';
    areaEl.style.transition = 'opacity 1.2s ease .5s';
    lineEl.style.strokeDashoffset = 0;
    areaEl.style.opacity = 1;
    chartTimer = setTimeout(function(){ dotEl.setAttribute('opacity','1'); dotEl.style.transition='opacity .4s ease'; }, 1500);
  }
  var dash = document.querySelector('.dash');
  if(dash){
    if(reduce){ drawChart(); }
    else {
      resetChart();
      var io2 = new IntersectionObserver(function(en){ en.forEach(function(e){ if(e.isIntersecting){ drawChart(); } else { resetChart(); } }); }, {threshold:.35});
      io2.observe(dash);
    }
  }

  }

  /* steps progress line */
  var steps = document.getElementById('steps');
  var prog = document.getElementById('stepsProg');
  if(steps && prog){
    var io3 = new IntersectionObserver(function(en){ en.forEach(function(e){ if(e.isIntersecting){ prog.style.width = reduce? '86%':'86%'; io3.disconnect(); } }); }, {threshold:.4});
    io3.observe(steps);
  }

  /* subtle parallax on hero mountains */
  if(!reduce){
    var hbg = document.querySelector('.hero-bg');
    window.addEventListener('scroll', function(){
      var y = window.scrollY;
      if(y < 1000 && hbg) hbg.style.transform = 'translateY('+(y*0.08)+'px)';
    }, {passive:true});
  }
})();
