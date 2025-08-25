// Récupère tous les liens du menu
const navLinks = document.querySelectorAll("nav ul li a");

// Parcours les liens pour activer celui correspondant à la page
navLinks.forEach(link => {
    if(link.href === window.location.href){
        link.classList.add("active");
    }
});

