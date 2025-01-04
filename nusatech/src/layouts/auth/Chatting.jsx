import React from "react";
import { Link } from "react-router-dom";

const Chatting = () => {
	return (
		<div className="overflow-hidden" style={{ height: "88vh" }}>
			<div className="container-fluid px-2 sticky-top align-items-center bg-white py-4">
				<div className="d-flex justify-content-center align-items-center mb-5">
					<Link to={"/chats"} className="fs-2 me-auto">
						<i className="bi bi-arrow-left-square text-secondary"></i>
					</Link>
					<p className="bg-white me-auto fs-4 fw-bold text-center">Chatting</p>
				</div>

				<div className="row ms-3">
					<p className="fw-bold">Input Username</p>
					<form className="mt-3">
						<div className="mb-3">
							<label htmlFor="username" className="form-label">
								Input Username
							</label>
							<input type="text" className="form-control" id="old_username" placeholder="Input Username" />
						</div>
					</form>
					<div className="col-12 d-flex justify-content-center flex-column ">
						<Link className="btn btn-primary mx-auto" to="/detail_chat">
							Continue
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Chatting;
