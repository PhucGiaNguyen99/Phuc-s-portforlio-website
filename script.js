document.addEventListener("DOMContentLoaded", () => {
    showSection('about'); // Show About section by default

    const contactForm = document.querySelector(".contact-form form");
    if (contactForm) {
        contactForm.addEventListener("submit", async function (event) {
            event.preventDefault(); // Prevent default form submission

            const formData = {
                name: contactForm.name.value,
                email: contactForm.email.value,
                message: contactForm.message.value
            };

            try {
                const response = await fetch("http://localhost:5000/send-email", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                });

                const data = await response.json();
                if (data.success) {
                    alert("Message sent successfully!");
                    contactForm.reset();
                } else {
                    alert("Failed to send message. Try again later.");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Something went wrong. Please try again later.");
            }
        });
    }
});

function showSection(sectionId) {
    document.querySelectorAll(".content-section").forEach(section => {
        section.style.display = "block"; // Keep all sections visible
    });
    
    document.querySelectorAll(".content-section").forEach(section => {
        section.style.opacity = "0"; // Start fade-out effect
        setTimeout(() => {
            section.style.display = (section.id === sectionId) ? "block" : "none"; // Hide others
            section.style.opacity = "1"; // Fade in the selected section
        }, 300);
    });
}
