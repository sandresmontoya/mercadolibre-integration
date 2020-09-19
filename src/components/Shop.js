import React from 'react'
import PropTypes from 'prop-types'



const Shop = ({name, imageurl, price, id}) => (
    

    <div className="card">
    <div  className="single-item">
        <div className ="container">
        <h3>{name}</h3>
        <img src={imageurl} alt={name}/>
        <p>Precio: ${price} </p>
        <button>Ver más</button>
        </div>
    </div>
    </div>
)

Shop.propTypes = {
    name: PropTypes.string.isRequired,
    imageurl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
}

export default Shop