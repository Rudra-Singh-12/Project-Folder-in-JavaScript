// Arrays to hold the sequence of game-generated colors and the sequence clicked by the user
let gameSeq = [];
let userSeq = [];

// Possible button colors
let btns = ["yellow", "red", "green", "purple"];

// Game state flags
let start = false; // Indicates whether the game has started
let level = 0; // Current level

// Reference to the level display element
let h2 = document.querySelector("h2");

// Start the game on keypress (only if not already started)
document.addEventListener('keypress', function () {
    if (start == false) {
        console.log("Game is started");
        start = true;
        levelUp(); // Begin the game with level 1
    }
});

// Function to move to the next level
function levelUp() {
    userSeq = []; // Reset user sequence for the new level
    level++; // Increase level count
    h2.innerText = `Level ${level}`; // Update the heading to show current level

    // Choose a random color button to flash
    let randomIndex = Math.floor(Math.random() * 4); // should be 4 to include all 4 buttons
    let randColor = btns[randomIndex];
    let btn = document.querySelector(`.${randColor}`);
    
    // Add the chosen color to the game's sequence
    gameSeq.push(randColor);
    console.log(gameSeq);

    // Flash the chosen button
    btnFlash(btn);
}

// Flash effect for the game's button (for system-generated sequence)
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

// Flash effect for the button when clicked by the user
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}

// Check the user's input against the game's sequence
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        // If user completed the current level correctly
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 500); // Proceed to next level after a short delay
        }
    } else {
        // If the user made a mistake
        h2.innerHTML = `Game Over! Your score was <b>${level - 1}</b> <br> Press any key to restart`;
        document.querySelector("body").style.background="red";
        setTimeout(function(){
            document.querySelector("body").style.background="white";
        },150);
        reset(); // Reset the game state
    }
}

// Handle user's button press
function btnPress() {
    let btn = this;
    userFlash(btn); // Show flash effect for user click

    let userColor = btn.getAttribute("id"); // Get the ID (color) of the clicked button
    userSeq.push(userColor); // Add to user's sequence

    checkAns(userSeq.length - 1); // Check the user's answer
}

// Attach click listeners to all buttons
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

// Reset the game state variables
function reset() {
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
