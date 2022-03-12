import React from 'react';
import '../styles/SendEmail.scss';
import email from '../assets/img/email.svg'

const SendEmail = () => {
	return (
		<div className="SendEmail">
			<div className="form-container">
				<h1 className="title">Email enviado con éxito!</h1>
				<p className="subtitle">Consulte su bandeja de entrada para obtener instrucciones sobre cómo restablecer la contraseña.</p>
				<div className="email-image">
					<img src={email} alt="email" />
				</div>
				<button className="primary-button login-button">Ingrese</button>
				<p className="resend">
					<span>¿No recibiste el correo electrónico?</span>
					<a href="/"> Reenviar</a>
				</p>
			</div>
		</div>
	);
}

export default SendEmail;