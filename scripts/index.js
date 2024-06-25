function submitButtonClicked() {
    var entryField = document.querySelector('.textInput');
    var emptyField = document.querySelector('.empty-field');
    var infoAlert = document.getElementById('info-alert');
    
    var text = entryField.value.trim();
    
    if (text === '') {
        updateAlert('alert-danger', '<i class="fas fa-exclamation-triangle icon error-alert-icon"></i> Please enter some text.');
        emptyField.value = '';
        return;
    }
    
    var trimmedText = text.replace(/\s/g, '');
    
    emptyField.value = trimmedText;
    
    updateAlert('alert-success', '<i class="fas fa-check-circle icon success-alert-icon"></i> Text trimmed successfully!');
}

function updateAlert(alertClass, message) {
    var infoAlert = document.getElementById('info-alert');
    
    infoAlert.classList.remove('alert-info', 'alert-success', 'alert-danger');
    infoAlert.classList.add(alertClass);
    infoAlert.innerHTML = message;
}

const emptyField = document.querySelector('.empty-field');

// Event listener to handle clicks on the "empty-field" textarea
emptyField.addEventListener('click', function() {
    if (this.value.trim() !== '') {
        this.select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges();

        updateAlert('alert-copied-to-clipboard', '<i class="fas fa-check-circle icon success-alert-icon"></i> Text copied to clipboard.');
    } else {
        updateAlert('alert-danger', '<i class="fas fa-exclamation-triangle icon error-alert-icon"></i> No text to copy.');
    }
});

function updateAlert(alertClass, message) {
    var infoAlert = document.getElementById('info-alert');
    
    infoAlert.classList.remove('alert-info', 'alert-success', 'alert-danger', 'alert-copied-to-clipboard');
    
    infoAlert.classList.add(alertClass);
    
    infoAlert.innerHTML = message;
}


// Dark Mode cookies
// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEquals = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEquals) === 0) return c.substring(nameEquals.length, c.length);
    }
    return null;
}

document.addEventListener('DOMContentLoaded', function() {
    const darkModeEnabled = getCookie('darkModeEnabled');
    const toggleDarkModeBtn = document.getElementById('toggleDarkModeBtn');

    if (darkModeEnabled === 'true') {
        enableDarkMode();
        toggleDarkModeBtn.innerText = 'Light Mode';
    }
});


function toggleDarkMode() {
    const body = document.body;
    const darkModeEnabled = getCookie('darkModeEnabled') === 'true';
    const toggleDarkModeBtn = document.getElementById('toggleDarkModeBtn');

    if (darkModeEnabled) {
        body.classList.remove('dark-mode');
        toggleDarkModeBtn.innerText = 'Dark Mode';
        setCookie('darkModeEnabled', 'false', 30);
    } else {
        enableDarkMode();
        toggleDarkModeBtn.innerText = 'Light Mode';
        setCookie('darkModeEnabled', 'true', 30);
    }
}


function enableDarkMode() {
    const body = document.body;
    body.classList.add('dark-mode');
}


// Bootstrap tooltips stuff
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
