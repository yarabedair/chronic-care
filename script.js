document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  lucide.createIcons();

  // Elements
  const signInForm = document.getElementById('signin-form-box');
  const signUpForm = document.getElementById('signup-form-box');
  const signInHero = document.getElementById('hero-signin-content');
  const signUpHero = document.getElementById('hero-signup-content');
  
  const toSignUpBtn = document.getElementById('to-signup-btn');
  const toSignInBtn = document.getElementById('to-signin-btn');

  // Switch to Sign Up
  toSignUpBtn.addEventListener('click', () => {
    signInForm.classList.add('hidden');
    signUpForm.classList.remove('hidden');
    signInHero.classList.add('hidden');
    signUpHero.classList.remove('hidden');
  });

  // Switch to Sign In
  toSignInBtn.addEventListener('click', () => {
    signUpForm.classList.add('hidden');
    signInForm.classList.remove('hidden');
    signUpHero.classList.add('hidden');
    signInHero.classList.remove('hidden');
  });

  // Toggle Password Visibility for all password fields
  const togglePasswordBtns = document.querySelectorAll('.toggle-password-btn');
  
  togglePasswordBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);
      
      if (input.type === 'password') {
        input.type = 'text';
      } else {
        input.type = 'password';
      }
    });
  });
});