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

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');
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
