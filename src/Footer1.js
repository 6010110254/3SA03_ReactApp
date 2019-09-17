import React, { Component } from 'react';
import WordCard from './WordCard';
import Wordcard1 from './Wordcard1';
class Footer1 extends Component {
    render() {
      return (
      <div  align="center" > <h3>
        <WordCard value= "Fadel Hayeemareh "/>
        <WordCard value= "6010110254"/>
        </h3>
       <h1>
       <Wordcard1 value= "3SA03"/>
         </h1> 
       </div>  
      );
    }
  }
  export default Footer1;
