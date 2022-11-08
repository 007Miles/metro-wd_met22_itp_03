import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function GetAllBatches() {
  const [batch, setBatch] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:4000/api/batch/getAllBatch')
      .then((res) => {
        setBatch(res.data.data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return batch
}
