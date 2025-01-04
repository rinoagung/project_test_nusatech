import React from "react";
import { Link } from "react-router-dom";

const Detail_chat = () => {
	return (
		<>
			<div style={{ height: "100vh" }}>
				<div className="container-fluid px-2 sticky-top align-items-center bg-white py-4">
					<div className="row d-flex justify-content-center align-items-center">
						<div className="col-12 d-flex">
							<Link to={"/chats"} className="me-5" style={{ fontSize: "2.5rem" }}>
								<i className="bi bi-arrow-left-square text-secondary"></i>
							</Link>
							<img className="rounded-circle" src="/icons/drink.jpg" alt="" style={{ maxWidth: "75px", maxHeight: "75px" }} />
							<div className="ms-5">
								<p className="mx-auto fw-bold fs-3">Nusatech</p>
								<p className="mx-auto">nusatech@company.id</p>
							</div>
							<Link to={"/chatting"} className="fs-2 ms-auto me-3 mt-2">
								<i className="bi bi-three-dots text-secondary border border-3 border-black px-1 py-0 rounded"></i>
							</Link>
						</div>
					</div>
				</div>
				<div className="container-fluid pb-5">
					<div className="row p-3">
						<div className="text-center position-relative my-4">
							<hr className="my-2" />
							<span className="position-absolute top-50 start-50 translate-middle bg-white px-3">Sunday, July 15</span>
						</div>

						<p className="mb-4 fw-bold text-primary">Gofany</p>
						<div className="col-8 bg-body-secondary p-3 mb-5" style={{ borderRadius: "15px 15px 15px 0px" }}>
							<p>Hallo, saya mendapat laporan dari pengguna, ada yang bisa saya dibantu</p>
							<small className="mt-3 d-inline-block" style={{ fontSize: "12px" }}>
								12:30
							</small>
						</div>
						<p className="mb-4 fw-bold text-primary text-end">You</p>
						<div className="col-8 offset-4 bg-primary p-3 mb-5" style={{ borderRadius: "15px 15px 0px" }}>
							<p>Hallo, saya mendapat laporan dari pengguna, ada yang bisa saya dibantu</p>
							<small className="mt-3 d-inline-block" style={{ fontSize: "12px" }}>
								12:30
							</small>
						</div>

						<div className="text-center position-relative my-4">
							<hr className="my-2" />
							<span className="position-absolute top-50 start-50 translate-middle bg-white px-3">Sunday, July 15</span>
						</div>
						<p className="mb-4 fw-bold text-primary">Gofany</p>
						<div className="col-8 bg-body-secondary p-3 mb-5" style={{ borderRadius: "15px 15px 15px 0px" }}>
							<p>Hallo, saya mendapat laporan dari pengguna, ada yang bisa saya dibantu</p>
							<small className="mt-3 d-inline-block" style={{ fontSize: "12px" }}>
								12:30
							</small>
						</div>
						<p className="mb-4 fw-bold text-primary text-end">You</p>
						<div className="col-8 offset-4 bg-primary p-3 mb-5" style={{ borderRadius: "15px 15px 0px" }}>
							<p>Hallo, saya mendapat laporan dari pengguna, ada yang bisa saya dibantu</p>
							<small className="mt-3 d-inline-block" style={{ fontSize: "12px" }}>
								12:30
							</small>
						</div>
					</div>
				</div>
			</div>
			<div className="fixed-bottom bg-body-tertiary py-3">
				<div className="container-fluid">
					<div className="row d-flex justify-content-center align-items-center">
						<div className="col-12 d-flex">
							<Link to={"/chats"} className="fs-1 me-3">
								<i className="bi bi-plus text-secondary"></i>
							</Link>
							<form className="w-100 m-auto">
								<div>
									<input type="text" className="form-control" id="old_username" placeholder="Text Message" />
								</div>
							</form>
							<Link to={"/chatting"} className="fs-2 mx-3">
								<i className="bi bi-chat-left-dots text-secondary fs-4"></i>
								{/* <i className="bi bi-three-dots text-secondary border border-3 border-black px-1 py-0 rounded"></i> */}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Detail_chat;
