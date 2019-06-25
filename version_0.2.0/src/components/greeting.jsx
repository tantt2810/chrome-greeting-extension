import React from 'react';
import greeting from '../lib/greeting.js';
export default class Greeting extends React.Component {
	render(){
		return(
			<div className="greeting">{ greeting.getGreetingMessage() }</div>
			);
	}
}