import axios from 'axios';

const API_KEY = '207b9c1810e5e4c5e02fac56e98d3575';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const WRONG_CITY_NAME = 'WRONG_CITY_NAME';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},pl`
	const request = axios.get(url);

	console.log(request)

	if(!request){
		console.log('wrong')
		return{
			type: WRONG_CITY_NAME,
			payload: 'Wrong city name'
		}
	}

	return{
		type: FETCH_WEATHER,
		payload: request
	};
}