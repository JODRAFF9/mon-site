/* -------------------------------
   NAVIGATION ACTIVE
-------------------------------- */
// Met automatiquement la classe 'active' sur le lien correspondant à la page
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll('.main-nav .nav-link').forEach(link => {
    if(link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

/* -------------------------------
   BOUTON SCROLL TOP
-------------------------------- */
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
    // Affiche le bouton si l'utilisateur descend de plus de 100px
    scrollBtn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? "block" : "none";

    // Appel pour révéler les sections
    revealSections();
};

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* -------------------------------
   ANIMATION DES SECTIONS AU SCROLL
-------------------------------- */
function revealSections() {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 150; // décalage avant que la section soit visible
        if(sectionTop < windowHeight - revealPoint) {
            section.classList.add('visible');
        }
    });
}

// Animation initiale pour les sections déjà visibles au chargement
document.addEventListener('DOMContentLoaded', revealSections);
