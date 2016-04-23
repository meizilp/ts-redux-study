import {INCREMENT, DECREMENT} from '../actions'

function counterReducer(state = { value: 0 }, action: { type: string }) {
    switch (action.type) {
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:
            return { value: state.value - 1 }
        default:
            return state
    }
}

export { counterReducer }
