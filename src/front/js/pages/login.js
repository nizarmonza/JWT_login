import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
			<div>
				<input type="text" placeholder="email" value={email} onChange={() => setEmail(e.target.value)}/>
				<input type="password" placeholder="password" value={password} onChange={() => setPassword(e.target.value)}/>
				<button>Login</button>			
			</div>
		</div>
	);
};
