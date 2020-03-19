import React, { Component } from 'react';
import CanvasJSReact from '../canvasLibrary/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class DonutChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			theme: "dark1", 
			backgroundColor:  '#171717',
			title: {
				text: "Covid-19 Cases"
			},
			subtitles: [{
				text: "71% Positive",
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "Total Cases", y: 5 },
					{ name: "Active Cases", y: 40 },
					{ name: "Recovered Cases", y: 31 },
					{ name: "Fatal Cases", y: 17 },
				]
			}]
		}
		
		return (
		<div>
			<h1></h1>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default DonutChart;