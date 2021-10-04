import React from 'react';
import {Bar} from 'react-chartjs-2';
const Chart = () => {
    const state = {
        labels: ['January', 'February', 'March',
                 'April', 'May','June','July','August','Sept','October','November,December'],
        datasets: [
          {
            label: 'vistors',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [50000, 10000, 80000, 81000, 56000,40000, 30000, 50000, 81000, 66000,]
          }
        ]
      }

    return (
        <div className="container-fluid">
                 <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average vistors per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
        </div>
    );
};

export default Chart;