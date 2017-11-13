import React from "react";

class Tile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bombed: props.tile.bombed,
            explored: props.tile.explored,
            flagged: props.tile.flagged
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        
        if(event.altKey){
            this.props.updateGame(this.props.tile, true);
        }else{
            this.props.updateGame(this.props.tile, false);
        }
        
    }

    render(){
        if(this.props.tile.bombed && !this.props.tile.flagged){
            return (<tile onClick={this.handleClick}> B </tile>);
        }else if(this.props.tile.flagged){
            return (<tile onClick={this.handleClick}> F </tile>);
        }else{
            return (<tile onClick={this.handleClick}> T </tile>);
        }
    }
}

export default Tile;