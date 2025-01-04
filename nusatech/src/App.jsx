import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Onboarding from "./layouts/guest/Onboarding";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { GuestRoute, ProtectedRoute } from "./layouts/ProtectedRoute";
import Chats from "./layouts/auth/Chats";
import Settings from "./layouts/auth/Settings";
import Username from "./layouts/auth/Username";
import Password from "./layouts/auth/Password";
import Chatting from "./layouts/auth/Chatting";
import Detail_chat from "./layouts/auth/Detail_chat";
import Login from "./layouts/guest/Login";
import Register from "./layouts/guest/Register";

function App() {
	return (
		<Router>
			<Routes>
				{/* <Route path="/register" element={<GuestRoute> <RegistrationForm /> </GuestRoute>} /> */}
				<Route
					path="/"
					element={
						<GuestRoute>
							{" "}
							<Onboarding />{" "}
						</GuestRoute>
					}
				/>
				<Route
					path="/chats"
					element={
						<ProtectedRoute>
							{" "}
							<Chats />{" "}
						</ProtectedRoute>
					}
				/>
				<Route
					path="/settings"
					element={
						<ProtectedRoute>
							{" "}
							<Settings />{" "}
						</ProtectedRoute>
					}
				/>
				<Route
					path="/username"
					element={
						<ProtectedRoute>
							{" "}
							<Username />{" "}
						</ProtectedRoute>
					}
				/>
				<Route
					path="/password"
					element={
						<ProtectedRoute>
							{" "}
							<Password />{" "}
						</ProtectedRoute>
					}
				/>
				<Route
					path="/chatting"
					element={
						<ProtectedRoute>
							{" "}
							<Chatting />{" "}
						</ProtectedRoute>
					}
				/>
				<Route
					path="/detail_chat"
					element={
						<ProtectedRoute>
							{" "}
							<Detail_chat />{" "}
						</ProtectedRoute>
					}
				/>
				<Route
					path="/login"
					element={
						<GuestRoute>
							{" "}
							<Login />{" "}
						</GuestRoute>
					}
				/>
				<Route
					path="/register"
					element={
						<GuestRoute>
							{" "}
							<Register />{" "}
						</GuestRoute>
					}
				/>
				{/* 
                <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                <Route path="/top-up" element={<ProtectedRoute><TopUp /></ProtectedRoute>} />
                <Route path="/transactions" element={<ProtectedRoute><Transactions /></ProtectedRoute>} />
                <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} /> */}
			</Routes>
		</Router>
	);
}

export default App;
