window.addEventListener('load', () => {
  // 1. Optimized Scroll Logic with requestAnimationFrame
  let lastScrollY = window.scrollY;
  let ticking = false;

  const nav = document.querySelector('nav');
  const heroImage = document.querySelector('.hero-image img');

  const updateOnScroll = () => {
    // Sticky Nav
    if (nav) {
      if (lastScrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }

    // Parallax
    if (heroImage && lastScrollY < 1000) {
      heroImage.style.transform = `translateY(${lastScrollY * 0.15}px) translateZ(0)`;
    }

    ticking = false;
  };

  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(updateOnScroll);
      ticking = true;
    }
  }, { passive: true });

  // 2. Counter Animation (Fluid Ticker)
  let countersStarted = false;
  const animateCounters = () => {
    if (countersStarted) return;
    countersStarted = true;

    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 2500; // Smoother 2.5s duration
      const startTime = performance.now();
      
      const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing out quadratic
        const easedProgress = progress * (2 - progress);
        const currentCount = Math.floor(easedProgress * target);
        
        counter.innerText = currentCount;

        if (progress < 1) {
          window.requestAnimationFrame(update);
        } else {
          counter.innerText = target + (target > 10 ? '+' : '');
        }
      };
      window.requestAnimationFrame(update);
    });
  };

  // 4. Optimized Intersection Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        if (entry.target.classList.contains('numeros-grid')) {
          animateCounters();
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal, .numeros-grid').forEach(el => {
    observer.observe(el);
  });

  // 5. Smooth Scroll (Optimizado)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const offset = 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  }, { passive: true });
});


// Inicializar Lenis para Smooth Scroll (Efeito Manteiga / Inercia)
document.addEventListener('DOMContentLoaded', () => {
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Interceptar clicks nos links para manter o scroll suave
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                lenis.scrollTo(this.getAttribute('href'));
            });
        });
    }
});
        });
    }
});


// Intersection Observer for Fade-Up Animations
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-up').forEach(el => {
        observer.observe(el);
    });
});
