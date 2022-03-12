import React from 'react';
import '../styles/MyAccount.scss';

const MyAccount = () => {
	return (
		<div className="MyAccount">
			<div className="MyAccount-container">
				<h1 className="title">My account</h1>
				<form action="/" className="form">
					<div>
						<label for="name" className="label">Nombre</label>
						<p className="value">Juanma Robles</p>
						<label for="email" className="label">Email</label>
						<p className="value">robles@gmail.com</p>
						<label for="password" className="label">Contraseña</label>
						<p className="value">*********</p>
					</div>
					<input type="submit" value="Edit" className="secondary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default MyAccount;