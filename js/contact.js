const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  const phonePattern = /^[0-9]{10}$/;

  if (name.trim() === '' || email.trim() === '' || !phonePattern.test(phone) || subject.trim() === '' || message.trim() === '') {
    alert('Please fill in all required fields and make sure your phone number is in the correct format.');
  } else {
    successMessage.classList.remove('hidden');
    form.reset();
  }
});
