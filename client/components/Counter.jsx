import React from 'react'

class Counter extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            count: 0
        }
        this.incrementCount = this.incrementCount.bind(this)
        this.decrementCount = this.decrementCount.bind(this)
    }

    incrementCount () {
        const newValue = this.state.count + 1
        this.setState({
            count: newValue
        })
        this.props.valueChanged(newValue)
    }

    decrementCount () {
        const newValue = this.state.count - 1
        this.setState({
            count: newValue
        })
        this.props.valueChanged(newValue)
    }

    render () {
        // setTimeout(() => {
        //     this.incrementCount()
        // }, 1000)
        return (
            <div>
                <h1 className="title is-2">The current count is {this.state.count} winning</h1>
                <button className="button is-success" onClick={this.incrementCount}>+</button>
                <button className="button is-success" onClick={this.decrementCount}>-</button>
            </div>
        )
    }
}

export default Counter