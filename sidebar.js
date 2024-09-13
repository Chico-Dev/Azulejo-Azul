function showSidebar() {
  const sidebard = document.querySelector(".sidebar");
  sidebard.style.display = "flex";
}
function hideSidebar() {
  const sidebard = document.querySelector(".sidebar");
  sidebard.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {
    // This ensures the script runs after the DOM is fully loaded
    function initializeExpandableBoxes() {
      // Select all buttons with the class 'expand-btn'
      const buttons = document.querySelectorAll('.expand-btn');
  
      buttons.forEach(button => {
        button.addEventListener('click', function() {
          const box = this.parentElement; // Get the parent box of the clicked button
          box.classList.toggle('expanded'); // Toggle the 'expanded' class on the box
  
          // Change button text depending on whether the box is expanded
          if (box.classList.contains('expanded')) {
            this.textContent = "Mostrar menos";
          } else {
            this.textContent = "Mostrar mais";
          }
        });
      });
    }
  
    // Call the function to initialize expandable boxes
    initializeExpandableBoxes();
  });