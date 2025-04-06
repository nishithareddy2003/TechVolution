document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var isValid = true;

    // Name validation
    var name = document.getElementById('name').value;
    if (name.trim() === '') {
        isValid = false;
        document.getElementById('nameError').innerText = 'Name is required';
    } else {
        document.getElementById('nameError').innerText = '';
    }

    // Date of Birth validation
    var dob = document.getElementById('dob').value;
    if (dob.trim() === '') {
        isValid = false;
        document.getElementById('dobError').innerText = 'Date of Birth is required';
    } else {
        document.getElementById('dobError').innerText = '';
    }

    // Gender validation
    var gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        isValid = false;
        document.getElementById('genderError').innerText = 'Gender is required';
    } else {
        document.getElementById('genderError').innerText = '';
    }

    // Email validation
    var email = document.getElementById('email').value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').innerText = 'Invalid email format';
    } else {
        document.getElementById('emailError').innerText = '';
    }

    // Phone validation
    var phone = document.getElementById('phone').value;
    var phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        isValid = false;
        document.getElementById('phoneError').innerText = 'Invalid phone number format';
    } else {
        document.getElementById('phoneError').innerText = '';
    }

    // State validation
    var state = document.getElementById('state').value;
    if (state.trim() === '') {
        isValid = false;
        document.getElementById('stateError').innerText = 'State is required';
    } else {
        document.getElementById('stateError').innerText = '';
    }

    // Zip Code validation
    var zip = document.getElementById('zip').value;
    var zipPattern = /^[0-9]{5}$/;
    if (!zipPattern.test(zip)) {
        isValid = false;
        document.getElementById('zipError').innerText = 'Invalid zip code format';
    } else {
        document.getElementById('zipError').innerText = '';
    }

    // T-shirt size validation
    var tshirt = document.getElementById('tshirt').value;
    if (tshirt.trim() === '') {
        isValid = false;
        document.getElementById('tshirtError').innerText = 'T-shirt size is required';
    } else {
        document.getElementById('tshirtError').innerText = '';
    }

    // If all validations pass
    if (isValid) {
        document.getElementById('confirmation').style.display = 'block';
        // Optionally, you can use a toast message
        // bs4toast.message('Registration successful!', 'success');

        // Here you can also handle form submission to the server if needed
        console.log('Form submitted successfully');
    }
});