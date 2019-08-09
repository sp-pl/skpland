import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import We from '../we/we.jsx';
import Services from '../services/services.jsx';
import Contact from '../contact/contact.jsx';
import NavButton from './nav_button.jsx';

import './nav.scss';

class Nav extends React.Component{
	constructor(){
		super();
		this.state = {
			isOpen : false
		}
		this.navUlContainer = React.createRef();
		this.menuListControl = this.menuListControl.bind(this);

	}


	menuListControl(){
		if(!this.state.isOpen){
			this.setState(prevState => ({
				isOpen: !prevState.isOpen
			}))
			setTimeout(() => {
				this.navUlContainer.current.classList.add('active')
			},100)
		}else{

		}

		function updater(){
			return this.state.isOpen
		}
	}
	
	render(){
		return(
			<Router>
					<nav className="main-nav" onClick={() => this.menuListControl()} >
						<NavButton navState={() => this.updater()}/>
						<div 
							className="nav-ul-container"
							ref={this.navUlContainer}>
							<ul className="nav-ul">
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
						</div>
					</nav>
					<div className="dupa">		
						<Route path="/" exact component={We} />
						<Route path="/uslugi" exact component={Services} />
						<Route path="/kontakt" exact component={Contact} />
					</div>
			</Router>		
		)
	}
}
export default Nav;