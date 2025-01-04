import React from "react";
import { Link } from "react-router-dom";

const Username = () => {
	return (
		<div className="overflow-hidden" style={{ height: "88vh" }}>
			<div className="container-fluid px-2 sticky-top align-items-center bg-white py-4">
				<div className="d-flex justify-content-center align-items-center mb-5">
					<Link to={"/settings"} className="fs-2 me-auto">
						<i className="bi bi-arrow-left-square text-secondary"></i>
					</Link>
					<p className="bg-white me-auto fs-4 fw-bold text-center">Change Username</p>
				</div>

				<div className="row ms-3">
					<div className="col-6 d-flex">
						<img className="rounded-circle" src="/icons/drink.jpg" alt="" style={{ maxWidth: "75px", maxHeight: "75px" }} />
						<div className="ms-5">
							<p className="mx-auto fw-bold fs-3">Nusatech</p>
							<p className="mx-auto">nusatech@company.id</p>
						</div>
					</div>
					<form className="mt-5">
						<div className="mb-3">
							<label htmlFor="username" className="form-label">
								Old Username
							</label>
							<input type="text" className="form-control" id="old_username" />
						</div>
						<div className="mb-3">
							<label htmlFor="username" className="form-label">
								New Username
							</label>
							<input type="text" className="form-control" id="new_username" />
						</div>
						<div className="mb-3">
							<label htmlFor="password" className="form-label">
								Password
							</label>
							<input type="password" className="form-control" id="password" />
						</div>
					</form>
					<div className="col-12 d-flex justify-content-center flex-column ">
						<button className="text-primary border-0 mx-auto bg-transparent">Save</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Username;
