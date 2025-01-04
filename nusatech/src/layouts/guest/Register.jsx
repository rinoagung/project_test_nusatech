import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
	const navigate = useNavigate();
	const [credentials, setCredentials] = useState({
		name: "",
		username: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCredentials({ ...credentials, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { name, username, email, password } = credentials;

		try {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/api/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name, username, email, password }),
			});

			const data = await response.json();

			if (response.ok) {
				// localStorage.setItem("token", data.data.token);
				// dispatch(setError(""));
				Swal.fire({
					title: "Registrasi Berhasil",
					text: response.message,
					icon: "success",
				}).then((result) => {
					if (result.isConfirmed) {
						navigate("/login");
					}
				});
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
					<form id="form_register" className="col-12 col-md-6 m-auto" onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="name" className="form-label">
								Name
							</label>
							<input name="name" type="text" className="form-control" id="name" onChange={handleChange} />
						</div>
						<div className="mb-3">
							<label htmlFor="username" className="form-label">
								Username
							</label>
							<input name="username" type="text" className="form-control" id="username" onChange={handleChange} />
						</div>
						<div className="mb-3">
							<label htmlFor="email" className="form-label">
								Email
							</label>
							<input name="email" type="email" className="form-control" id="email" onChange={handleChange} />
						</div>
						<div className="mb-3">
							<label htmlFor="password" className="form-label">
								Password
							</label>
							<input name="password" type="password" className="form-control" id="password" onChange={handleChange} />
						</div>
					</form>
				</div>
				<div className="col-12 d-flex justify-content-center flex-column">
					<button type="submit" className="btn btn-primary mx-auto" form="form_register">
						Register
					</button>
					<Link className="text-primary border-0 mx-auto bg-transparent text-decoration-none" to={"/login"}>
						Login
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Register;
