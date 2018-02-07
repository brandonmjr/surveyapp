import React, {Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component {

	renderContent(){
		switch(this.props.auth){
			case false:
				return <a href="/auth/google">Login with Google</a>;
			case null:
				return '';
			default:
				return <a href="/api/logout">Logout</a>;
		}
	}

	render(){
		return(
			<div>
				 <nav>
				    <div className="nav-wrapper" style={{backgroundColor: '#1a004e'}}>
				     <div className="container">
				      <a href="#" className="brand-logo">Logo</a>
				      <ul id="nav-mobile" className="right hide-on-med-and-down">
				        <li>{this.renderContent()}</li>
				      </ul>
				      </div>
				    </div>
				  </nav>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps)(Header);