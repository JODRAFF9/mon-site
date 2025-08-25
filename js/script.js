// Récupère tous les liens du menu
const navLinks = document.querySelectorAll("nav ul li a");

// Parcours les liens pour activer celui correspondant à la page
navLinks.forEach(link => {
    if(link.href === window.location.href){
        link.classList.add("active");
    }
});

const scrollBtn = document.getElementById("scrollTopBtn");

// Affiche le bouton après avoir scrollé 200px
window.onscroll = function() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

// Remonte en haut au clic
scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});
