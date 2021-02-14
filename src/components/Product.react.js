import React from "react";
import { useSelector } from "react-redux";

function Product() {
    const selectedProductId = useSelector(state=>state.app.selectedProductId)
    return (
        <h1>The selected product id is: {selectedProductId}</h1>
    )
}

export default Product