import React from 'react'
import Layout from '../components/layout'
import Header from '../components/layout/header'
import UpdateSchedule from '../components/supplierFunctionalities/UpdateSchedule'

const UpdateSchedules = () => {
  return (
    <div>
      <Header
        headerButtons={[{ path: '/Cancelschedule', name: 'Cancel Schedule' }]}
      />
      <UpdateSchedule />
    </div>
  )
}

export default UpdateSchedules
