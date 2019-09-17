import React, { Component } from 'react';




class Content extends Component  {
  constructor(){
    super();
    this.state={
      count:0,
      no:0,
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

  handleClickwin = e => {
    this.setState({
      count: this.state.count + 1,
      status :"เก่งมาก :) !",
      printtrue :this.state.inputListT[this.state.no].printtrue,
      printfail :this.state.inputListF[this.state.no].printfail,
      no: this.state.no+1,
    })
    this.shoot();
  }

  handleClickloss = e => {
    this.setState({
      count: this.state.count + -1, 
      status : "ผิด ! :(",
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
      let className3 = `boxbutton4`
      
      const m1t = (
        <button  className={className1}  onClick={this.handleClickwin}> {this.state.printtrue}</button>
        
        
      );
      const m1f = (
        <button   className={className1} onClick={this.handleClickloss}>{this.state.printfail} </button>
        
        
      );


      return (
        
       <div>
   
         <h1  align="center">{m1f}  ?   {m1t}</h1>
         <h1 align="center">
          <button className={className3} > {this.state.status}</button>
          </h1>
          <br></br>
          <h1 align="center" >
          <button  className={className2} >Score : {this.state.count} </button>
          <br></br>
          </h1>
          </div>
      );
    }
  }

export default Content;


