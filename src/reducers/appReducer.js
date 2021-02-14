export default function appReducer(state={},action) {
    switch(action.type) {
        case "SET_CATEGORY":
            return {
                ...state,
                selectedCategory:action.payload
            }
        default:
            return state
    }
}