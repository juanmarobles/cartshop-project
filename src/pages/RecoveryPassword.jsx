import React from 'react';
import '../styles/RecoveryPassword.scss';

const RecoveryPassword = () => {
	return (
		<div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<h1 className="title">Ingrese la dirección de correo electrónico utilizada para recuperar su cuenta</h1>
				<form action="/" className="form">
					<label htmlFor="email" className="label">Correo electronico</label>
					<input type="email" id="email" className="input input-email" />
					<a href=""><input type="submit" value="Enviar" className="primary-button login-button" /></a>
					
				</form>
			</div>
		</div>
	);
}

export default RecoveryPassword;