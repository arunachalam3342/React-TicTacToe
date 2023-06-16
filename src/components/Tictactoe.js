import React, { useState } from 'react';

const TicTacToe = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentStep, setCurrentStep] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    const curr_hist = history.slice(0, currentStep + 1);
    const curr_board = [...curr_hist[curr_hist.length - 1]];

    if (calculateWinner(curr_board) || curr_board[index]) {
      return;
    }

    curr_board[index] = xIsNext ? 'X' : 'O';

    setHistory([...curr_hist, curr_board]);
    setCurrentStep(curr_hist.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setCurrentStep(step);
    setXIsNext(step % 2 === 0);
  };

  const curr_board = history[currentStep];
  const winner = calculateWinner(curr_board);

  const moves = history.map((step, move) => {
    const desc = move ? `Go to move #${move}` : 'Go to game start';
    return (
      <li key={move}>
        <button className="btn btn-link" onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (currentStep === 9) {
    status = 'It\'s a draw!';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Tic-Tac-Toe</h3>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td
                        onClick={() => handleClick(0)}
                        className={`cell ${curr_board[0] ? 'occupied' : ''}`}
                      >
                        {curr_board[0]}
                      </td>
                      <td
                        onClick={() => handleClick(1)}
                        className={`cell ${curr_board[1] ? 'occupied' : ''}`}
                      >
                        {curr_board[1]}
                      </td>
                      <td
                        onClick={() => handleClick(2)}
                        className={`cell ${curr_board[2] ? 'occupied' : ''}`}
                      >
                        {curr_board[2]}
                      </td>
                    </tr>
                    <tr>
                      <td
                        onClick={() => handleClick(3)}
                        className={`cell ${curr_board[3] ? 'occupied' : ''}`}
                      >
                        {curr_board[3]}
                      </td>
                      <td
                        onClick={() => handleClick(4)}
                        className={`cell ${curr_board[4] ? 'occupied' : ''}`}
                      >
                        {curr_board[4]}
                      </td>
                      <td
                        onClick={() => handleClick(5)}
                        className={`cell ${curr_board[5] ? 'occupied' : ''}`}
                      >
                        {curr_board[5]}
                      </td>
                    </tr>
                    <tr>
                      <td
                        onClick={() => handleClick(6)}
                        className={`cell ${curr_board[6] ? 'occupied' : ''}`}
                      >
                        {curr_board[6]}
                      </td>
                      <td
                        onClick={() => handleClick(7)}
                        className={`cell ${curr_board[7] ? 'occupied' : ''}`}
                      >
                        {curr_board[7]}
                      </td>
                      <td
                        onClick={() => handleClick(8)}
                        className={`cell ${curr_board[8] ? 'occupied' : ''}`}
                      >
                        {curr_board[8]}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="game-info">
              <div className="mb-3" style={{ fontFamily: "Roman", fontWeight: "bold" }}><h5>{status}</h5></div>
                <ol className="list-unstyled">{moves}</ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default TicTacToe;
