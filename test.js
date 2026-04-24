function greetUser() {
  // Attempting to access 'username' before it is declared
  console.log("Hello, " + username); 
  
  let username = "Alex";
}

greetUser();
