import React, { Component } from 'react';
import PokemonList from './PokemonList';
import './App.css';
import axios from 'axios';
import Pokemon from './Pokemon'

class App extends Component {
  constructor(){
    super();
  this.state={
    pokemon:[],
    baseurl:'http://pokeapi.co/api/v2/pokemon/'
  }
  this.getPokemon = this.getPokemon.bind(this);
  }

 getPokemon(val){
    let grab=this.state.baseurl + '?limit=30/';
    axios.get(grab).then( (response) => this.setState({ pokemon: response.data}))
    console.log(this.state.pokemon.results)
  }
  
           
        
        
      
    
 


  render() {
    return (
      <div className="Parent">
        
         <div className="Background">
        
        <div className="App">
          <div className="header">
        <h1><strong>Pokedex</strong></h1>
        </div>
        </div>
        <PokemonList getPokemon={this.getPokemon} /> 

        <div className="contain">
        
            <div className="contained">{Pokemon}</div>
          </div>
        
        
        </div>
          
        
      </div>
    );
  }
}

export default App;
