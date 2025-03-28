// Form Validation
document.addEventListener("DOMContentLoaded", function () {
    let contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;

            if (name === "" || email === "" || message === "") {
                alert("All fields are required!");
            } else {
                alert("Message sent successfully!");
                contactForm.reset();
            }
        });
    }
});

// FAQ Toggle
document.querySelectorAll(".faq-btn").forEach((button) => {
    button.addEventListener("click", function () {
        let answer = this.nextElementSibling;
        answer.style.display = (answer.style.display === "block") ? "none" : "block";
    });
});




//login.js
document.addEventListener("DOMContentLoaded", function () {
    console.log("Login script loaded!");

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // Get stored user data from localStorage
        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");

        if (username === storedUsername && password === storedPassword) {
            alert("Login successful! Redirecting...");
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});

function openSignup() {
    window.location.href = "signup.html";
}



//Signup.js
document.addEventListener("DOMContentLoaded", function () {
    console.log("Signup script loaded!");

    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const newUsername = document.getElementById("newUsername").value.trim();
        const newPassword = document.getElementById("newPassword").value.trim();

        if (newUsername && newPassword) {
            // Save new user credentials to localStorage
            localStorage.setItem("username", newUsername);
            localStorage.setItem("password", newPassword);
            
            alert("Account created successfully! Redirecting to login...");
            window.location.href = "login.html";
        } else {
            alert("Please enter a valid username and password.");
        }
    });
});



//dashboard

document.addEventListener("DOMContentLoaded", function () {
    // Load previous data from localStorage or set defaults
    let calories = parseInt(localStorage.getItem("calories")) || 0;
    let water = parseInt(localStorage.getItem("water")) || 0;
    let steps = parseInt(localStorage.getItem("steps")) || 0;

    // Get elements
    const calElem = document.getElementById("calories");
    const waterElem = document.getElementById("water");
    const stepsElem = document.getElementById("steps");

    // Update UI with saved values
    calElem.textContent = `${calories} kcal`;
    waterElem.textContent = `${water} ml`;
    stepsElem.textContent = `${steps}`;

    // Buttons functionality
    document.getElementById("addCal").addEventListener("click", function () {
        let calInput = parseInt(prompt("Enter calories consumed:"));
        if (!isNaN(calInput) && calInput > 0) {
            calories += calInput;
            localStorage.setItem("calories", calories);
            calElem.textContent = `${calories} kcal`;
            updateChart();
        }
    });

    document.getElementById("addWater").addEventListener("click", function () {
        let waterInput = parseInt(prompt("Enter water intake (ml):"));
        if (!isNaN(waterInput) && waterInput > 0) {
            water += waterInput;
            localStorage.setItem("water", water);
            waterElem.textContent = `${water} ml`;
            updateChart();
        }
    });

    document.getElementById("addSteps").addEventListener("click", function () {
        let stepsInput = parseInt(prompt("Enter steps taken:"));
        if (!isNaN(stepsInput) && stepsInput > 0) {
            steps += stepsInput;
            localStorage.setItem("steps", steps);
            stepsElem.textContent = `${steps}`;
            updateChart();
        }
    });

    // Chart.js Initialization
    const ctx = document.getElementById("progressChart").getContext("2d");
    let progressChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Calories", "Water (ml)", "Steps"],
            datasets: [{
                label: "Daily Progress",
                data: [calories, water, steps],
                backgroundColor: ["#ff6384", "#36a2eb", "#4caf50"],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // Update Chart Function
    function updateChart() {
        progressChart.data.datasets[0].data = [calories, water, steps];
        progressChart.update();
    }

    // Logout Button (Clears Data)
    document.getElementById("logoutBtn").addEventListener("click", function () {
        if (confirm("Are you sure you want to log out? Your data will be cleared.")) {
            localStorage.clear();
            window.location.href = "index.html";
        }
    });
});



//about
document.addEventListener("DOMContentLoaded", function () {
    console.log("About Us page loaded!");

    // Smooth scroll to next page button
    const nextBtn = document.querySelector(".btn-success");
    nextBtn.addEventListener("mouseenter", () => {
        nextBtn.style.transform = "scale(1.05)";
    });

    nextBtn.addEventListener("mouseleave", () => {
        nextBtn.style.transform = "scale(1)";
    });
});

//gallery
document.addEventListener("DOMContentLoaded", function () {
    console.log("Gallery page loaded successfully!");

    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "none";
        });
    });
});



///////contact 
document.addEventListener("DOMContentLoaded", function () {
    let contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("⚠️ Please fill out all fields before submitting!");
            } else {
                alert("✅ Message sent successfully! We will get back to you soon.");
                contactForm.reset();
            }
        });
    }
});


////faq
document.addEventListener("DOMContentLoaded", function () {
    const faqButtons = document.querySelectorAll(".faq-btn");

    faqButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const answer = this.nextElementSibling;

            // Toggle answer visibility
            answer.classList.toggle("active");

            // Change button text based on state
            if (answer.classList.contains("active")) {
                this.innerHTML = this.innerHTML.replace("➕", "➖"); // Collapse icon
            } else {
                this.innerHTML = this.innerHTML.replace("➖", "➕"); // Expand icon
            }
        });
    });
});

