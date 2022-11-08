import react from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Bar } from 'react-chartjs-2'

function GraphChart() {
  const [graph, setGraph] = useState([])

  //const [getdata, setGetData] = useState([])

  const [Products, setProducts] = useState([])

  const productDetail = async () => {
    axios
      .get('http://localhost:4001/api/product/getAllProducts/')

      .then((response) => {
        setProducts(response.data.data)
      })
  }
  useEffect(() => {
    productDetail()
  }, [])

  const selectChart = (e) => {
    axios
      .get(`http://localhost:4001/api/product/getAllProducts/`)
      .then((res) => {
        const productData = res.data.data
        let names = []
        let quantities = []
        productData.forEach((product) => {
          names.push(product.name)
          quantities.push(product.quantity)
        })
        setGraph({
          labels: names,
          datasets: [
            {
              label: 'In quantity',
              backgroundColor: ['#CCCCFF'],
              borderWidth: 0,
              data: quantities,
            },
          ],
        })
      })
  }
  useEffect(() => {
    selectChart()
  }, [])

  return (
    // <div className="container">
    //   <h4 className="text-center text-primary mt-2 mb-3">
    //     Graph Chart in ReactJS
    //   </h4>
    //   <h6 className="text-center text-success mt-2 mb-3">
    //     Country By Defence Budget
    //   </h6>
    //   <div className="row mt-3">
    //     <div className="col-sm-3">
    //       <div className="">
    //         <table class=" table-bordered graphTable ">
    //           <tr>
    //             <th>Country</th>
    //             <th>Budget</th>
    //           </tr>
    //           {Products.map((product) => (
    //             <tr>
    //               <td>{product.name}</td>
    //               <td>${product.quantity}</td>
    //             </tr>
    //           ))}
    //         </table>
    //       </div>
    //     </div>
    <div className="col-sm-9">
      <Bar
        data={graph}
        options={{
          title: {
            display: true,
            text: 'Products Available',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  )
}
export default GraphChart
