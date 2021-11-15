const numbers = /[A-Z\d]/g;
export default function passwordValidation(password) {
	if (password.length > 5 && numbers.test(password)) return true;
}
