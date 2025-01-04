import React from "react";
import { Link } from "react-router-dom";

const Password = () => {
	return (
		<div className="overflow-hidden" style={{ height: "88vh" }}>
			<div className="container-fluid px-2 sticky-top align-items-center bg-white py-4">
				<div className="d-flex justify-content-center align-items-center mb-5">
					<Link to={"/settings"} className="fs-2 me-auto">
						<i className="bi bi-arrow-left-square text-secondary"></i>
					</Link>
					<p className="bg-white me-auto fs-4 fw-bold text-center">Password</p>
				</div>

				<div className="row ms-3">
					<div className="col-12 d-flex mb-5">
						<img className="m-auto" src="/icons/lock.png" alt="" style={{ maxWidth: "75px", maxHeight: "75px" }} />
					</div>
					<p>Ubah Password</p>
					<form className="mt-4">
						<div className="mb-3">
							<label htmlFor="old_password" className="form-label">
								Password Lama
							</label>
							<input type="password" className="form-control" id="old_password" />
						</div>
						<div className="mb-3">
							<label htmlFor="new_password" className="form-label">
								Password Baru
							</label>
							<input type="password" className="form-control" id="new_password" />
						</div>
						<div className="mb-3">
							<label htmlFor="confirm_password" className="form-label">
								Confirm Password
							</label>
							<input type="password" className="form-control" id="confirm_password" />
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

export default Password;
