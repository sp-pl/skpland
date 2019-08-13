import React from 'react'
import './nav_button.scss'

class NavButton extends React.Component{
	constructor(props){
		super(props)
		this.buttonAnimation = this.buttonAnimation.bind(this)
		this.navButton = React.createRef();
		this.firstNavSpan = React.createRef();
		this.secondNavSpan = React.createRef();
		this.thirdNavSpan = React.createRef();
	}
	componentWillReceiveProps(nextProps) {
		this.buttonAnimation(nextProps.navState)
	}



	buttonAnimation(navBool){

		const spanArray = [
			this.firstNavSpan.current,
			this.secondNavSpan.current,
			this.thirdNavSpan.current
		];
		console.log(navBool)
		if(navBool){
			let i = 0;
			this.navButton.current.classList.add('active')
			//animation for hide Horizontal spans on first click
			let hideHorizontalSpans = setInterval(() => {
				spanArray[i].classList.add('show-menu-state')
				i++
				if(i === 3){
					clearInterval(hideHorizontalSpans)
					turnLastTwoSpans()
				}

			},200)
			//end of: animation for remove horizontal spans on first click
			
			//animation for show X sign
			function turnLastTwoSpans(){
				setTimeout(() => {
						spanArray[1].classList.add('close-second-span','show-menu-state')
						spanArray[2].classList.add('close-third-span','show-menu-state')
				},300)
			}
			//end of: animation for show x sign
		}else{

		}
	}

	render(){
		return(
			<div className="nav-button-container">
				<div 
					className="nav-button"
					ref={this.navButton}
					// onClick={(evt) => this.buttonAnimation(evt)}
					>
					<span 
						className="nav-span"
						ref={this.firstNavSpan}>
						<span className="inner"></span>
					</span>
					<span 
						className="nav-span"
						ref={this.secondNavSpan}>
						<span className="inner"></span>
					</span>
					<span 
						className="nav-span"
						ref={this.thirdNavSpan}>
						<span className="inner"></span>
					</span>
				</div>
			</div>	
		)
	}
}

export default NavButton

 