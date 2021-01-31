export default function appReducer(state="",action) {
    switch(action.type) {
        case "SET_CATEGORY":
            return "This is where the goods will be diplayed"
        default:
            return state
    }
}