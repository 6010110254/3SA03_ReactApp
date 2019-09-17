import React, { Component } from 'react';
import CharacterCard1 from './CharacterCard1';
export default class Wordcard1 extends Component {
    activationHandler = c => { console.log(`${c} has been activated.`) }
    render() {

        
     return (
     <div> 
        { Array.from(this.props.value).map((c, i) => <CharacterCard1 value={c} key={i} activationHandler={this.activationHandler}/>) }
       
    </div>
     );
    }
    }