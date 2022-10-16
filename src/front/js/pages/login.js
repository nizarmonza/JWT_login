import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";


export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const token = sessionStorage.getItem("token");
	const navigate = useNavigate("");
	console.log("This is your token", store.token);
	

	const handleClick = () => {
		actions.login(email, password)
		
		
	};

	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
			{token && token !="" && token != undefined ? ("You are logged in with this token" + token): (

			<div>
				<input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
				<input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
				<button onClick={handleClick}>Login</button>			
			</div>
			)}
		</div>
	);
};


