document.addEventListener("DOMContentLoaded", () => {
    showSection('about'); // Show About section by default
});

function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'block'; // Keep all sections visible
    });
    
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.opacity = '0'; // Start fade-out effect
        setTimeout(() => {
            section.style.display = (section.id === sectionId) ? 'block' : 'none'; // Hide others
            section.style.opacity = '1'; // Fade in the selected section
        }, 300);
    });
}
