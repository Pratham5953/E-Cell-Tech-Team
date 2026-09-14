// script.js

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', function() {
  navMenu.classList.toggle('active');
});

// Close menu when link clicked
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function() {
    navMenu.classList.remove('active');
  });
});

// Schedule Tab Switching
const tabBtns = document.querySelectorAll('.tab-btn');
const scheduleContents = document.querySelectorAll('.schedule-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const tabName = this.getAttribute('data-tab');

    // Remove active class from all tabs and contents
    tabBtns.forEach(b => b.classList.remove('active'));
    scheduleContents.forEach(content => content.style.display = 'none');

    // Add active class to clicked tab and show content
    this.classList.add('active');
    document.getElementById(tabName).style.display = 'block';
  });
});