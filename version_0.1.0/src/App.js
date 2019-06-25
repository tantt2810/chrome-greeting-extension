import React, { Component } from 'react';
import './styles/all.min.css';
import './styles/index.css';
import Search from './components/search.jsx';
import Watch from './components/watch.jsx';
import Greeting from './components/greeting.jsx';
import SocialLink from './components/socialLink.jsx';
import Quote from './components/quote.jsx';
import Config from './config/config.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.getBackgroundImage = this.getBackgroundImage.bind(this);
        this.state = {
            // backgroundUrl: Config.defaultBackgroundUrl
        };
        this.getBackgroundImage();
    }
    
    getBackgroundImage() {
    	fetch(Config.backgroundUrl, 
            {
                headers: 
                    {
                        'Accept': 'application/json', 
                        'Access-Control-Allow-Origin': '*',
                        'mode': 'no-cors'
                    }
            })
    	.then(response => {
            if(!response.ok){
                throw Error(response.statusText);
            }
            this.setState({
                backgroundUrl: response.url
            });
        })
    	.catch(error => {
            console.log("Error: " + error);
            this.setState({
                backgroundUrl: Config.defaultBackgroundUrl
            });
        });
    }

    render() {
        const style = {
            backgroundImage: `url(${this.state.backgroundUrl})`
        }
        return (
            <div className='background' style={style}>
      	<div id='top'>
      		<Search />
      		<Watch />
      	</div>
        <div id="center">
            <Greeting />
        </div>

        <div id='bottom'>
        	<SocialLink />
        	<Quote />
        </div>

      </div>
        );
    }
}

export default App;