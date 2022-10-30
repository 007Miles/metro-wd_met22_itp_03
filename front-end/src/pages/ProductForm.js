// import { useState } from 'react'
// import '../styles/batchForm.css'
// const ProductForm = () => {
//   const [name, setDetail_name] = useState('')
//   const [measurement_unit, setDetail_measurement_unit] = useState('')
//   const [markupPrice, setDetail_markupPrice] = useState('')
//   const [storageCondition, setDetail_storageCondition] = useState('')
//   const [type, setDetail_type] = useState('')
//   const [description, setDetail_description] = useState('')
//   const [error, setError] = useState(null)

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     const batch = {
//       name,
//       measurement_unit,
//       markupPrice,
//       storageCondition,
//       type,
//       supplier_Name,
//       description,
//     }
//     const response = await fetch('http://localhost:4001/api/product', {
//       method: 'POST',
//       body: JSON.stringify(batch),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//     const json = await response.json()
//     if (!response.ok) {
//       setError(json.error)
//     }
//     if (response.ok) {
//       setError(null)
//       setDetail_name('')
//       setDetail_measurement_unit('')
//       setDetail_markupPrice('')
//       setDetail_storageCondition('')
//       setDetail_type('')
//       setDetail_description('')
//       console.log('new batch added:', json)
//     }
//   }
//   return (
//     <form className="createProduct" onSubmit={handleSubmit}>
//       <h3> Add Product</h3>
//       <label>Product Name</label>
//       <input
//         type="text"
//         onChange={(e) => setDetail_name(e.target.value)}
//         value={name}
//       />
//       <label>measurement_unit</label>
//       <input
//         type="text"
//         onChange={(e) => setDetail_measurement_unit(e.target.value)}
//         value={measurement_unit}
//       />
//       <label>Mark Up Price</label>
//       <input
//         type="number"
//         onChange={(e) => setDetail_markupPrice(e.target.value)}
//         value={markupPrice}
//       />
//       <label>Storage Condition</label>
//       <input
//         type="text"
//         onChange={(e) => setDetail_storageCondition(e.target.value)}
//         value={storageCondition}
//       />
//       <label>Type</label>
//       <input
//         type="text"
//         onChange={(e) => setDetail_type(e.target.value)}
//         value={type}
//       />
//       <label>Description</label>
//       <input
//         type="text"
//         onChange={(e) => setDetail_description(e.target.value)}
//         value={description}
//       />
//       <button> Add Product</button>
//       {error && <div className="error">{error}</div>}
//     </form>
//   )
// }

// export default ProductForm
