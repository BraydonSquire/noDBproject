import React, {Component} from 'react';

function Pokemon (props){
    return(
        <div className="type">
            <div className="type-container">
                <div className="type-sprite">
                    {props.placePokemon.getPokemon()}
                    <img src={ '/public/sprites/${id}.png' } />
                    </div>
                    <div className="pokemon-type-name"> {this.state.pokemon} </div> 
                    </div>
                    </div>
        
    )
}

export default Pokemon;
