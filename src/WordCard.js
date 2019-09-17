import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
export default class WordCard extends Component {
    activationHandler = c => { console.log(`${c} has been activated.`) }
    render() {
        function shoot() {
            alert("Great Shot!");
            
          }

          const myelement = (
            <button onClick={shoot}>ตกลง!</button>
            
          );
        
     return (
     <div> 
        { Array.from(this.props.value).map((c, i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler}/>) }
        <h1 align="center" >{myelement}</h1>
    </div>
     );
    }
    }