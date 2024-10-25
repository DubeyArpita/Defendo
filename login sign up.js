document.getElementById('signupBtn').onclick = function() {
    showUserTypeSelection();
};

document.getElementById('loginBtn').onclick = function() {
    showLogin();
};

document.querySelector('.close-btn').onclick = function() {
    closePopup();
};

// Show user type selection
function showUserTypeSelection() {
    document.getElementById('popup').style.display = 'flex';
    document.getElementById('formContainer').style.display = 'block'; // Show user type selection
    document.getElementById('dynamicFormContainer').style.display = 'none'; // Hide dynamic form
}

// Show login form
function showLogin() {
    document.getElementById('popup').style.display = 'flex';
    document.getElementById('formContainer').style.display = 'none'; // Hide user type selection
    document.getElementById('loginContainer').style.display = 'block'; // Show login form
}

// Show forgot password section
document.getElementById('forgotPasswordLink').onclick = function() {
    document.getElementById('forgotPasswordContainer').style.display = 'block';
    document.getElementById('loginContainer').style.display = 'none';
};

// Go back to login
document.getElementById('backToLoginLink').onclick = function() {
    document.getElementById('forgotPasswordContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
};

// Switch from sign up to login
document.getElementById('switchToLoginFromSignup').onclick = function() {
    showLogin();
};

// Function to display the appropriate form based on user type
document.querySelectorAll('.option').forEach(option => {
    option.onclick = function() {
        displayForm(this.getAttribute('data-type'));
    };
});

// Function to display the sign-up form based on user type
function displayForm(userType) {
    let formHTML = '';

    switch (userType) {
        case 'learner':
            formHTML = `
                <h3>Learner Information</h3>
                <input type="text" placeholder="Name" required>
                <input type="text" placeholder="Address" required>
                <input type="text" placeholder="Gender" required>
                <input type="text" placeholder="Contact Information" required>
                <input type="email" placeholder="Email ID" required>
                <input type="password" placeholder="Create Password" required>
                <button class="submit">Submit</button>
            `;
            break;
        case 'institution':
            formHTML = `
                <h3>Institution Information</h3>
                <input type="text" placeholder="Institute Name" required>
                <input type="text" placeholder="Address" required>
                <input type="text" placeholder="Contact Information" required>
                <input type="password" placeholder="Create Password" required>
                <button class="submit">Submit</button>
            `;
            break;
        case 'selfDefence':
            formHTML = `
                <h3>Self Defence Centre Information</h3>
                <input type="text" placeholder="Centre Name" required>
                <input type="text" placeholder="Address" required>
                <input type="number" placeholder="Number of Trainers" required>
                <input type="text" placeholder="Contact Details" required>
                <input type="password" placeholder="Create Password" required>
                <button class="submit">Submit</button>
            `;
            break;
    }

    document.getElementById('dynamicFormContainer').innerHTML = formHTML; // Set the form HTML
    document.getElementById('dynamicFormContainer').style.display = 'block'; // Show the dynamic form
    document.getElementById('formContainer').style.display = 'none'; // Hide user type selection
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('dynamicFormContainer').innerHTML = ''; // Clear form on close
    document.getElementById('loginContainer').style.display = 'none'; // Clear login form
    document.getElementById('forgotPasswordContainer').style.display = 'none'; // Clear forgot password form
}

// Close the popup if the user clicks outside of it
window.onclick = function(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        closePopup();
    }
};
