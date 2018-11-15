import React from 'react'

import Header from './Header'
import Counter from './Counter'

const initialValue = 0

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      color: 'green'
    }
    this.valueChanged = this.valueChanged.bind(this)
  }

  valueChanged (newValue) {
    this.setState({
      color: newValue >= 0 ? 'green' : 'red'
    })
  }

  render () {
    return (
      <div className='app'>
        <Header/>
        <h1 className='title is-3' style={this.state}>This is a React Counter </h1>
        <Counter initialValue={initialValue} valueChanged={this.valueChanged} />
      </div>
    )
  }
}



export default App