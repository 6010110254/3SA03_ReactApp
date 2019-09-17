import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Footer1 from './Footer1';

class App extends Component {

 

  render() {
    return (
     <body  background="https://cdn.pixabay.com/photo/2018/04/26/11/34/silhouette-3351746_960_720.jpg" bgproperties="fixed" > 
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

