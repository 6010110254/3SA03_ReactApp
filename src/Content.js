import React, { Component } from 'react';
import WordCard from './WordCard';



class Content extends Component  {

    render() {
      function shoot() {
        alert("Great Shot!");
        
      }

      const myelement = (
        <button onClick={shoot}>ตกลง!</button>
        
      );
      return (
        <div>
         <WordCard value="boupfkfal"/>
         <h1 align="center" >{myelement}</h1>

          </div>
      );
    }
  }

export default Content;


