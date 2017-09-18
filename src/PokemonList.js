import React, {Component} from 'react';
import axios from 'axios';

class PokemonList extends Component{
    constructor(){
        super();
        this.state={
            pokemon:[],
            pokemonid:[],
            pokemonType:[]
            
        }
        
    }
    
    
    

   

    render(){
        return(
            <div className="buttons">
            <button onClick={ () => this.props.getPokemon(this.state.pokemon)} >All Pokemon</button>
            <button>Grass Types</button>
            <button>Water Types</button>
            

          </div>
        )

        }

}
export default PokemonList;