import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import { useParams } from 'react-router-dom'

export default function GetallProducts() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:4000/api/product/getAllProducts/')
      .then((res) => {
        setProduct(res.data.data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return product
}
