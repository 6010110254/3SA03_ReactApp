import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Footer1 from './Footer1';

class App extends Component {

 

  render() {
    return (
     <body  background="https://sv1.picz.in.th/images/2019/09/18/cYPV8Z.jpg"  > 
      <div>
       <Footer1/>
       <Header/>
       <Content/>
       <Footer/>
        </div>
       </body>
    );
  }

}


export default App;

