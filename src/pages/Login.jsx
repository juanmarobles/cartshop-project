import React, { useRef } from 'react';
import '../styles/RecoveryPassword.scss';

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			usename: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);
	}
	return (
		<div className="PasswordRecovery">

			<div className="Login-container">
				<h1 className="title">Ingrese email y contraseña</h1>
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email</label>
					<input type="text" name="email" placeholder="" className="input input-email" />
					<label htmlFor="password" className="label">Contraseña</label>
					<input type="password" name="password" placeholder="" className="input input-password" />
					<button 
					onClick={handleSubmit}
					className="primary-button login-button">
					Log in
					</button>
					<a href="/recovery-password">Olvide mi contraseña</a>
				</form>
				<button className="secondary-button signup-button">Registrarse</button> 
								
			</div>
		</div>
	);
}

export default Login;
