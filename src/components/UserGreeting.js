import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            isLoggedIn: true
        }
    }
        render() {
            return this.state.isLoggedIn ? (<div>Hello Darren</div>) : (<div>Hello Guest</div>)
            // let message
            // if(this.state.isLoggedIn){
            //     message = <div>Hello Darren</div>
            // }else {
            //     message = <div>Hello Guest</div>
            // }

            // return message
    // if(this.state.isLoggedIn){
    //     return(<div>Hello Darren</div>)
    // }else{
    //     return(<div>Hello Guest</div>)
    // }
  }
}

export default UserGreeting