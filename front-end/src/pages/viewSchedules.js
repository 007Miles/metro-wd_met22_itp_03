import React from 'react'
import Layout from '../components/layout'
import Header from '../components/layout/header'
import ViewSchedules from '../components/supplierFunctionalities/ViewSchedules'

const ViewSchedule = () => {
  return (
    <div>
      <Header
        headerButtons={[
          { path: '/UpdateSchedule', name: 'Update Schedule' },
          { path: '/Cancelschedule', name: 'Cancel Schedule' },
        ]}
      />
      <ViewSchedules />
    </div>
  )
}

export default ViewSchedule
