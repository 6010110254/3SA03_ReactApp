import React, { Component } from 'react';




class Content extends Component  {
  constructor(){
    super();
    this.state={
      count:0,
      no:0,
      printtrue: "กะทันหัน",
      printfail:"กระทันหัน",
      inputListT:[
        {printtrue:"คำนวณ"},
        {printtrue:"กาลเทศะ"},
        {printtrue:"น้ำแข็งไส"},
        {printtrue:"บันเทิง"},
        {printtrue:"ผัดไทย"},
        {printtrue:"สังเกต"},
        {printtrue:"อินฟราเรด"},
        {printtrue:"อิเล็กทรอนิกส์"}],
        inputListF:[
          {printfail:"คำนวน"},
          {printfail:"กาละเทศะ"},
          {printfail:"น้ำแข็งใส"},
          {printfail:"บรรเทิง"},
          {printfail:"ผัดไทย"},
          {printfail:"สังเกตุ"},
          {printfail:"อินฟาเรด"},
          {printfail:"อิเล็คทรอนิกส์"} ],
    
    }
  
  }

  handleClickwin = e => {
    this.setState({
      count: this.state.count + 1,
      printtrue :this.state.inputListT[this.state.no].printtrue,
      printfail :this.state.inputListF[this.state.no].printfail,
      no: this.state.no+1,
    })
    this.shoot();
  }

  handleClickloss = e => {
    this.setState({
      count: this.state.count + -1, 
     
      printtrue :this.state.inputListT[this.state.no].printtrue,
      printfail :this.state.inputListF[this.state.no].printfail,
      no: this.state.no+1,
   
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
      

      let className1 = `boxbutton`
      let className2 = `boxbutton1`
      
      const m1t = (
        <button  className={className1}  onClick={this.handleClickwin}> {this.state.printtrue}</button>
        
        
      );
      const m1f = (
        <button   className={className1} onClick={this.handleClickloss}>{this.state.printfail} </button>
        
        
      );


      return (
        
       <div>
   
         <h1  align="center">{m1f}     {m1t}</h1>
          <h1 align="center" >
          <button  className={className2} >Score : {this.state.count} </button>
          </h1>
          </div>
      );
    }
  }

export default Content;


