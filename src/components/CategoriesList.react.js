import React from 'react';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CategoriesList(props) {
    const products = props.data
    console.log(products)
    return (
        <div>
            <h1>Categories List Here</h1>
            {products?Object.keys(products).map(item=>(
            <div>
                <p>{item}</p>
                <img src={products[item][0].image} alt={products[item][0].title}/>
            </div>
            )):<Spinner animation="border" variant="dark"/>}
        </div>
    )
}

export default CategoriesList