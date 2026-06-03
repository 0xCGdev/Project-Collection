// COUNTDOWN
    (function() {
    const target = new Date('2026-06-14T16:00:00+07:00').getTime();
    function pad(n) { return String(n).padStart(2,'0'); }
    function tick() {
        const now = Date.now();
        const diff = target - now;
        if (diff <= 0) {
        document.getElementById('cdGrid').innerHTML = '<p class="event-passed">✦ Pertunjukan Sedang / Telah Berlangsung ✦</p>';
        return;
        }
        const hari   = Math.floor(diff / 86400000);
        const jam    = Math.floor((diff % 86400000) / 3600000);
        const menit  = Math.floor((diff % 3600000) / 60000);
        const detik  = Math.floor((diff % 60000) / 1000);
        document.getElementById('cd-hari').textContent  = pad(hari);
        document.getElementById('cd-jam').textContent   = pad(jam);
        document.getElementById('cd-menit').textContent = pad(menit);
        document.getElementById('cd-detik').textContent = pad(detik);
        }
        tick();
        setInterval(tick, 1000);
    })();

// SCROLL REVEAL
    (function() {
        const els = document.querySelectorAll('.reveal');
        const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
        }, { threshold: 0.12 });
        els.forEach(el => obs.observe(el));
    })();

// HAMBURGER

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        if (navLinks.classList.contains('active')) {
            hamburger.innerHTML = '✕';
        } else {
            hamburger.innerHTML = '☰';
        }
    });
});