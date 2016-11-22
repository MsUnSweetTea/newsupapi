import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {createUserRequest} from './actions';


var Register = React.createClass ({
	render: function(){
		return (
			<div className="register-container">
				<input type="submit" id="submit" onClick={this.onSubmit} value="Register" className="submit-button"></input>
			</div>
		)
	}
})