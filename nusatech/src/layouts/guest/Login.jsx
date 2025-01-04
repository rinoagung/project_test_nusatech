import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCredentials({ ...credentials, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = credentials;

		try {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			const data = await response.json();

			if (response.ok) {
				localStorage.setItem("token", data.token);
				// dispatch(setError(""));
				navigate("/chats");
			} else {
				console.log(data.message);
				// dispatch(setError(data.message || "Login failed"));
			}
		} catch (error) {
			console.log(error);
			// dispatch(setError("An error occurred. Please try again."));
		}
	};

	return (
		<div className="container-fluid" style={{ width: "100vw", height: "100vh" }}>
			<div className="row">
				<div className="col-12 d-flex justify-content-center flex-column">
					<img className="mx-auto" src="/icons/feather.png" alt="" style={{ maxWidth: "200px" }} />
					<h1 className="text-primary mx-auto">Were Chatting</h1>
				</div>

				<div className="col-12 row ms-3">
					<form className="col-12 col-md-6 m-auto" id="form_login" onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="email" className="form-label">
								Email
							</label>
							<input name="email" onChange={handleChange} type="email" className="form-control" id="email" />
						</div>
						<div className="mb-3">
							<label htmlFor="password" className="form-label">
								Password
							</label>
							<input name="password" onChange={handleChange} type="password" className="form-control" id="password" />
						</div>
					</form>
				</div>
				<div className="col-12 d-flex justify-content-center flex-column">
					<button type="submit" className="btn btn-primary mx-auto" form="form_login">
						Login
					</button>
					<Link className="text-primary border-0 mx-auto bg-transparent text-decoration-none" to={"/register"}>
						Register
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
