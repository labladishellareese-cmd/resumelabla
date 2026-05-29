document.addEventListener('DOMContentLoaded', () => {
    console.log("Dishella Reese Labla Portfolio loaded.");

    // Simple interaction logic to dynamically alter block visual focus
    const cards = document.querySelectorAll('.skill-card, .cert-item');
    
    cards.forEach(card => {
        card.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
        
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.03)';
            card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)'; // Fixed to camelCase
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = 'none'; // Fixed to camelCase
        });
    });
});