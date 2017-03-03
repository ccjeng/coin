import React from 'react'

import img1 from '../img/d1.jpg';
import img5 from '../img/d5.jpg';
import img10 from '../img/d10.jpg';
import img50 from '../img/d50.jpg';
import img100 from '../img/d100.jpeg';
import img500 from '../img/d500.jpeg';
import img1000 from '../img/d1000.jpeg';

export default class CustomResultCell extends React.Component {
    constructor(props){
        super(props);

        //var aa = this.props.resultAry;
        //console.log('length = ' + aa[0].d10);
        this.state = {
        	type: this.props.type,
            number: this.props.number
        }
    }

    render() {
    	let imgType;
    	switch(this.props.type) {
    		case 'd1':
    			imgType=img1;
    			break;
    		case 'd5':
    			imgType=img5;
    			break;	
    		case 'd10':
    			imgType=img10;
    			break;
    		case 'd50':
    			imgType=img50;
    			break;
    		case 'd100':
    			imgType=img100;
    			break;	
    		case 'd500':
    			imgType=img500;
    			break;	
    		case 'd1000':
    			imgType=img1000;
    			break;	
    	}

    	let images = [];
    	for(let i=0; i<this.props.number; i++) {
    		images.push(<img src={imgType} key={i}/>);
    	}

        return (
            <span>{images}</span>          
        )
    }
}

