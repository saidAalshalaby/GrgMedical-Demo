import React from 'react'

function Product(props) {
    const Props=props;
    return (
       
            <div className="product-item">
                    <img className="item-image" src={Props.image} />
                    <p className="item-name"> {Props.name} </p>
                    <h3>{Props.header} </h3>
                    <p className="item-details">{Props.details}  </p>
                </div>     
    )
}

export default Product
