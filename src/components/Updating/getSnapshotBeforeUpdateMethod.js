import React, { Component } from 'react'

export default class getSnapshotBeforeUpdateMethod extends Component {
    constructor(props){
        super(props)
        this.state = {
          name: 'constructor Method'
        }
      }

      componentDidMount(){
        setTimeout(() => {
          this.setState({name: "componentDidMount Method"})
        }, 5000)
      }
      getSnapshotBeforeUpdate(prevState) {
        document.getElementById('previous-state').innerHTML = "The previous state was " + prevState.name
      }
      componentDidUpdate() {
        
      }
    render() {
        return (
            <>
               <h5>This is a {this.state.name}</h5>
                <p id="current-state"></p>
                <p id="previous-state"></p>
            </>
        )
    }
}
