// 1. Set the current user
const currentUser = 'Grace Hopper';

// 2. Create a welcome message using interpolation
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// 3. Shout the welcome message using .toUpperCase()
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// 4. Make a short greeting using the first letter of currentUser
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

