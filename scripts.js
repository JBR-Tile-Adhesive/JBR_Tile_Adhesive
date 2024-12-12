function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active'); // Toggle the "active" class on the navbar to show/hide the menu
    }

// Open the modal
function openModal(productId) {
    var modal = document.getElementById(productId + 'Modal');
    modal.style.display = "block";
}

// Close the modal
function closeModal(productId) {
    var modal = document.getElementById(productId + 'Modal');
    modal.style.display = "none";
}
