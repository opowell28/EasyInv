// Select the button by class name
var bottleButton = document.querySelector('.decrement-bottle');
var caseButton = document.querySelector('.decrement-case');

// Set up variables to hold inventory counts
var bottleCount = 12;
var caseCount = bottleCount / 12;

// Add event listener to the bottle button
bottleButton.addEventListener('click', function() {
    bottleCount = bottleCount - 1;
    // Update bottle count
    document.getElementById('alchemist-bottle-count').textContent = bottleCount + ' bottle';
    console.log('Bottle button clicked');
});

//add event listener to the case button
caseButton.addEventListener('click', function() {
    caseCount = caseCount - 1;
    // Update case count
    document.getElementById('alchemist-case-count').textContent = caseCount + ' case';
    console.log('Case button clicked');
});

// Select location and display inventory counts
document.getElementById('alchemist-bottle-count').textContent = bottleCount + ' bottle';
document.getElementById('alchemist-case-count').textContent = caseCount + ' case';
