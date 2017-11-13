import React from "react";
import * as Minesweeper from "../minesweeper";
import Board from "./board";
class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            board: new Minesweeper.Board(5, 5),
        };
        this.updateGame = this.updateGame.bind(this);
    }

    render(){
        let top = undefined;
        if(this.state.board.won()){
            return (
                <div>You Won! 
                    <Board board={this.state.board} updateGame={this.updateGame} />
                </div>);
        }else if (this.state.board.lost()){
            return (
            <div>You Lost! 
                <Board board={this.state.board} updateGame={this.updateGame} />
            </div>);
        }else{
            return (<Board board={this.state.board} updateGame={this.updateGame} />);
        }
        
    }

    updateGame(tile, bool){
        if(bool){
            tile.toggleFlag();
        }else{
            tile.explore();
        }
        this.setState({board: this.state.board});
    }
}

export default Game;