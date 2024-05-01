// authService.js
const authService = {
    async login(email, password) {
      // Here you would make an API call to your backend server to authenticate the user
      // For simplicity, let's assume it always succeeds
      // Replace this with your actual authentication logic
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === 'example@example.com' && password === 'password') {
            resolve(); // Login successful
          } else {
            reject(new Error('Invalid email or password')); // Login failed
          }
        }, 1000); // Simulating a delay for API call
      });
    },
  
    async logout() {
      // Here you would make an API call to your backend server to log out the user
      // For simplicity, let's assume it always succeeds
      // Replace this with your actual logout logic
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(); // Logout successful
        }, 500); // Simulating a delay for API call
      });
    }
  };
  
  export default authService;
  