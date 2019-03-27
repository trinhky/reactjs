import React, { Component } from 'react';
class Content extends Component {
	constructor(props){
		super(props);
		this.state={
			old_price: 100,
		}
	}
	getstate= () =>{
		return this.state.old_price;
	}
	render() {
		let {name,price} = this.props;
		return(
			<div className="content col-xl-6">
				name: {name} <br/>
				price: {price}
				<h1 className="h1">Content</h1>
			</div>
		);
	}
}

export default Content;