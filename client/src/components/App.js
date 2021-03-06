import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions'

import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <div className="container"><h2>Dashboard</h2></div>
const SurveyNew = () => <h2>SurveyNew</h2>

class App extends Component{
	componentDidMount(){
		this.props.fetchUser();
	}
	render(){
		return (
			<div>
				<Header/>
				<BrowserRouter>
					<div> 
						<Route exact path="/" component={Landing} />
						<Route exact path="/surveys" component={Dashboard} />
						<Route path="/surveys/new" component={SurveyNew} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
	
}

export default connect(null, actions)(App);