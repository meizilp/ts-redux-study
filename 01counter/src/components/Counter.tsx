import * as React from 'react'
import * as ReactDOM from 'react-dom'

/**
 * Counter
 */
class Counter extends React.Component<{ value: number, onIncrement: Function, onDecrement: Function }, {}>{
    constructor() {
        super()
    }

    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }
    incrementAsync() {
        setTimeout(() => this.props.onIncrement(), 1000)
    }
    render() {
        const {value, onIncrement, onDecrement} = this.props
        return (
            <p>
                当前值: {value} 
                <hr/>
                <button onClick={() => onIncrement() }>加1</button>
                <button onClick={() => onDecrement() }>减1</button>
                <button onClick={() => this.incrementIfOdd() }>奇数则 +1</button>
                <button onClick={() => this.incrementAsync() }>延迟1秒后 +1</button>
            </p>
        )
    }
}

export { Counter }