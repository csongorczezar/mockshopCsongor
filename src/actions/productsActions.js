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
                    console.log( data )
                    dispatch({
                        type:"POPULATE_PRODUCTS",
                        payload: data
                    })
                   })
    }
}