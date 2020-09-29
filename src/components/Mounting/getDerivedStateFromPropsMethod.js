import React, { Component } from 'react'

export class ChildComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
          name: 'Constructor Method'
        }
      }

    static getDerivedStateFromProps(props, state) {
        console.log(props)
        return {name: props.nameFromParent} 
      }
    render() {
        return (
            <div>
                This is a {this.state.name}
            </div>
        )
    }
}


export default class getDerivedStateFromPropsMethod extends Component {
   
    render() {
        return (
            <div>
                <ChildComponent nameFromParent="getDerivedStateFromProps Method"/>
            </div>
        )
    }
}

