import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Footer1 from './Footer1';

class App extends Component {

 

  render() {
    return (
     <body   background="https://data.ac-illust.com/data/thumbnails/b8/b85aeac77cde8f92aba1342b5e26ddcf_t.jpeg" > 
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

