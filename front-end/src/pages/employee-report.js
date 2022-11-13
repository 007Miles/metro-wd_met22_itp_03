import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const EmployeeReport = () => {

    const options = {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Managers', 'Clerks', 'Drivers', 'courier', 'Supplier'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      };
    const series = [22, 55, 33, 12, 22];

  return (
    <div className="container bg-green-200 rounded-xl shadow border p-8 m-10">
      <h1 className="text-3xl">Employee Pie Chart</h1>
      <div className="mt-6 space-y-6"></div>
      <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="pie"
          width={380}
        />
      </div>
    </div>
    </div>
    
  )
}

export default EmployeeReport
