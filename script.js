function handleLogin() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  
  if (username === "" || password === "") {
    alert("Please enter username and password");
    return;
  }

  // Hide login and show success
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('success-screen').classList.remove('hidden');
}

function goToRegister() {
  // Change background to light green
  document.getElementById('main-container').classList.add('success-bg');
  
  // Hide success and show Withdraw
  document.getElementById('success-screen').classList.add('hidden');
  document.getElementById('Withdraw-form').classList.remove('hidden');
  
  // Update header text
  document.getElementById('header-text').textContent = "Create New Account";
}

function handleRegister() {
  alert("Registration Successful! 🎉\n\nআপনার অ্যাকাউন্ট তৈরি হয়েছে।");
  // এখানে চাইলে ড্যাশবোর্ডে নিয়ে যেতে পারো
}

// Initial setup
document.getElementById('login-form').classList.remove('hidden');
