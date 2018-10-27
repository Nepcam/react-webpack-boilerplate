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
            count: this.state.count + 2
        })
    }

    render () {
        setTimeout(() => {
            this.incrementCount()
        }, 1000)
        return (
            <h1>The current count is {this.state.count} winning</h1>
        )
    }
}

export default Counter