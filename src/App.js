import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Footer1 from './Footer1';

class App extends Component {



  render() {
    return (
      <div>
       <Footer1/>
       <Header/>
       <Content/>

       <Footer/>
        </div>
    );
  }
}


export default App;

