document
    .getElementById("sendEmailLink")
    .addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default anchor behavior

        // Gmail email details (change to your company email)
        const recipientEmail = "artecoenterprises@gmail.com";
        const subject = "Subject of the email";
        const body = "Hello, I am interested in your services.";

        // Construct the mailto URL
        const mailtoURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
            recipientEmail
        )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(mailtoURL, "_blank");
    });

document
    .getElementById("sendEmailLink2")
    .addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default anchor behavior

        // Gmail email details (change to your company email)
        const recipientEmail = "artecoenterprises@gmail.com";
        const subject = "Subject of the email";
        const body = "Hello, I am interested in your services.";

        // Construct the mailto URL
        const mailtoURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
            recipientEmail
        )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(mailtoURL, "_blank");
    });
document
    .getElementById("sendEmailLink3")
    .addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default anchor behavior

        // Gmail email details (change to your company email)
        const recipientEmail = "artecoenterprises@gmail.com";
        const subject = "Subject of the email";
        const body = "Hello, I am interested in your services.";

        // Construct the mailto URL
        const mailtoURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
            recipientEmail
        )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(mailtoURL, "_blank");
    });

document.addEventListener("DOMContentLoaded", function () {
    const cookiePopup = document.getElementById("cookie-popup");
    const acceptButton = document.getElementById("accept-cookies");

    // Check if user already accepted cookies
    if (localStorage.getItem("cookiesAccepted")) {
        cookiePopup.style.display = "none";
    }

    // Accept button event listener
    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        cookiePopup.style.display = "none";

        // Send a request to the backend to create the user cookie
        fetch("/set-user-cookie", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ action: "acceptCookies" }), // sending a request payload
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Cookie data sent successfully:", data);
            })
            .catch((error) => {
                console.error("Error in sending user data:", error);
            });
    });
});

document
    .querySelector(".help-link")
    .addEventListener("click", function (event) {
        event.preventDefault(); // Prevents jumping to top
        let toast = this.nextElementSibling;

        if (toast.style.display === "block") {
            toast.style.opacity = "0";
            setTimeout(() => {
                toast.style.display = "none";
            }, 300);
        } else {
            toast.style.display = "block";
            setTimeout(() => {
                toast.style.opacity = "1";
            }, 10);
        }
    });

// Function to handle elements entering the viewport
const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Add the 'in-view' class to trigger the animation
            entry.target.classList.add("in-view");

            // Optionally, you can remove the observer once the element has entered the viewport
            observer.unobserve(entry.target);
        }
    });
};

// Set up the observer
const observerOptions = {
    threshold: 0.1, // Trigger when at least 10% of the element is visible
};

const observer = new IntersectionObserver(handleIntersection, observerOptions);

// Select the elements you want to observe
const elementsToAnimate = document.querySelectorAll(
    ".hero-banner, .feature-banner img, .section-title, .section-subtitle, .feature-list, .leader, .service-card, .contact"
);

// Start observing each element
elementsToAnimate.forEach((element) => {
    observer.observe(element);
});
