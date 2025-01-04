import React from "react";
import { Link } from "react-router-dom";

const Onboarding = () => {
	return (
		<div className="container-fluid" style={{ width: "100vw", height: "100vh" }}>
			<div className="row" style={{ height: "100vh" }}>
				<div className="col-12 d-flex justify-content-center flex-column">
					<img className="mx-auto" src="/icons/feather.png" alt="" style={{ maxWidth: "200px" }} />
					<h1 className="text-primary mx-auto">Were Chatting</h1>
				</div>
				<div className="col-12 d-flex justify-content-center flex-column">
					<p className="text-center fs-2 text-primary fw-bold">Lorem ipsum dolor sit amet.</p>
					<p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus fuga error eos repudiandae totam at.</p>
					<Link className="btn btn-primary mx-auto mt-5" to="/login">
						Next
					</Link>
					<Link className="text-primary border-0 mx-auto bg-transparent text-decoration-none" to={"/login"}>
						Skip
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Onboarding;
