import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CancelSchedule() {
  const [reason, setReason] = useState('')

  const [_id, setId] = useState()
  const [idFromButtonClick, setIdFromButtonClick] = useState()

  const handleClick = () => {
    setIdFromButtonClick(_id)
  }

  const resp = {
    reason,
  }

  const { id } = useParams()
  console.log(id)
  useEffect(() => {
    const cancelSchedule = async () => {
      fetch(`http://localhost:3000/api/schedules/cancel/${idFromButtonClick}`, {
        method: 'DELETE',
        body: JSON.stringify(resp),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
    cancelSchedule()
  }, [idFromButtonClick])

  return (
    <div>
      <body class="bg-gray-100border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500">
        <form class="px-4 my-32 max-w-3xl mx-auto space-y-6">
          <div>
            <h1 class="text-3xl font-semibold">Cancel Supply Drop</h1>
            <p class="text-gray-600">
              Your supply schedule will be permanently deleted...Provide a
              reason and proceed
            </p>
            <input
              type="text"
              value={_id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Search by Schedule ID"
            ></input>
          </div>
          <div>
            <label for="reason">Reason </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="reason"
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Give us a reason"
            ></input>
          </div>
          <div>
            <input
              class="bg-teal-500 rounded text-white"
              type="submit"
              value=" Cancel Schedule "
              name="submit"
              onClick={handleClick}
            ></input>
          </div>
        </form>
      </body>
    </div>
  )
}
