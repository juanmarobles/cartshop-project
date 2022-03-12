import React from 'react';
import OrderItem from '../components/OrderItem.jsx';
import Menu from '../components/Menu';
import '../styles/Checkout.scss';

const Checkout = () => {
	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">Mi carrito</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>03.25.22</span>
							<span>6 articulos</span>
						</p>
						<p>$560.00</p>
					</div>
				</div>
				<OrderItem />
			</div>
		</div>
	);
}

export default Checkout;