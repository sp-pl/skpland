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
			isOpen : false,
			isAnimated : false
		}
		this.navUlContainer = React.createRef();
		this.menuListControl = this.menuListControl.bind(this);

	}


	menuListControl(){

		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}), () => {
			if(this.state.isOpen){
				//open menu
				this.navUlContainer.current.classList.add('active')
			}else{
				//close menu
				this.navUlContainer.current.classList.remove('active')
			}

		})

		//animation timer
		this.setState(prevState => ({
			isAnimated: !prevState.isAnimated
		}), () => {
			setTimeout(() => {
				this.setState(prevState => ({
					isAnimated: !prevState.isAnimated
				}))
			},1000)
		})
		//end of: animation timer	
	}	
	
	render(){
		return(
			<Router>
					<nav className="main-nav" onClick={() => this.menuListControl()} >
						<NavButton navState={this.state.isOpen}/>
						<div 
							className="nav-ul-container"
							ref={this.navUlContainer}>
							<ul className="nav-ul">
								<li className="nav-li">
									<Link 
										to="/"
										className="nav-a"> Start </Link>
								</li>
								<li className="nav-li">
									<Link 
										to="/uslugi"
										className="nav-a">Usługi</Link>
								</li>
								<li className="nav-li">
									<Link 
										to="kontakt"
										className="nav-a">Kontakt</Link>
								</li>
							</ul>
							<div className="nav-like">
								<div id="fb-root"></div>
								<script async defer crossOrigin="anonymous" src="https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v4.0&appId=1954006061594073&autoLogAppEvents=1"></script>
								<div class="fb-like" data-href="https://www.facebook.com/Sklepolandpl-464502657455570/?ref=py_c" data-width="" data-layout="button_count" data-action="like" data-size="large" data-show-faces="false" data-share="false"></div>
							</div>
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