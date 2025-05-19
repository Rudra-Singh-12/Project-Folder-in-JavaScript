# 🎮 Simon Says Game

A simple memory-based color sequence game built using **HTML**, **CSS**, and **JavaScript**.  
The goal is to repeat the sequence of colors shown by the game. With each level, a new color is added to the sequence.

---

## 🧠 How It Works

- Press any key to start the game.
- A color button will flash. Click the buttons in the same order as shown.
- If you successfully repeat the sequence, you move to the next level.
- The sequence gets longer with each level.
- If you make a mistake, the game ends and displays your score.

---

## 🚀 Technologies Used

- HTML
- CSS
- JavaScript (Vanilla)

---

## 📁 Project Structure

simon-says-game/
│
├── index.html # Main HTML file
├── style.css # Styling for the buttons and layout
├── script.js # Game logic in JavaScript
└── README.md # Project documentation

---

## 📝 Files Explained

### `index.html`
- Contains the layout of the game.
- Includes the title (`<h2>`), color buttons, and links to the CSS and JavaScript files.

### `style.css`
- Styles the game buttons, layout, colors, and flash effects (`.flash` and `.userFlash`).
- Ensures the game is visually appealing and responsive.

### `script.js`
- Handles game logic including:
  - Starting the game on keypress.
  - Generating a random sequence.
  - Handling user input and checking it.
  - Flashing buttons on system and user input.
  - Displaying score and resetting the game.

---

## ✅ How to Play

1. Open `index.html` in any browser.
2. Press any key to start the game.
3. Watch the sequence of flashing colors.
4. Repeat the sequence by clicking the buttons.
5. Keep playing until you make a mistake.

---

## 📸 Preview

> (Add a screenshot or GIF of the game here if desired)

---

## ✨ Features

- Interactive button animations.
- Incremental difficulty per level.
- Real-time input checking.
- Game over feedback with final score.

---

## 🛠️ Future Improvements

- Add sound effects for each button.
- Animate the game-over state with a shake or color change.
- Store high scores in local storage.
- Make it mobile responsive.

---

## 📃 License

This project is open-source and available under the [MIT License](LICENSE) (add a license file if needed).

---

## 🙌 Acknowledgements

- Inspired by the classic Simon Says memory game.
