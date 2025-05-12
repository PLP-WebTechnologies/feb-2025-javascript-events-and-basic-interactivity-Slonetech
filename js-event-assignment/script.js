// 1. Event Handling
document.getElementById("clickMe").addEventListener("click", () => {
  alert("Button clicked!");
});

document.getElementById("doubleClickMe").addEventListener("dblclick", () => {
  alert("Double click detected! Secret unlocked! 🎉");
});

document.getElementById("hoverBox").addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "salmon";
});
document.getElementById("hoverBox").addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "lightblue";
});

document.getElementById("keyInput").addEventListener("keypress", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// 2. Interactive Elements
const colorBtn = document.getElementById("colorChanger");
colorBtn.addEventListener("click", () => {
  colorBtn.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
});

// Simple Image Gallery
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let current = 0;
document.getElementById("nextImage").addEventListener("click", () => {
  current = (current + 1) % images.length;
  document.getElementById("galleryImage").src = images[current];
});

// Tabs
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const tab = btn.dataset.tab;
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    document.getElementById(tab).classList.add("active");
  });
});

// 3. Form Validation
const form = document.getElementById("signupForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!email.value.includes("@")) {
    message.textContent = "Please enter a valid email!";
    message.style.color = "red";
  } else if (password.value.length < 8) {
    message.textContent = "Password must be at least 8 characters.";
    message.style.color = "red";
  } else {
    message.textContent = "Success!";
    message.style.color = "green";
  }
});

// Real-time feedback
password.addEventListener("input", () => {
  if (password.value.length < 8) {
    password.style.borderColor = "red";
  } else {
    password.style.borderColor = "green";
  }
});
