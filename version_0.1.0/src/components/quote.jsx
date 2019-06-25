import React from 'react';
import Config from '../config/config.js';
export default class Quote extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			quote: Config.defaultQuote
		}
		this.getQuote = this.getQuote.bind(this);
	}

	getQuote(){
		fetch(Config.quoteUrl)
		.then(response => {
			if(!response.ok){
				throw Error(response.statusText);
			}
			return response.json();
		})
	  	.then(data => {
		    	this.setState({
		    		quote: data.quote
		    	});
		    })
	  	.catch(error =>{
	  		console.log(error);
	  	})

	}

	componentWillMount(){
		this.getQuote();
	}

	render(){
		return(
			<p>{`"${this.state.quote}"`}</p>
			);
	}
}