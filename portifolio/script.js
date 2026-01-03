 const projects = [
      {
        titulo: 'Projeto 1',
        descricao: 'Descrição curta do projeto 1. Tecnologias: HTML, CSS, JS.',
        imagem: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800&q=60&auto=format&fit=crop',
        link: '#'
      },
      
        
      
    ];

    
    const grid = document.getElementById('projects-grid');
    function renderProjects(list){
      grid.innerHTML = '';
      if(!list.length){grid.innerHTML = '<p style="color:var(--muted)">Nenhum projeto para exibir.</p>';return}
      list.forEach(p => {
        const el = document.createElement('article');
        el.className = 'project';
        el.innerHTML = `
          <img src="${p.imagem}" alt="${p.titulo}" />
          <div class="meta">
            <h4>${p.titulo}</h4>
            <p>${p.descricao}</p>
            <a href="${p.link}" target="_blank" rel="noopener">Ver projeto →</a>
          </div>
        `;
        grid.appendChild(el);
      })
    }
    renderProjects(projects);

    
    const hambtn = document.getElementById('hambtn');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    hambtn.addEventListener('click', ()=>{
      const open = hamburger.classList.toggle('open');
      hambtn.setAttribute('aria-expanded', open);
      mobileMenu.style.display = open ? 'flex' : 'none';
    });
    
    document.querySelectorAll('#mobile-menu [data-close]').forEach(a => a.addEventListener('click', ()=>{
      hamburger.classList.remove('open');
      hambtn.setAttribute('aria-expanded', false);
      mobileMenu.style.display = 'none';
    }))

    
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', function(e){
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth',block:'start'});
        }
      })
    })

    
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      let valid = true;
      
      document.getElementById('error-name').textContent='';
      document.getElementById('error-email').textContent='';
      document.getElementById('error-message').textContent='';
      feedback.innerHTML='';

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if(!name){document.getElementById('error-name').textContent='Por favor, informe seu nome.'; valid=false}
      if(!email){document.getElementById('error-email').textContent='Por favor, informe seu e-mail.'; valid=false}
      else if(!/^\S+@\S+\.\S+$/.test(email)){document.getElementById('error-email').textContent='E-mail inválido.'; valid=false}
      if(!message){document.getElementById('error-message').textContent='Por favor, escreva uma mensagem.'; valid=false}

      if(!valid) return;

    
      feedback.innerHTML = '<div class="success">Mensagem enviada com sucesso! Obrigado.</div>';
      form.reset();

      setTimeout(()=>{ feedback.innerHTML = ''; }, 4200);
    })

    
    const toTop = document.getElementById('to-top');
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 400){ toTop.style.display = 'block' } else { toTop.style.display = 'none' }
    })
    toTop.addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}))

    
    document.getElementById('download-cv').addEventListener('click', ()=>{
      
      alert("download feito!");
    })

    
    document.getElementById('year').textContent = new Date().getFullYear();

    
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('show') })
    },{threshold:0.12})
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

    
    window.addEventListener('keydown',(e)=>{ if(e.key === 'Escape'){ hamburger.classList.remove('open'); mobileMenu.style.display='none'; hambtn.setAttribute('aria-expanded', false)} })

    
    window.updateProjects = function(newArray){ renderProjects(newArray); }