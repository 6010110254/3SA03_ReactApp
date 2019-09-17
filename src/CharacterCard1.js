import React, { Component } from 'react';
export default class CharacterCard1 extends Component {
    constructor(props){
    super(props)
    this.state = {
    active: true,
    }
    }
   
    activate = () => {
        if(!this.state.active){
            this.props.activationHandler(this.props.value)
            this.setState({active: true})
            
        }
        else if(this.state.active){
            this.props.activationHandler(this.props.value)
            this.setState({active: false})
            
        }
    }

    render(){
        
    let className = `card ${this.state.active ? 'activeCard': ''}`
    return (
    <div className={className} onClick={this.activate}>
    {this.props.value}
    </div>
    )
    }
   }
   