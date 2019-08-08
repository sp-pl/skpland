import React from 'react';
import './we.scss';

class We extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div>
				<header className="main-header">
					<h1>SKLEPOLAND<span>.</span>PL</h1>
				</header>
				
				Sklepoland __LOGO__<br/>

				Parę słów o nas<br/>
				<a href="#">cta</a>
				<br/>

				Opinie klientów<br/>
			</div>
		)
	}
}

export default We;