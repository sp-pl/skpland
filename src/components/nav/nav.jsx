import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import We from '../we/we.jsx';
import Services from '../services/services.jsx';
import Contact from '../contact/contact.jsx';


import './nav.scss';

class Nav extends React.Component{
	constructor(){
		super();

	}

	render(){
		return(
			<Router>
				<div>
					<nav className="main-nav">
						Menu icon
						<ul>
							<li>
								<Link to="/"> Start </Link>
							</li>
							<li>
								<Link to="/uslugi">Usługi</Link>
							</li>
							<li>
								<Link to="kontakt">Kontakt</Link>
							</li>
						</ul>

					</nav>
					<Route path="/" exact component={We} />
					<Route path="/uslugi" exact component={Services} />
					<Route path="/kontakt" exact component={Contact} />
				</div>
			</Router>		
		)
	}
}
export default Nav;