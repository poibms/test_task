export default function passwordValidation(password, patern) {
	if (password.length > 5 && patern.test(password)) return true;
}
