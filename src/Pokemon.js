import React, {Component} from 'react';

class Pokemon extends Component {
    render(){
        const {pokemon,id} = this.props;
        this.props.placePokemon.map(pokemon => console.log(pokemon))
    return(
        
            <div>
                {this.props.placePokemon.map(pokemon =>{
                    return(
                        
                        <div className="contained">
                        <div className="pokemon-type-name"> {pokemon.name} </div>
                         <div className="type">
                         
                             <div className="type-container"> 
                                 <div className="sprite">
                                     <img src={`/public/sprites/${id}.png`} />
                                
                                </div>
                             </div>
                            </div>
                            </div>
                    )
                } )}
                <div className="type-sprite">

                    
                    </div>
                     
                    </div>
                    
    )
        
    }
}

export default Pokemon;
