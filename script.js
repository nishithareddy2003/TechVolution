// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Select the registration form
  const form = document.getElementById("registrationForm");

  // Add event listener for form submission
  form.addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Perform validation
    if (validateForm()) {
      // If validation passes, submit the form
      form.submit();
    }
  });

  // Function to validate the form
  function validateForm() {
    // Get form inputs
    const name = document.getElementById("name");
    const dob = document.getElementById("dob");
    const gender = document.querySelector('input[name="gender"]:checked');
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const street = document.getElementById("street");

    // Add other fields here

    // Flag to track if validation passes
    let isValid = true;

    // Validate name field
    if (name.value.trim() === "") {
      name.classList.add("is-invalid");
      isValid = false;
    } else {
      name.classList.remove("is-invalid");
    }
    // Validate other fields similarly
    // Validate date of birth
    if (dob.value.trim() === "") {
      dob.classList.add("is-invalid");
      isValid = false;
    } else {
      dob.classList.remove("is-invalid");
    }

    // Validate gender
    if (!gender) {
      isValid = false;
    }

    // Validate email field
    if (email.value.trim() === "" || !isValidEmail(email.value.trim())) {
      email.classList.add("is-invalid");
      isValid = false;
    } else {
      email.classList.remove("is-invalid");
    }

    // Validate phone number
    if (phone.value.trim() === "" || !isValidPhoneNumber(phone.value.trim())) {
      phone.classList.add("is-invalid");
      isValid = false;
    } else {
      phone.classList.remove("is-invalid");
    }

    // Validate street address
    if (street.value.trim() === "") {
      street.classList.add("is-invalid");
      isValid = false;
    } else {
        street.classList.remove("is-invalid");
    }
    
    // Add validation for other fields similarly
    
    return isValid;
  }
    
  // Function to validate email format
  function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
    
  // Function to validate phone number format
  function isValidPhoneNumber(phone) {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  }  


    return isValid;
  }
});


