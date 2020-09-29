import React, { Component } from 'react'

export default class componentDidMountMethod extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'This name will change in 5 sec',
      data: []
    }
  }

  componentDidMount() {
      //Example 1
    setTimeout(() => {
      this.setState({name: "This is a componentDidMount Method"})
    }, 5000)

    //Example 2 Calling API Data

    fetch('https://jsonplaceholder.typicode.com/users').then(
        (response) => response.json()
    ).then(data => this.setState({data: data}))

  }

  render() {
    return (
      <div>
       <p>{this.state.name}</p>
       <p>This will print all the name available in API users data</p>
    {this.state.data.map(d=> <h6 key={d.id}>{d.name}</h6>)}
      </div>
    )
  }
}

