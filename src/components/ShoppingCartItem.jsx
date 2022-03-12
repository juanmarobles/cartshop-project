import React from 'react';
import '../styles/ShoppingCartItem.scss';
import obj1 from '../assets/img/obj1.jpg'

const ShoppingCartItem = () => {
	return (
		<div className="ShoppingCartItem">
			<figure>
				<img src={obj1} alt="bike" />
			</figure>
			<p>Producto 1</p>
			<p>$30,00</p>
		</div>
	);
}

export default ShoppingCartItem;