// registration-script.js

const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const collegeInput = document.getElementById('college');
const yearSelect = document.getElementById('year');
const sourceSelect = document.getElementById('source');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Clear all error messages
  clearErrors();
  
  // Validate all fields
  let isValid = true;

  // Validate Name
  if (nameInput.value.trim() === '') {
    showError('nameError', 'Name is required');
    isValid = false;
  }

  // Validate Email
  if (emailInput.value.trim() === '') {
    showError('emailError', 'Email is required');
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    showError('emailError', 'Enter a valid email');
    isValid = false;
  }

  // Validate Phone (exactly 10 digits)
  if (phoneInput.value.trim() === '') {
    showError('phoneError', 'Phone number is required');
    isValid = false;
  } else if (phoneInput.value.length !== 10 || isNaN(phoneInput.value)) {
    showError('phoneError', 'Phone must be exactly 10 digits');
    isValid = false;
  }

  // Validate College
  if (collegeInput.value.trim() === '') {
    showError('collegeError', 'College name is required');
    isValid = false;
  }

  // Validate Year
  if (yearSelect.value === '') {
    showError('yearError', 'Select year of study');
    isValid = false;
  }

  // Validate Source
  if (sourceSelect.value === '') {
    showError('sourceError', 'Select how you heard about us');
    isValid = false;
  }

  // If all valid, show success
  if (isValid) {
    successMsg.style.display = 'block';
    form.style.display = 'none';
  }
});

// Phone input - allow only numbers
phoneInput.addEventListener('input', function() {
  this.value = this.value.replace(/[^0-9]/g, '');
});

// Helper function to validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Show error message
function showError(elementId, message) {
  document.getElementById(elementId).textContent = message;
}

// Clear all error messages
function clearErrors() {
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('phoneError').textContent = '';
  document.getElementById('collegeError').textContent = '';
  document.getElementById('yearError').textContent = '';
  document.getElementById('sourceError').textContent = '';
}