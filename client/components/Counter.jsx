import React from 'react'

class Counter extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount () {
        this.setState({
            count: this.state.count + 1
        })
    }

    render () {
        setTimeout(() => {
            this.incrementCount()
        }, 1000)
        return (
            <p>The current count is {this.state.count}</p>
        )
    }
}

export default Counter