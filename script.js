function addToCart(product) {
    alert(`${product} has been added to your cart.`);
  }
  
  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !message) {
      alert("All fields must be filled out.");
      return false;
    }
  
    alert("Thank you for your message!");
    return true;
  }
  