// import React from 'react'
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js'
// import { Bar } from 'react-chartjs-2'
// //import ProductList from './ProductList.js'
// // import faker from 'faker'

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// export default function ChartProduct({ product }) {
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Chart.js Bar Chart',
//       },
//     },
//   }
//   console.log(product)

//   const labels = [{product.quantity}]

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: product.name,
//         data: product.quantity,
//       },
//     ],
//   }
//   return (
//     <>
//       <div>
//         <Bar options={options} data={product.quantity} />
//       </div>
//     </>
//   )
//}

// import react from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {useState,useEffect} from 'react';
// import axios from 'axios';
// import {Bar} from 'react-chartjs-2';
//import ProductList from './ProductList'

// function GraphChart()
// {
//   const[graph,setGraph]=useState([]);

//   const[getdata,setGetData]=useState([]);

//   const countryDetail = async () => {
//     axios.get("http://localhost:3000/countries")

//      .then(response => {
//         setGetData(response.data);
//      });

//    }
//    useEffect(() => {
//     countryDetail();
//   }, []);

//   const selectChart = (e) =>
//   {
//     axios.get(`http://localhost:3000/countries`)
//      .then(res => {
//       const countryData = res.data;
//       let countryName = [];
//       let budgetName = [];
//       countryData.forEach(element => {
//         countryName.push(element.Country);
//         budgetName.push(element.budget);
//        });
//         setGraph({
//             labels: countryName,
//             datasets: [
//               {
//                 label: 'In Billions Dollar',
//                 backgroundColor:[
//                     'green',
//                     'red',
//                     'blue',
//                     '#FFBF00',
//                     '#DE3163',
//                     'orange',
//                     '#40E0D0',
//                     '#6495ED',
//                     '#CCCCFF',
//                     '#FFBF00',
//                     '#DE3163',
//                     '#9FE2BF',
//                     '#CD5C5C'
//                  ],
//                 borderWidth:0,
//                 data: budgetName
//               }
//              ]
//         });
//       });

//   }
//   useEffect(() => {
//     selectChart();
//   }, []);

//   return(
//      <div className="container">
//         <h4 className="text-center text-primary mt-2 mb-3">Graph Chart in ReactJS</h4>
//         <h6 className="text-center text-success mt-2 mb-3">Country By Defence Budget</h6>
//         <div className="row mt-3">
//            <div className="col-sm-3">

//               <div className="">
//                <table class=" table-bordered graphTable ">

//                 <tr>
//                     <th>Country</th
//                     <th>Budget</th>
//                 </tr>
//                   { getdata.map((name)=>
//                     <tr>
//                       <td>{name.Country}</td>
//                       <td>${name.budget}</td>
//                     </tr>
//                  )}
//                </table>
//              </div>
//            </div>
//            <div className="col-sm-9">
//            <Bar
//              data={graph}
//                 options={{
//                     title:{
//                       display:true,
//                       text:'Average Rainfall per month',
//                       fontSize:20
//                     },
//                     legend:{
//                       display:true,
//                       position:'right'
//                     }
//                 }}
//                 />
//             </div>

//         </div>
//      </div>
//     )
// }
// export default GraphChart;
