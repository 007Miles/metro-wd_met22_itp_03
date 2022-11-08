import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LeaveList from './leave-list-page.js'

const LeaveDelete = () => {
  const { id } = useParams()
  console.log(id)
  useEffect(() => {
    const deleteLeave = async () => {
      fetch('http://localhost:3000/api/leaveReq/leave/' + id, {
        method: 'DELETE',
      })
    }
    deleteLeave()
  }, [id])
  return <LeaveList />
}

export default LeaveDelete
