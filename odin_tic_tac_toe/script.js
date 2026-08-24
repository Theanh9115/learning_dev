const GameBoard = () => {
  class Player {
    constructor(name) {
      this.name = name;
      this.turn = false;
    }
  }

  const P1 = Player("Player 1");
  const P2 = Player("Player 2");
  const gameBoard = Array.from({ length: 3 }, () => Array(3).fill(null));

  const checkWin = (player) => {
    // Rows
    if (
      gameBoard[0][0] == player &&
      gameBoard[0][1] == player &&
      gameBoard[0][2] == player
    )
      return true;
    else if (
      gameBoard[1][0] == player &&
      gameBoard[1][1] == player &&
      gameBoard[1][2] == player
    )
      return true;
    else if (
      gameBoard[2][0] == player &&
      gameBoard[2][1] == player &&
      gameBoard[2][2] == player
    )
      return true;
    // Diagonal
    else if (
      gameBoard[0][0] == player &&
      gameBoard[1][1] == player &&
      gameBoard[2][2] == player
    )
      return true;
    else if (
      gameBoard[0][2] == player &&
      gameBoard[1][1] == player &&
      gameBoard[2][0] == player
    )
      return true;
    // Columns
    else if (
      gameBoard[0][0] == player &&
      gameBoard[1][0] == player &&
      gameBoard[2][0] == player
    )
      return true;
    else if (
      gameBoard[0][1] == player &&
      gameBoard[1][1] == player &&
      gameBoard[2][1] == player
    )
      return true;
    else if (
      gameBoard[0][2] == player &&
      gameBoard[1][2] == player &&
      gameBoard[2][2] == player
    )
      return true;
    else return false;
  };

  const checkDraw = () => {
    for (const r of gameBoard) {
      for (const c of r) {
        if (gameBoard[r][c] == null) return false;
      }
    }
    return true;
  };

  const checkGameEnd = () => {
    if (checkWin(P1)) return [true, "Player 1 Wins!!!"];
    else if (checkWin(P2)) return [true, "Player 2 Wins!!!"];
    else if (checkDraw()) return [true, "Draw!!!"];
    else return [false, "Continue..."];
  };

  const placeMove = (player, r, c) => {
    if (gameBoard[r][c] != null) throw Exception("Invalid Move");
    gameBoard[r][c] = player;
    let result = checkGameEnd();
    if (result[0]) alert(result[1]);
  };
};
