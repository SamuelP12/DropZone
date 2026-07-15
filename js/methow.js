// Drop Zone — Methow topo backdrop: the map blurs + fades away as you scroll
// down the hero. Decorative; remove with its <link>/<script> + .dz-topo markup.

(function () {
    const topo = document.querySelector('.dz-topo');
    const topoBlur = document.querySelector('.dz-topo-blur');  // blurred bottom strip
    const heroEl = document.querySelector('.hero');
    if (!topo) return;

    const TOPO_BASE = 0.30;
    const topoFilter = (b) => `grayscale(1) sepia(0.42) brightness(1.02) contrast(1.02) blur(${b.toFixed(1)}px)`;

    let tick = false;
    function update() {
        const y = window.scrollY || window.pageYOffset || 0;
        const span = (heroEl ? heroEl.offsetHeight : 700) * 0.72;
        const t = Math.max(0, Math.min(1, y / span));
        const sb = t * t * 14;
        const op = (TOPO_BASE * (1 - t * 0.92)).toFixed(3);
        topo.style.filter = topoFilter(sb);
        topo.style.opacity = op;
        if (topoBlur) {
            topoBlur.style.filter = topoFilter(6 + sb);   // keep the bottom strip blurred
            topoBlur.style.opacity = op;
        }
    }
    function onScroll() {
        if (tick) return;
        tick = true;
        requestAnimationFrame(() => { update(); tick = false; });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    window.addEventListener('load', update);
    update();
})();
