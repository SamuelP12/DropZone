// Drop Zone — interactions

(function () {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ----- Smooth scrolling via Lenis -----
    let lenis = null;
    if (!reduceMotion && window.Lenis) {
        lenis = new Lenis({
            duration: 0.85,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1.05,
            touchMultiplier: 1.5,
            lerp: 0.12,
        });

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        document.querySelectorAll('a[href^="#"]').forEach((a) => {
            a.addEventListener('click', (e) => {
                const id = a.getAttribute('href');
                if (id === '#' || id.length < 2) return;
                const target = document.querySelector(id);
                if (!target) return;
                e.preventDefault();
                lenis.scrollTo(target, { offset: -64, duration: 1.4 });
            });
        });
    }

    // ----- Nav state on scroll -----
    const nav = document.getElementById('nav');
    const onScroll = () => {
        const y = window.scrollY || document.documentElement.scrollTop;
        if (y > 24) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // ----- Reveal on scroll -----
    if ('IntersectionObserver' in window && !reduceMotion) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
        document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    } else {
        document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
    }

    // ----- Footer year -----
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ----- Payment links placeholder behaviour -----
    // Until real Stripe / Square URLs are wired up, intercept and show a friendly message.
    const linkMap = {
        'day-pass': null,
        'individual': null,
        'couple': null,
        'conference': null,
    };
    document.querySelectorAll('a[data-link]').forEach((a) => {
        a.addEventListener('click', (e) => {
            const key = a.dataset.link;
            const url = linkMap[key];
            if (!url) {
                e.preventDefault();
                a.dataset.label = a.dataset.label || a.textContent;
                a.textContent = 'Payment link coming soon';
                setTimeout(() => { a.textContent = a.dataset.label; }, 1800);
                return;
            }
            a.setAttribute('href', url);
        });
    });
})();
