import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Settings = () => {
	const navigate = useNavigate();
	return (
		<div className="overflow-hidden">
			<div className="container-fluid px-2 sticky-top align-items-center bg-white py-4">
				<p className="text-primary bg-white ms-3 fs-3 fw-bold mb-4">Settings</p>

				<div className="row ms-3">
					<div className="col-6 d-flex">
						<img className="rounded-circle" src="/icons/drink.jpg" alt="" style={{ maxWidth: "75px", maxHeight: "75px" }} />
						<div className="ms-5">
							<p className="mx-auto fw-bold fs-3">Nusatech</p>
							<p className="mx-auto">nusatech@company.id</p>
						</div>
					</div>

					<Link to={"/username"} className="col-12 d-flex my-2 mt-5 text-decoration-none text-black">
						<i className="bi bi-person-circle fs-1"></i>
						<div className="ms-3 d-flex justify-content-between w-100 align-items-center">
							<div>
								<p className="mx-auto fs-3">Change Username</p>
							</div>
							<div>
								<p className="text-end">
									<i className="bi bi-caret-right-fill"></i>
								</p>
							</div>
						</div>
					</Link>
					<Link to={"/password"} className="col-12 d-flex my-2 mt-5 text-decoration-none text-black">
						<i className="bi bi-lock fs-1"></i>
						<div className="ms-3 d-flex justify-content-between w-100 align-items-center">
							<div>
								<p className="mx-auto fs-3">Change Password</p>
							</div>
							<div>
								<p className="text-end">
									<i className="bi bi-caret-right-fill"></i>
								</p>
							</div>
						</div>
					</Link>

					<div className="col-12 d-flex justify-content-center flex-column">
						<button
							className="text-primary border-0 mx-auto bg-transparent"
							onClick={() => {
								localStorage.removeItem("token");
								navigate("/");
							}}
						>
							Logout
						</button>
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<div className="overflow-hidden" style={{ width: "95vw", height: "29vh" }}></div>
			</div>
		</div>
	);
};

export default Settings;
