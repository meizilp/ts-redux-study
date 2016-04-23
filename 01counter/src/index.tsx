import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {createStore} from 'redux'

import {counterReducer} from './reducers/counterReducer'
import {Counter} from './components/Counter'
import {INCREMENT, DECREMENT} from './actions'

const store = createStore(counterReducer)

function renderToPage() {
    ReactDOM.render(
        <Counter
            value={store.getState() }
            onIncrement = {() => store.dispatch({ type: INCREMENT }) }
            onDecrement = {() => store.dispatch({ type: DECREMENT }) }
            />,
        document.getElementById('content')
    )
}

renderToPage()
store.subscribe(() => {
    console.log(store.getState())
    renderToPage()
})
