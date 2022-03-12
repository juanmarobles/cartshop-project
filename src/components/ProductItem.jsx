import React, { useContext } from 'react';
import '../styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import buttonAddCart  from '../assets/img/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
	const { AddtoCart } = useContext(AppContext);

	const handleClick = item => {
		AddtoCart(item);
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.tittle} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.tittle}</p>
				</div>
				<figure onClick={()=>handleClick(product)}>
				<img className='pointer' src={buttonAddCart} alt="" />
				</figure>			
			</div>
		</div>
	);
}

export default ProductItem;