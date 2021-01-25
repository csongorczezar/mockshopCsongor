
export default function productsReducer(product = null,action) {
    switch(action.type) {
        case"POPULATE_PRODUCTS":
        const newData = action.payload.reduce(function (r, a) {
            r[a.category] = r[a.category] || [];
            r[a.category].push(a);
            return r;
        }, Object.create(null));

            return product = newData
            
        default:
            return product
    }
}