export function populateProducts() {
    return (dispatch)=> {
        fetch("https://fakestoreapi.com/products")
           		.then(response => response.json())
           		.then(data => {
                    dispatch({
                        type:"POPULATE_PRODUCTS",
                        payload: data
                    })
                   })
    }
}