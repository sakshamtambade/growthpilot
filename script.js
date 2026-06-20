emailjs.init("xphphu_iMrBvzxRud");

document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    if (form) {

        form.addEventListener("submit", function(e) {

            e.preventDefault();

            emailjs.sendForm(
                    "service_zv9gziw",
                    "template_ulii5rp",
                    this
                )
                .then(function() {

                    successMessage.innerHTML =
                        "✅ Thank you for contacting GrowthPilot! Our team will get back to you shortly.";
                    successMessage.style.color = "#06b6d4";

                    form.reset();
                    setTimeout(() => {
                        successMessage.innerHTML = "";
                    }, 5000);

                })
                .catch(function(error) {

                    successMessage.innerHTML =
                        "❌ Failed to send message.";

                    successMessage.style.color = "red";

                    console.error(error);
                });

        });

    }

});
// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});