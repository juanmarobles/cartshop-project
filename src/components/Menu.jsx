import React from 'react';
import '../styles/Menu.scss';

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
					<a href="/" className="">Mis compras</a>
				</li>
				<li>
					<a href="/">Mi cuenta</a>
				</li>
				<li>
					<a href="/">Salir</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;