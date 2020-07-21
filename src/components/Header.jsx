import React, { Component } from "react";
import "./Header.css";
import { AiOutlinePlus } from "react-icons/ai";

class Header extends Component {
	render() {
		return (
			<div className="Header-div">
				<h1 id="appName">vidéki law</h1>
				<button id="addButton">
					<AiOutlinePlus size="2.5rem" id="plusIcon" />
					Add
				</button>
			</div>
		);
	}
}

export default Header;
