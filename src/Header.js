import React, { Component } from 'react';

class Header extends Component {
    render() {
      let className1 = `boxbutton2`
      let className2 = `boxbutton3`
      return (

        <div align="center">
       <button className={className1}  >เกมส์ ทายคำที่เขียนถูกต้อง</button>
       <br></br>
       <button className={className2}  >เลือกคำถูกต้อง</button>

        </div>
      );
    }
  }
export default Header;