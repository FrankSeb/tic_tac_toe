class TicTacToe{
    constructor() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.score = { X: 0, O: 0 };

        this.initializeGame();
    }

    initializeGame(){

        this.cells = document.querySelectorAll('.cell');
        this.currentPlayerDisplay = document.getElementById('current-player');
        this.gameStatus = document.getElementById('game-status');
        this.resetBtn = document.getElementById('reset-btn');
        this.newGameBtn = document.getElementById('new-game-btn');
        this.scoreX = document.getElementById('score-x');
        this.scoreO = document.getElementById('score-o');
    }
}

document.addEventListener('DOMContentLoaded', () => new TicTacToe());