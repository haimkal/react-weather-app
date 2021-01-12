import React, { Component } from 'react'
import './Forecast1Day.css';

export default class Forecast1Day extends Component {
    
    constructor(props){
        super(props);
        this.state= {
            day: props.day,
            temperature: props.temperature,
            icon: props.icon,
            description: props.description

        }
    }

    convertNumToDays(num) {
        let day;
        switch(num) {
            case 2:
                day= "Tuesday"
                break;
            
            case 3:
                day="Wednesday"
                break;
            
            case 4:
                day="Thursday"
                break;
                
            case 5:
                 day="Friday"
                 break;

            case 6:
                day="Saturday"
                break;
            default:    
        }
        return day;
    }     
            
        
    
    
    render() {

        const {day, temperature, icon, description }= this.props;
        
        return (
            <div className="Forecast1Day">
                 <p className="day">{this.convertNumToDays(day)}</p>
                <img src={require('../icons/'+this.props.icon+".png")} alt="" />
                <p className="temperature">Degress: {temperature}</p>
                <p className="description">{description}</p>
            </div>
        )
    }
}

