import React from "react";
import Tile from "./tile";

class Board extends React.Component{
    
    constructor(props){
        super(props);
        this.board = props.board;
        this.updateGame = props.updateGame;
    }
    
    render(){
        return (
        <div>
            {this.renderRows()}
        </div>
            
        );
    }

    renderRows(){
        const board = this.board;
        return board.grid.map( (row, idx) => {
            return (
                <div class="row" key={idx}>
                    {this.renderTiles(row, idx)}
                </div>
            );
        });
    }

    renderTiles(row, i){
       return row.map( (tile, idx) => {
            console.log(tile);
            return (<Tile tile={tile} row ={i} col={idx} updateGame={this.updateGame}/>);
        });
    }
}

export default Board;