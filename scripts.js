// Select the button by class name
var bottleButton = document.querySelector('.decrement-bottle');
var caseButton = document.querySelector('.decrement-case');

// Set up variables to hold inventory counts
var bottleCount = 12;
var caseCount = bottleCount / 12;

// Select location and display inventory counts
document.getElementById('alchemist-bottle-count').textContent = bottleCount + ' bottle';
document.getElementById('alchemist-case-count').textContent = caseCount + ' case';

// Add event listener to the bottle button
bottleButton.addEventListener('click', function() {
    console.log('Bottle button clicked');
});

//add event listener to the case button
caseButton.addEventListener('click', function() {
    console.log('Case button clicked');
})
