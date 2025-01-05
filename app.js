// app.js

// Function to show an alert when the page loads
// window.onload = function() {
//     alert("Welcome to Visit Finland! Explore our food, attractions, and culture.");
// };

// // Smooth scrolling for navigation links (if you want to implement it later)
// document.querySelectorAll('nav a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();

//         const targetId = this.getAttribute('href');
//         const targetElement = document.querySelector(targetId);

//         if (targetElement) {
//             targetElement.scrollIntoView({
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

// // Example: Change the background color of the header on scroll
// window.addEventListener('scroll', () => {
//     const header = document.querySelector('header');
//     if (window.scrollY > 50) {
//         header.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Darker background on scroll
//     } else {
//         header.style.backgroundColor = 'transparent'; // Original background
//     }
// });

// // JavaScript for Navbar Scroll Effect
// window.addEventListener('scroll', function() {
//     const navbar = document.querySelector('.navbar');
//     if (window.scrollY > 50) { // Change 50 to the desired scroll position
//         navbar.classList.add('scrolled'); // Add class when scrolled down
//     } else {
//         navbar.classList.remove('scrolled'); // Remove class when at the top
//     }
// });