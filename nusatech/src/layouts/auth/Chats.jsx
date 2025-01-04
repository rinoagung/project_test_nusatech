import React from "react";
import { Link } from "react-router-dom";

const Chats = () => {
	return (
		<>
			<div className="container-fluid px-2 sticky-top align-items-center bg-white py-4">
				<p className="text-primary bg-white ms-3 fs-3 fw-bold mb-4">Chats</p>

				<div className="row ms-3">
					<Link className="col-6 d-flex text-decoration-none text-black" to={"/chatting"}>
						<img className="rounded-circle" src="/icons/drink.jpg" alt="" style={{ maxWidth: "75px", maxHeight: "75px" }} />
						<div className="ms-5">
							<p className="mx-auto fw-bold fs-3">Nusatech</p>
							<p className="mx-auto">nusatech@company.id</p>
						</div>
					</Link>

					<div className="col-12 mt-5 mb-2">
						<ul className="nav nav-underline nav-fill">
							<li className="nav-item">
								<Link className="nav-link active" to="#">
									All
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-secondary" to="#">
									Groups
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-secondary" to="#">
									Unread
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="container-fluid" style={{ width: "95vw", height: "100vh" }}>
				<div className="row">
					<div className="col-12 row px-2 align-items-center">
						<Link className="col-12 d-flex my-2 text-decoration-none text-black" to={"/detail_chat"}>
							<img className="rounded-circle" src="/icons/drink.jpg" alt="" style={{ maxWidth: "75px", maxHeight: "75px" }} />
							<div className="ms-4 d-flex justify-content-between w-100">
								<div>
									<p className="mx-auto fw-bold fs-3">Jane Smith</p>
									<p className="mx-auto">jane.smith@gmail.com</p>
								</div>
								<div>
									<p className="mx-auto text-secondary">10 hours ago</p>
									<p className="text-end">
										<span className="badge text-bg-primary rounded-circle">7</span>
									</p>
								</div>
							</div>
						</Link>
						<Link className="col-12 d-flex my-2 text-decoration-none text-black" to={"/detail_chat"}>
							<img className="rounded-circle" src="/icons/drink.jpg" alt="" style={{ maxWidth: "75px", maxHeight: "75px" }} />
							<div className="ms-4 d-flex justify-content-between w-100">
								<div>
									<p className="mx-auto fw-bold fs-3">John Doe</p>
									<p className="mx-auto">john.doe@company.com</p>
								</div>
								<div>
									<p className="mx-auto text-secondary">3 hours ago</p>
									<p className="text-end">
										<span className="badge text-bg-primary rounded-circle">4</span>
									</p>
								</div>
							</div>
						</Link>
						<Link className="col-12 d-flex my-2 text-decoration-none text-black" to={"/detail_chat"}>
							<img className="rounded-circle" src="/icons/drink.jpg" alt="" style={{ maxWidth: "75px", maxHeight: "75px" }} />
							<div className="ms-4 d-flex justify-content-between w-100">
								<div>
									<p className="mx-auto fw-bold fs-3">Michael Johnson</p>
									<p className="mx-auto">michael.johnson@yahoo.com</p>
								</div>
								<div>
									<p className="mx-auto text-secondary">5 hours ago</p>
									<p className="text-end">
										<span className="badge text-bg-primary rounded-circle">2</span>
									</p>
								</div>
							</div>
						</Link>
						<Link className="col-12 d-flex my-2 text-decoration-none text-black" to={"/detail_chat"}>
							<img className="rounded-circle" src="/icons/drink.jpg" alt="" style={{ maxWidth: "75px", maxHeight: "75px" }} />
							<div className="ms-4 d-flex justify-content-between w-100">
								<div>
									<p className="mx-auto fw-bold fs-3">Emily Davis</p>
									<p className="mx-auto">emily.davis@outlook.com</p>
								</div>
								<div>
									<p className="mx-auto text-secondary">1 hour ago</p>
									<p className="text-end">
										<span className="badge text-bg-primary rounded-circle">6</span>
									</p>
								</div>
							</div>
						</Link>
						<Link className="col-12 d-flex my-2 text-decoration-none text-black" to={"/detail_chat"}>
							<img className="rounded-circle" src="/icons/drink.jpg" alt="" style={{ maxWidth: "75px", maxHeight: "75px" }} />
							<div className="ms-4 d-flex justify-content-between w-100">
								<div>
									<p className="mx-auto fw-bold fs-3">David Lee</p>
									<p className="mx-auto">david.lee@company.com</p>
								</div>
								<div>
									<p className="mx-auto text-secondary">7 hours ago</p>
									<p className="text-end">
										<span className="badge text-bg-primary rounded-circle">3</span>
									</p>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Chats;
