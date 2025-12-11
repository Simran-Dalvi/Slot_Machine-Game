# Slot Machine Game (Node.js)

A simple command-line Slot Machine game built using **Node.js**.\
The player deposits money, places bets across multiple lines, spins the
slot machine, and wins based on symbol matches.\
This project demonstrates basic JavaScript logic, arrays, loops, and
user input handling using `prompt-sync`.

------------------------------------------------------------------------

## 🛠️ Setup Instructions

### 1. Install Node.js

Download and install Node.js from the **official website**:\
https://nodejs.org/

### 2. Create the Project File

Create a new JavaScript file named:

    project.js

### 3. Initialize the Project

Open your terminal inside your project folder and run:

    npm init -y

### 4. Install Required Package

This project uses `prompt-sync` for terminal input. Install it via:

    npm i prompt-sync

------------------------------------------------------------------------

## 🎮 How the Game Works

The Slot Machine follows a simple but structured flow:

1.  **Deposit Money**\
    The user begins by entering the amount they want to deposit.

2.  **Select Betting Lines**\
    The player chooses how many lines (1--3) they want to bet on.

3.  **Place Bet Amount**\
    A bet amount per line is taken, ensuring the user cannot bet more
    than their balance allows.

4.  **Spin the Slot Machine**\
    A random spin generates symbols across a 3×3 grid.

5.  **Check for Winnings**\
    If all symbols match in any line the user bet on, winnings are
    calculated based on symbol value.

6.  **Add Winnings to Balance**\
    Any amount won is added back to the user's balance.

7.  **Repeat Until Out of Money**\
    The user can keep playing until their balance reaches zero.

------------------------------------------------------------------------

## 📄 Project Features

-   Fully interactive command-line gameplay
-   Randomized symbol generation
-   Checks for matching rows
-   Symbol weights and values
-   Balance tracking
-   Clean, readable code structure

------------------------------------------------------------------------

## ▶️ Run the Game

Use the following command to start:

    node project.js

------------------------------------------------------------------------

## 📌 Technologies Used

-   **Node.js**
-   **JavaScript**
-   **prompt-sync**

------------------------------------------------------------------------

## 📁 File Structure

    project/
    │── project.js
    │── package.json
    │── package-lock.json
    └── README.md

------------------------------------------------------------------------

## 🤝 Contributions

Feel free to submit issues or pull requests if you'd like to improve the
project!


