import React, { Component } from 'react';




class Content extends Component  {
  constructor(){
    super();
    this.state={
      count:0,
      printtrue:"กะทันหัน",
      printfail:"กระทันหัน",
      printtrue2:"คำนวณ",
      printfail2:"คำนวน",
      printtrue3:"กาลเทศะ",
      printfail3:"กาละเทศะ",
      printtrue4:"น้ำแข็งไส",
      printfail4:"น้ำแข็งใส",
      printtrue5:"บันเทิง",
      printfail5:"บรรเทิง",
      printtrue6:"ผัดไทย",
      printfail6:"ผัดไท",
      printtrue7:"อิเล็กทรอนิกส์",
      printfail7:"อิเล็คทรอนิกส์",
      random: 0,
    }
  
  }

  handleClickwin = e => {
    this.setState({
      count: this.state.count + 1,
      printtrue :this.state.printtrue2,
      printfail :this.state.printfail2,

    })
    this.shoot();
  }

  handleClickloss = e => {
    this.setState({
      count: this.state.count + -1, 
     
      printtrue :this.state.printtrue2,
      printfail :this.state.printfail2,
      
   
    })
    this.Fail();
  }

  
 
 shoot() {
  
    alert("เก่งมาก :) !");
 
  }
  Fail() {
    alert("ผิด! :(");
    
  }

    render() {

      var mystyle={
        width:100,
        height:50,

      }

      const m1t = (
        <button  style={mystyle}  onClick={this.handleClickwin}>{this.state.printtrue}</button>
        
        
      );
      const m1f = (
        <button   style={mystyle} onClick={this.handleClickloss}>{this.state.printfail} </button>
        
        
      );
  
      return (
        <div>

         <h1 align="center">{m1f}     {m1t}</h1>
          <h1>Score : {this.state.count}</h1>
  
          </div>
      );
    }
  }

export default Content;


