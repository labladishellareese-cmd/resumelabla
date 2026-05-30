// Get modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalTargetImg");
const closeBtn = document.querySelector(".close-btn");

// Find all portfolio images that have the class 'viewable-img'
document.querySelectorAll('.viewable-img').forEach(image => {
    image.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src; // Puts the clicked image inside the popup frame
    });
});

// Close when hitting the 'X' icon
closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
});

// Close when clicking anywhere out in the dark area
modal.addEventListener('click', function(e) {
    if (e.target === modal || e.target === closeBtn) {
        modal.style.display = "none";
    }
});