import React from 'react'

const img1 = process.env.PUBLIC_URL + '/img/d1.jpg';
const img5 = process.env.PUBLIC_URL + '/img/d5.jpg';
const img10 = process.env.PUBLIC_URL + '/img/d10.jpg';
const img50 = process.env.PUBLIC_URL + '/img/d50.jpg';
const img100 = process.env.PUBLIC_URL + '/img/d100.jpeg';
const img500 = process.env.PUBLIC_URL + '/img/d500.jpeg';
const img1000 = process.env.PUBLIC_URL + '/img/d1000.jpeg';


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

