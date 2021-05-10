"use strict";

// prompt-sync exports a create function
const createPrompt = require("prompt-sync");
// create a new prompt function with the create function.
const prompt = createPrompt();

function readRequiredString(message) {
    let result;
    do {
        result = prompt(message).trim();
        if (result.length === 0) {
            console.log("Input cannot be empty or blank.");
        }
    } while (result.length === 0);
    return result;
}

function readInt(message, min, max) {
    let result;
    do {
        result = parseInt(readRequiredString(message), 10);
        if (isNaN(result)) {
            console.log(`Please enter a number between ${min} and ${max}.`)
        } else if (result < min) {
            console.log(`${result} is too small.`);
        } else if (result > max) {
            console.log(`${result} is too big.`);
        }
    } while (isNaN(result) || result < min || result > max);
    return result;
}

function printBoard(board) {
    const boardStr = `         Column
       1   2   3
Row 1: ${board[0]} | ${board[1]} | ${board[2]}
${" ".repeat(7)}${"-".repeat(9)}
Row 2: ${board[3]} | ${board[4]} | ${board[5]}
${" ".repeat(7)}${"-".repeat(9)}
Row 3: ${board[6]} | ${board[7]} | ${board[8]}`;

    console.log(boardStr);
}

function getCell({ currentPlayer, currentSymbol, board }) {

    let cell = { row: 0, col: 0 };

    console.log(`${currentPlayer}, you are ${currentSymbol}.`)

    do {
        cell.row = readInt(`${currentPlayer}, Choose a Row:`, 1, 3) - 1;
        cell.col = readInt(`${currentPlayer}, Choose a Column:`, 1, 3) - 1;
        if (board[cell.row * 3 + cell.col] !== " ") {
            console.log("That spot is taken.");
        }
    } while (board[cell.row * 3 + cell.col] !== " ");

    return cell;
}

function isWin(
    { board, currentSymbol: symbol },
    { row, col }) {

    return (board[row * 3] == board[row * 3 + 1] && board[row * 3] == board[row * 3 + 2]) // check row
        || (board[col] == board[3 + col] && board[col] == board[6 + col]) // check column
        || (symbol == board[0] && symbol == board[4] && symbol == board[8]) // diagonal down
        || (symbol == board[6] && symbol == board[4] && symbol == board[2]); // diagonal up
}


function move(game) {

    printBoard(game.board);

    const cell = getCell(game);
    game.board[cell.row * 3 + cell.col] = game.currentSymbol;

    if (isWin(game, cell)) {
        console.log(`${game.currentPlayer} wins!`);
        printBoard(game.board);
        game.isOver = true;
        return;
    }

    game.moves++;
    if (game.moves >= 9) {
        console.log("The game is a tie.");
        game.isOver = true;
    }

    swap(game);
}

function swap(game) {
    if (game.currentSymbol === "X") {
        game.currentPlayer = game.playerTwo;
        game.currentSymbol = "O";
    } else {
        game.currentPlayer = game.playerOne;
        game.currentSymbol = "X";
    }
}

function initGame() {
    const game = {
        playerOne: "",
        playerTwo: "",
        currentPlayer: "",
        moves: 0,
        currentSymbol: "X",
        board: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
        isOver: false
    };
    game.playerOne = readRequiredString("Player #1, Enter Your Name:");
    game.playerTwo = readRequiredString("Player #2, Enter Your Name:");
    game.currentPlayer = game.playerOne;
    return game;
}

function play() {

    console.log("Welcome to Tic-Tac-Toe!");

    const game = initGame();

    do {
        move(game);
    } while (!game.isOver);

    console.log("Goodbye!");
}

play();
