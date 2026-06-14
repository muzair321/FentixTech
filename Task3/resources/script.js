function toggleMenu() {
    document.getElementById("dropdownMenu").classList.toggle("open");
}

// Close when clicking outside
document.addEventListener("click", function(e) {
    const dropdown = document.querySelector(".dropdown");
    if (!dropdown.contains(e.target)) {
        document.getElementById("dropdownMenu").classList.remove("open");
    }
});
jswindow.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const offset = window.scrollY;
    hero.style.backgroundPosition = `center calc(-300px + ${offset * 0.5}px)`;
});