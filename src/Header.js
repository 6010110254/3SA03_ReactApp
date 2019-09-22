import React, { Component } from 'react';

class Header extends Component {
    render() {
      let className1 = `boxbutton2`
      let className2 = `boxbutton3`
      return (

        <div align="center">
       <button className={className1}  >เกมส์ ทายคำที่เขียนถูกต้อง</button>
       <br>
       </br>
       <br>
       </br>
       <button className={className2}  >เลือกคำถูกต้อง</button>
       <h3> คะแนน "10แต้ม" ถือว่าชนะ และถ้าคะแนน "-5แต้ม" ถือว่าแพ้</h3>
       <br></br>

        </div>
      );
    }
  }
export default Header;