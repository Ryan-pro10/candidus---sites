(function(){
  var form = document.getElementById('leadForm');
  if(!form) return;
  var done = document.getElementById('formDone');
  // >>> TROQUE pelo número do WhatsApp da Candidus (só dígitos, com DDI+DDD). Ex.: 5544999999999
  var WHATSAPP = '5544000000000';
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var ok = true;
    ['f-nome','f-email','f-fat'].forEach(function(id){
      var el = document.getElementById(id);
      var wrap = el.closest('.field');
      var bad = !el.value || (el.type==='email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value));
      wrap.classList.toggle('invalid', bad);
      if(bad) ok = false;
    });
    if(!ok){ return; }
    var g = function(id){ return (document.getElementById(id).value||'').trim(); };
    var texto =
      'Olá! Quero solicitar um diagnóstico gratuito com a Candidus.\n\n' +
      '*Nome:* ' + g('f-nome') + '\n' +
      '*E-mail:* ' + g('f-email') + '\n' +
      '*Empresa:* ' + (g('f-empresa') || '—') + '\n' +
      '*Faturamento mensal:* ' + g('f-fat') + '\n' +
      '*Como podemos ajudar:* ' + (g('f-msg') || '—');
    window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(texto), '_blank', 'noopener');
    form.hidden = true;
    done.hidden = false;
    done.scrollIntoView({behavior:'smooth', block:'center'});
  });
  form.addEventListener('input', function(e){
    var wrap = e.target.closest('.field');
    if(wrap) wrap.classList.remove('invalid');
  });
})();
