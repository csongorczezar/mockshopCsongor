import React from 'react';

function CategoriesList(props) {
    return (
        <div>
            <h1>Categories List Here</h1>
            {props.data?props.data.map(item=><p>{item.title}</p>):""}
        </div>
    )
}

export default CategoriesList