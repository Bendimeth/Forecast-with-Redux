import React from 'react';
import {LineChart, Line, ReferenceLine} from 'recharts';

export default (props)=>{
	return(
		<div className="charts">
			<LineChart 
			data={props.data}
			height={150}
			width={300}
			margin={
				{ top: 50, right: 20, left: 20, bottom: 5 }
			}>

				<ReferenceLine y={(props.average).toFixed(1)}  stroke='#333' strokeDasharray="3 3" />
				<Line dataKey='pv' dot={false} stroke={props.color} strokeWidth={2} />
			</LineChart>
			<div>
				{(props.label).toFixed(1)}{props.units}
			</div>
		</div>
	);
}