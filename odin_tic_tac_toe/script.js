class Player {
  constructor(name) {
    this.name = name;
    this.turn = false;
  }
}

const GameController = (() => {
  // IIFE GameBoard contains game logics, placing move.
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

    const resetInternalBoard = () => {
      gameBoard = Array.from({ length: 3 }, () => Array(3).fill(null));
    };

    const resetUIBoard = () => {
      let gridChildren = document.querySelectorAll(".grid-child");
      gridChildren.forEach((child) => {
        child.textContent = "";
      });
    };

    const placeMove = (player, r, c) => {
      // Gameboard can't place a postion that already taken (handle by UI)
      if (gameBoard[r][c] != null) {
        throw Exception("UI is not handled correctly!");
      } else {
        gameBoard[r][c] = player.name;
        let result = checkGameEnd(player);
        // If game end resets
        if (result[0]) {
          alert(result[1]);
          resetInternalBoard();
          resetUIBoard();
        }
      }
      console.log(gameBoard);
    };

    return {
      resetInternalBoard,
      resetUIBoard,
      placeMove,
      checkGameEnd,
      getGameboard,
    };
  })();

  // Create two players
  let p1 = new Player("X");
  let p2 = new Player("O");

  const initializeGame = () => {
    p1.turn = true;
    p2.turn = false;
    GameBoard.resetInternalBoard();
    GameBoard.resetUIBoard();
  };

  const playGame = () => {
    initializeGame();
    let gridChildren = document.querySelectorAll(".grid-child");
    gridChildren.forEach((child) => {
      child.addEventListener("click", () => {
        if (child.textContent == "") {
          if (p1.turn) {
            child.textContent = p1.name;
            let r = Number(child.getAttribute("id")[1]);
            let c = Number(child.getAttribute("id")[3]);
            GameBoard.placeMove(p1, r, c);
            p1.turn = !p1.turn;
            p2.turn = !p2.turn;
          } else {
            child.textContent = p2.name;
            let r = Number(child.getAttribute("id")[1]);
            let c = Number(child.getAttribute("id")[3]);
            GameBoard.placeMove(p2, r, c);
            p1.turn = !p1.turn;
            p2.turn = !p2.turn;
          }
        }
      });
    });
  };

  return { playGame };
})();

GameController.playGame();
