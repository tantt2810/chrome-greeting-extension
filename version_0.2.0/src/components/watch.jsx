import React from 'react';
import '../styles/watch.css';
export default class Watch extends React.Component {
	constructor(props){
		super(props);
		this.timer = this.timer.bind(this);
		this.state = {
			displayDate : '',
	   		hour : '',
	   		minute : '',
	   		second : ''
		}
	}

	componentDidMount() {
	   let intervalId = setInterval(this.timer, 1000);
	   this.setState({intervalId: intervalId});
	}

	componentWillUnmount() {
	   clearInterval(this.state.intervalId);
	}

	timer() {
		let date = new Date()
		let displayDate = date.toDateString();
		let hour =  ('0' + date.getHours()).slice(-2);
		let minute =  ('0' + date.getMinutes()).slice(-2);
		let second =  ('0' + date.getSeconds()).slice(-2);
	   	this.setState({ 
	   		displayDate,
	   		hour,
	   		minute,
	   		second
	   	});
	}

	render(){
		return(
			<div className='watch'>
	            <div className='point-set-1'>
	                <div className='point-1'></div>
	                <div className='point-2'></div>
	                <div className='point-3'></div>
	                <div className='point-4'></div>
	            </div>
	            <div className='point-set-2'>
	                <div className='point-1'></div>
	                <div className='point-2'></div>
	                <div className='point-3'></div>
	                <div className='point-4'></div>
	            </div>
	            <div className='point-set-3'>
	                <div className='point-1'></div>
	                <div className='point-2'></div>
	                <div className='point-3'></div>
	                <div className='point-4'></div>
	            </div>
	            <div className='point-set-4'>
	                <div className='point-1'></div>
	                <div className='point-2'></div>
	                <div className='point-3'></div>
	                <div className='point-4'></div>
	            </div>
	            <div className='point-set-5'>
	                <div className='point-1'></div>
	                <div className='point-2'></div>
	                <div className='point-3'></div>
	                <div className='point-4'></div>
	            </div>
	            <div className='point-set-6'>
	                <div className='point-1'></div>
	                <div className='point-2'></div>
	                <div className='point-3'></div>
	                <div className='point-4'></div>
	            </div>
	            <div className='point-set-7'>
	                <div className='point-1'></div>
	                <div className='point-2'></div>
	                <div className='point-3'></div>
	                <div className='point-4'></div>
	            </div>
	            <div className='point-set-8'>
	                <div className='point-1'></div>
	                <div className='point-2'></div>
	                <div className='point-3'></div>
	                <div className='point-4'></div>
	            </div>
	            <div className='point-set-9'>
	                <div className='point-1'></div>
	                <div className='point-2'></div>
	                <div className='point-3'></div>
	                <div className='point-4'></div>
	            </div>
	            <div className='point-set-10'>
	                <div className='point-1'></div>
	                <div className='point-2'></div>
	                <div className='point-3'></div>
	                <div className='point-4'></div>
	            </div>
	            <div className='point-set-11'>
	                <div className='point-1'></div>
	                <div className='point-2'></div>
	                <div className='point-3'></div>
	                <div className='point-4'></div>
	            </div>
	            <div className='point-set-12'>
	                <div className='point-1'></div>
	                <div className='point-2'></div>
	                <div className='point-3'></div>
	                <div className='point-4'></div>
	            </div>
	            <div className='point-set-13'>
	                <div className='point-1'></div>
	                <div className='point-2'></div>
	                <div className='point-3'></div>
	                <div className='point-4'></div>
	            </div>
	            <div className='point-set-14'>
	                <div className='point-1'></div>
	                <div className='point-2'></div>
	                <div className='point-3'></div>
	                <div className='point-4'></div>
	            </div>
	            <div className='point-set-15'>
	                <div className='point-1'></div>
	                <div className='point-2'></div>
	                <div className='point-3'></div>
	                <div className='point-4'></div>
	            </div>
	            <div className='ring'>
	                <div className='mask-1'>
	                    <div className='spin'></div>
	                </div>
	                <div className='mask-2'>
	                    <div className='spin'></div>
	                </div>
	            </div>
	            <svg className='spinner' viewBox='0 0 202 202'>
	                <circle cx='101' cy='101' r='99.5'></circle>
	            </svg>
	            <div className='date'>{this.state.displayDate}</div>
	            <div className='time'>{this.state.hour + ':' + this.state.minute}</div>
	            <div className='beat'><span className="fa fa-heart"></span></div>
	            <div className='energy'>{this.state.second}</div>
	        </div>
			)
	}
}
