
export const data = {
    labels: [],
    datasets: [
        {
            label: '',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'white',
            borderColor: 'white',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        }
    ]
};
// configurations required for ChartJs

export const chartJsConfig = {
    responsive: true,
    scales: {
        xAxes: [{
          type: 'time',
          distribution: 'linear',
          ticks: {
            source: 'auto'
          },
          time: {
            displayFormats: {second: 'h:mm:ss a'},
            unit: 'second'
          },
          scaleLabel: {
            display: true,
            labelString: 'Time'
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepValue: 10,
            steps: 10
          },
          scaleLabel: {
            display: true,
            labelString: 'Price ($)'
          }
        }]
      }
};
