

export default function dummyReducer(state = {}, action) {
    switch (action.type) {
        case "INITIAL_STATE":
            return {
                ...state,
                ready: action.payload
            };
        default:
            return state
    }
}