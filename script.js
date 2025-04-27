// Scroll Animasi
document.addEventListener('DOMContentLoaded', () => {
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.about-text, .about img, .skill-item');
        elements.forEach(el => {
            const elPosition = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elPosition < screenPosition) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    // Set awal opacity 0 untuk elemen yang akan dianimasi
    const animatedElements = document.querySelectorAll('.about-text, .about img, .skill-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
    });

    // Trigger animasi saat scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Jalankan sekali saat load
});

// Smooth scroll untuk navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

    // Animasi teks berganti-ganti
    const textRotateElements = document.querySelectorAll('.text-rotate');
    textRotateElements.forEach(el => {
        const words = JSON.parse(el.getAttribute('data-rotate'));
        let current = 0;
        
        setInterval(() => {
            el.style.opacity = 0;
            setTimeout(() => {
                current = (current + 1) % words.length;
                el.textContent = words[current];
                el.style.opacity = 1;
            }, 500);
        }, 2000);
    });