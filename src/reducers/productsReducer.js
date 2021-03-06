const initialState = {
    originalData:null,
    productsGrouped:null,
    productsById:null
}
export default function productsReducer(state = initialState,action) {
    switch(action.type) {
        case"POPULATE_PRODUCTS":
        
        const newData = action.payload.reduce(function (obj, item) {
            obj[item.category] = obj[item.category] || [];
            obj[item.category].push(item);
            return obj;
        }, Object.create(null));

        const productsById = action.payload.reduce(function (obj, item) {
            obj[item.id] = item
            return obj;
        }, Object.create(null));

                return {
                    ...state,
                    originalData:action.payload,
                    productsGrouped:newData,
                    productsById:productsById
                }  
        default:
            return state
    }
}