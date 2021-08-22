import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import {Chart} from 'chart.js'
import './style/piechart.css'


Chart.defaults.plugins.legend.position = 'bottom'
const Piechart = (props) => {

const attendee = parseInt(props.customer) 

const total = customer;

const data = {
    labels: [
      `Customer ${total}%`
    ]
}

return (
    <div className ="chartoutline" >
      <h1>Users</h1>
      <hr/>
      <Doughnut
                data={data}
                options={options} 
              />
              </div>

)
}

export default Piechart