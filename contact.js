
        document.getElementById("contactForm").addEventListener("submit",
        function(event) {
            event.preventDefault();

            document.getElementById("formMessage").textContent =
            "Thank you! Your form is ready, but message delivery needs to be connected.";

            this.reset();
        });

