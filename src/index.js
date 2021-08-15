import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
function Square(props){
    return (
      <button
        className="square"
        onClick={() => props.onClick()}
      >
        {props.value}
      </button>
    );
}

class Board extends React.Component {
  constructor(props){
    super(props)
    this.state={
      squares:Array(9).fill(null),
      xIsNext:true
    };
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]}
    onClick={() => this.handleClick(i)} />;
  }

  handleClick(i)
{
   const square=this.state.squares.slice();
   let temp
   if (calculateWinner(square) || square[i]) {
    return;
  }
   if(this.state.xIsNext == true){
    square[i]='X'
    temp=false
   }
   else{
   square[i]='O'
   temp=true
   }
   this.setState({squares:square,xIsNext:temp})
}

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
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
}
ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);
// ========================================
/*I am practicing component and other important topics here.*/
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
const element = <Welcome name="Sara" />;


ReactDOM.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>,
  document.getElementById('root2')
);
//===========================================
/*I am practicing state and lifecycle */
// function tick()
// {
//   const element=(
//     <div>
//       <h1>Hello,World</h1>
//       <h2>It is {new Date().toDateString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root3')
//   );
// }
// setInterval(tick,1000);

// class Clock extends React.Component
// {
//   constructor(props)
//   {
//     super(props);
//     this.state={date:new Date()};
//   }
//   componentDidMount()
//   {
//      this.timerID=setInterval(
//        ()=>this.tick(),
//        1000
//      );
//   }
//   componentWillUnmount()
//   {
//      clearInterval(this.timerID);
//   }

//   render()
//   {
//     return (<div>
//       <h1>Hello world </h1>
//       <h2>It is {this.state.date.toLocaleTimeString()}. </h2>
//     </div>);
//   }

//   tick()
//   {
//     this.setState(
//       {
//         date:new Date()
//       }
//     );
//   }
// }
// function App()
// {
//   return(
//   <div>
//     <Clock/>,
//     <Clock/>,
//     <Clock/> </div>
//   )
// }

//   ReactDOM.render(
//     <App />,
//     document.getElementById('root3')
//   );