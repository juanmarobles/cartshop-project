import React from 'react';
import '../styles/ProductInfo.scss';
import AddtoCart from '../assets/img/bt_add_to_cart.svg';

const ProductInfo = () => {
	return (
		<>
			<img src="https://i.blogs.es/0835e6/superstrata/1366_2000.jpg" alt="bike" />
			<div className="ProductInfo">
				<p>$35,00</p>
				<p>Bike</p>
				<p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
				<button className="primary-button add-to-cart-button">
					<img src={AddtoCart} alt="add to cart" />
					Add to cart
				</button>
			</div>
		</>
	);
}

export default ProductInfo;