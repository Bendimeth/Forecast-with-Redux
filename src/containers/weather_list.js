import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component{

	renderWeather(cityData){
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressure = cityData.list.map(pressure => pressure.main.pressure);
		const humidity = cityData.list.map(humidity=> humidity.main.humidity);
		const lon = cityData.city.coord.lon;
		const lat = cityData.city.coord.lat;

		const dataTemp = [];
		temps.map((point,idx)=>dataTemp[idx]={pv: point-274});

		const dataPressure = [];
		pressure.map((point,idx)=>dataPressure[idx]={pv: point-1000});

		const dataHumidity = [];
		humidity.map((point,idx)=>dataHumidity[idx]={pv: point-100});

		function averageValue(value){
			return(
				value.reduce((a,b)=>a+b,0)/value.length
			);
		}
		
		return(
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat}/></td>
				<td><Chart data={dataTemp} color="#e60000" average={(averageValue(temps)-274.15)} label={averageValue(temps)-274.15} units='°C' /></td>
				<td><Chart data={dataPressure} color="#ccc" average={(averageValue(pressure)-1000)} label={averageValue(pressure)} units='hPa' /></td>
				<td><Chart data={dataHumidity} color="#8884d8" average={(averageValue(humidity)-100)} label={averageValue(humidity)} units='%' /></td>
			</tr>
		);
	}

	

	render(){
		return(
		<table className="table table-hover">
			<thead>
				<tr>
					<th>City</th>
					<th>Temperature (°C)</th>
					<th>Pressure (hPa)</th>
					<th>Humidity (%)</th>
				</tr>
			</thead>
			<tbody>
				{this.props.weather.map(this.renderWeather)}
			</tbody>
		</table>
		);	
	}
}

function mapStateToProps(state){
	return {
		weather: state.weather
	};
}

export default connect(mapStateToProps)(WeatherList);