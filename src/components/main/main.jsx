import React from 'react';
import Nav from '../nav/nav.jsx';
import './main.scss';

class Main extends React.Component{
	constructor(){
		super()
	};

	render(){
		return(
			<div class="mainframe">
				<Nav />
			</div>
		);
	}
}

export default Main;