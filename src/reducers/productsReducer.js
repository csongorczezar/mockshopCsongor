
export default function productsReducer(state = {},action) {
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
                    productsGrouped:newData,
                    productsById:productsById,
                }  
        default:
            return state
    }
}