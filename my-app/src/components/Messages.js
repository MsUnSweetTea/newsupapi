import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {getMessages} from './actions';

var Messages = React.createClass ({
	render: function(){
		return (
			<div className="messages-container">
				<input type="submit" id="submit" onClick={this.onSubmit} value="Messages" className="submit-button"></input>
			</div>
		)
	}
})