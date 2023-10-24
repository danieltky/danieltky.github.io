
// Refreshes form input fields whenever user clicks on the back button on the thank you page
window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('year').textContent = new Date().getFullYear();
});

// Validate email input
function validateEmailField(email, emailInputField, submitBtn) {
	var validRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if (!validRegex.test(email)) {
		if (emailInputField.classList.contains("is-valid")) {
			emailInputField.classList.remove("is-valid");
		}

		emailInputField.focus();
		submitBtn.disabled = true;
		emailInputField.classList.add("is-invalid");
		return false;
	} else {
		if (emailInputField.classList.contains("is-invalid")) {
			emailInputField.classList.remove("is-invalid");
		}

		emailInputField.focus();
		submitBtn.disabled = false;
		emailInputField.classList.add("is-valid");
		return true;
	}
}
