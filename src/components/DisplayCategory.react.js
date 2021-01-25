import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


function DisplayCategory() {
    const {category} = useParams()
    const productCatalog = useSelector(state=>state.products.productsGrouped)
 
    return (
        <div>
            {productCatalog[category].map((item,index)=>(
                <h1 key={item.id}>{item.title}</h1>
            ))}
        </div>
        
    )
}

export default DisplayCategory