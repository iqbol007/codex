const email = document.querySelector('.email');

const password = document.querySelector('.password');

const button = document.querySelector('.login-btn');

function handleSubmit(e) {
	e.preventDefault();
	console.log(email, password);
}

button.addEventListener('click', handleSubmit);
