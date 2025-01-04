import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar fixed-bottom navbar-expand bg-body-tertiary">
			<div className="container-fluid">
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-utama" aria-controls="navbar-utama" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbar-utama">
					<ul className="navbar-nav m-auto mb-2 mb-lg-0 text-center">
						<li className="nav-item mx-3">
							<Link className={`nav-link ${location.pathname === "/chats" ? "fw-bold text-primary" : ""}`} to="/chats">
								<i className="bi bi-chat"></i>
								<p>Chats</p>
							</Link>
						</li>
						<li className="nav-item mx-3">
							<Link className={`nav-link ${location.pathname === "/settings" ? "fw-bold text-primary" : ""}`} to="/settings">
								<i className="bi bi-gear"></i>
								<p>Settings</p>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
