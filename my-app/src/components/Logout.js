import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {logUserOut} from './actions';

var Logout = React.createClass ({
	render: function(){
		return (
			<div className="register-container">
				<input type="submit" id="submit" onClick={this.onSubmit} value="Logout" className="submit-button"></input>
			</div>
		)
	}
})