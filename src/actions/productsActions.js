export function test() {
    return {
        type: "TEST"
    }
}

export function populateProducts() {
    return (dispatch)=> {
        fetch("https://fakestoreapi.com/products")
           		.then(response => response.json())
           		.then(data => {
                    const newData = data.reduce(function (r, a) {
                        r[a.category] = r[a.category] || [];
                        r[a.category].push(a);
                        return r;
                    }, Object.create(null));
                    dispatch({
                        type:"POPULATE_PRODUCTS",
                        payload: newData
                    })
                   })
    }
}