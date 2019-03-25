import React, { Component } from 'react';
import Header from './Header';
import Left from './Left';
import Right from './Right';
import Content from './Content'
import Footer from './Footer';


class Com_1 extends Component {
	render() {
		return(
			<div>
				<h1>Hello Word</h1>
				<Header/>
				<Left/>
				<Content/>
				<Right/>
				<Footer/>
			</div>
		);
	}
}

export default Com_1;