import React, { Component } from 'react';
import './App.css';



class Content extends Component  {
  constructor(){

    super();
    this.state={
      count:0,
      no:0,
      sco : "Score",
      value: 15,
      los: -4,
 
      win: 9,
      status:":)",
      printtrue: "กะทันหัน",
      printfail:"กระทันหัน",
      inputListT:[
        {printtrue:"คำนวณ"},
        {printtrue:"กาลเทศะ"},
        {printtrue:"น้ำแข็งไส"},
        {printtrue:"บันเทิง"},
        {printtrue:"ผัดไทย"},
        {printtrue:"สังเกต"},
        {printtrue:"หลงใหล"},
        {printtrue:"สามเส้า"},
        {printtrue:"สัมมนา"},
        {printtrue:"สาบสูญ"},
        {printtrue:"อนุญาต"},
        {printtrue:"ไอศกรีม"},
        {printtrue:"วิ่งเปี้ยว"},
        {printtrue:"อินฟราเรด"},
        {printtrue:"อิเล็กทรอนิกส์"}],
        inputListF:[
          {printfail:"คำนวน"},
          {printfail:"กาละเทศะ"},
          {printfail:"น้ำแข็งใส"},
          {printfail:"บรรเทิง"},
          {printfail:"ผัดไท"},
          {printfail:"สังเกตุ"},
          {printfail:"หลงไหล"},
          {printfail:"สามเศร้า"},
          {printfail:"สัมนา"},
          {printfail:"สาปสูญ"},
          {printfail:"อนุญาติ"},
          {printfail:"ไอศครีม"},
          {printfail:"วิ่งเปรี้ยว"},
          {printfail:"อินฟาเรด"},
          {printfail:"อิเล็คทรอนิกส์"} ],
    
    }
    
  
  }
  newgame = () => {
    window.location.reload(false);
  }

  handleClickwin = e => { if( this.state.no  <= this.state.value && this.state.no  >= 0 ) {
    this.setState({
      count: this.state.count + 1,
      status :"เก่งมาก :) !",
      printtrue :this.state.inputListT[this.state.no].printtrue,
      printfail :this.state.inputListF[this.state.no].printfail,
      no: this.state.no+1, 
      sco : "Score",
    })
    this.shoot();
  }if ( this.state.count == this.state.win ){
    this.setState({
      status : "You win ^_^ !!",
      no: 0,
      count:0,
      sco:"You win ^_^ !!",
      
   
    })
    this.win();
  }if ( this.state.count == this.state.los ){
    this.setState({
      status : "You Loss T_T !!",
      no: 0,
      count:0,
      sco:"You Loss T_T !!",
      
   
    })
    this.loss();
  }  if ( this.state.no >= 15 ){
    this.setState({
      no: 0, 
      
    })

  }
}


  handleClickloss = e => { if( this.state.no  <= this.state.value  && this.state.no  >= 0 ) {
    this.setState({
      count: this.state.count + -1, 
      status : "ผิด ! :(",
      printtrue :this.state.inputListT[this.state.no].printtrue,
      printfail :this.state.inputListF[this.state.no].printfail,
      no: this.state.no+1,
      
   
    })
    this.Fail();
  }  if ( this.state.count == 10 ){
    this.setState({
      status : "ว้าวว ^_^ !!",
      no: 0,
      count:0,
      sco:"You win ^_^ !!",
   
    })
    this.win();
  }
   if ( this.state.count == -5 ){
    this.setState({
      status : "แย่จัง T_T !!",
      no: 0,
      count:0,
      sco:"You Loss T_T !!",
   
    })
    this.loss();
  }  
  if ( this.state.no >= 15 ){
    this.setState({
      no: 0, 
      
    })

  } }

  
 
 shoot() {
  
    alert("เก่งมาก :) !");
  
  }
  Fail() {
    alert("ผิด! :(");
  
    
  }
  win() {
  
    alert("เย้ชนะแล้ว :) !");
  
  }
  loss() {
    alert("เห้อแพ้แล้ว :(");
  
    
  }

    render() {
      

      let className1 = `boxbutton`
      let className2 = `boxbutton1`
      let className3 = `boxbutton4`
      let className4 = `boxbutton5`
      
      const m1t = (
        <button  className={className1}  onClick={this.handleClickwin}> {this.state.printtrue}</button>
        
        
      );
      const m1f = (
        <button   className={className1} onClick={this.handleClickloss}>{this.state.printfail} </button>
      
        
      );    
        const m2 = (
        <button   className={className4} >? </button>
        
        
      );


      return (
        
       <div >
       
         <h1   align="center" >{m1f}{m2}{m1t}</h1>
     
         <h1 align="center">
          <h2  className={className3} > {this.state.status}</h2>
          </h1>
         
          <h1 align="center" >
          <button  className={className2} >{this.state.sco} : {this.state.count} </button>
          <br></br>
          <br></br>
          <button id="newgame" className = "boxbutton11" onClick={this.newgame}>NEW GAME</button>
    
          </h1>
          </div>
      );
    }
  }

export default Content;


