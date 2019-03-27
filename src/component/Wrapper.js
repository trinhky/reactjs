import React, { Component } from 'react';
import Header from './Header';
import Left from './Left';
import Right from './Right';
import Content from './Content'
import Footer from './Footer';
import '../index.css';


class Wrapper extends Component {
	constructor(props){
		super(props);

		this.state= {
			name: 2,
			price: 10
		}
	}
	handleClick= () =>{
		this.setState({
			name: this.state.name + 1,
			price: this.state.price + 1,
		});
	}

	componentDidMount(){
		let data = {
			name: 22,
			price: 44,
		};
		this.setState({
			name: data.name,
			price: data.price,
		});
	}

	callContent = () => {
		console.log(this.refs.content.getstate());
	}

	render() {
		// let name= this.state.name;
		// let price= this.state.price;
		let {name, price} = this.state;
		console.log(name,' ',price);

		return(
			<div>
				<h1>Hello Word</h1>
				<input type='button' value='click' onClick={() => this.handleClick()}></input>
				<input type='button' value='click' onClick={() => this.callContent()}></input>
				<Header/>
				<div className="page-home d-flex-xl">
					<Left/>
					<Content ref="content" name={name} price={price} />
					<Right/>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default Wrapper;