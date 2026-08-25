class Player {
  constructor(name) {
    this.name = name;
    this.turn = false;
  }
}

const GameController = (() => {
  const GameBoard = (() => {
    let gameBoard = Array.from({ length: 3 }, () => Array(3).fill(null));

    const checkWin = (player) => {
      // Rows
      if (
        gameBoard[0][0] == player.name &&
        gameBoard[0][1] == player.name &&
        gameBoard[0][2] == player.name
      )
        return true;
      else if (
        gameBoard[1][0] == player.name &&
        gameBoard[1][1] == player.name &&
        gameBoard[1][2] == player.name
      )
        return true;
      else if (
        gameBoard[2][0] == player.name &&
        gameBoard[2][1] == player.name &&
        gameBoard[2][2] == player.name
      )
        return true;
      // Diagonal
      else if (
        gameBoard[0][0] == player.name &&
        gameBoard[1][1] == player.name &&
        gameBoard[2][2] == player.name
      )
        return true;
      else if (
        gameBoard[0][2] == player.name &&
        gameBoard[1][1] == player.name &&
        gameBoard[2][0] == player.name
      )
        return true;
      // Columns
      else if (
        gameBoard[0][0] == player.name &&
        gameBoard[1][0] == player.name &&
        gameBoard[2][0] == player.name
      )
        return true;
      else if (
        gameBoard[0][1] == player.name &&
        gameBoard[1][1] == player.name &&
        gameBoard[2][1] == player.name
      )
        return true;
      else if (
        gameBoard[0][2] == player.name &&
        gameBoard[1][2] == player.name &&
        gameBoard[2][2] == player.name
      )
        return true;
      else return false;
    };

    const getGameboard = () => {
      return gameBoard;
    };

    const checkDraw = () => {
      for (let r = 0; r < gameBoard.length; r++) {
        console.log("r");
        for (let c = 0; c < gameBoard[0].length; c++) {
          console.log("c");
          if (gameBoard[r][c] == null) return false;
        }
      }
      return true;
    };

    const checkGameEnd = (player) => {
      // console.log(getGameboard());
      if (checkWin(player)) return [true, `${player.name} wins!!!`];
      else if (checkDraw()) return [true, "Draw!!!"];
      else return [false, "Continue..."];
    };

    const resetBoard = () => {
      gameBoard = Array.from({ length: 3 }, () => Array(3).fill(null));
    };

    const placeMove = (player) => {
      let r = Number(prompt("What is the row?"));
      let c = Number(prompt("What is the column?"));
      if (gameBoard[r][c] != null) {
        placeMove(player, r, c);
      } else {
        gameBoard[r][c] = player.name;
        let result = checkGameEnd(player);
        if (result[0]) {
          alert(result[1]);
        }
      }
      console.log(gameBoard);
    };

    return { resetBoard, placeMove, checkGameEnd };
  })();

  let p1 = new Player("Player 1");
  let p2 = new Player("Player 2");

  const initializeGame = () => {
    p1.turn = true;
    p2.turn = false;
    GameBoard.resetBoard();
  };

  const playGame = () => {
    initializeGame();
    while (!GameBoard.checkGameEnd(p1)[0] || !GameBoard.checkGameEnd(p2)[0]) {
      console.log("in the loop");
      if (p1.turn) {
        GameBoard.placeMove(p1);
      } else {
        GameBoard.placeMove(p2);
      }
      p1.turn = !p1.turn;
      p2.turn = !p2.turn;
    }
  };
  return { playGame };
})();

GameController.playGame();
