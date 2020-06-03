/** @format */

import React from "react";

import Button from "@material-ui/core/Button";

export default class Uploader extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			file: { name: "" },
		};

		this.openInput = this.openInput.bind(this);
		this.handFile = this.handFile.bind(this);
	}

	openInput() {
		this.refs.file.click();
	}

	handFile(ev) {
		let file = ev.target.files[0];

		if (!file) return;
		console.log(file);
		this.setState({
			file: file,
		});

		this.props.getFile(this.props.type, file);
	}

	render() {
		return (
			<div>
				<input
					type='file'
					style={{ display: "none" }}
					ref='file'
					onChange={this.handFile}
				/>
				<span style={{ marginRight: "0.5em" }}>{this.state.file.name}</span>
				<Button
					variant='contained'
					label={this.props.label}
					primary={true}
					onClick={this.openInput}
				/>
			</div>
		);
	}
}
