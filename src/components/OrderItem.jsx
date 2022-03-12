import React, {useContext} from 'react';
import '../styles/OrderItem.scss';
import AppContext from '../context/AppContext';
import close from '../assets/img/icon_close.png'

const OrderItem = ({ product, indexValue }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = (index) => {
		removeFromCart(index)
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.tittle} />
			</figure>
			<p>{product.tittle}</p>
			<p>$ {product.price}</p>
			<img className='pointer'
			src={close} alt="close" onClick={() => handleRemove(indexValue)} />
		</div>
	);
}

export default OrderItem;