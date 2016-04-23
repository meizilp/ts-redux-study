import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {createStore} from 'redux'

import {counterReducer} from './reducers/counterReducer'
import {Counter} from './components/Counter'
import {INCREMENT, DECREMENT} from './actions'
import {DevTools} from './components/DevTools'

const store = createStore(counterReducer, DevTools.instrument())

function renderToPage() {
    ReactDOM.render(
        <div>
            <Counter
                value={store.getState().value }
                onIncrement = {() => store.dispatch({ type: INCREMENT }) }
                onDecrement = {() => store.dispatch({ type: DECREMENT }) }
                />
            <DevTools store={store}/>
        </div>,
        document.getElementById('content')
    )
}

renderToPage()
store.subscribe(() => {
    renderToPage()
})
