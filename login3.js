const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.signUp-link');
const signInLink = document.querySelector('.signIn-link');

// Ensure all elements exist before adding listeners
if (wrapper && signUpLink && signInLink) {
    signUpLink.addEventListener('click', () => {
        wrapper.classList.add('animate-signIn');
        wrapper.classList.remove('animate-signUp');
    });

    signInLink.addEventListener('click', () => {
        wrapper.classList.add('animate-signUp');
        wrapper.classList.remove('animate-signIn');
    });
} else {
    console.warn('One or more elements not found. Check class names.');
}
