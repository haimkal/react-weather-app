import React from 'react';
import './App.css';
import Forecast1Day from './Forecast1Day/Forecast1Day';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            forecast: []
        }
    }

    componentDidMount() {
        fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json')
            .then(res=> res.json())
            .then((days)=> {
                this.setState({
                    forecast: days
                })
            })
    }

    render() {
        return (
            <div className="App">
                {this.state.forecast.map(({day, temperature, icon, description}, index)=> {
                    return <Forecast1Day key= {index} day={day} temperature={temperature} icon={icon} description={description} />
                })}
            </div>
        );
    }

}

export default App;
