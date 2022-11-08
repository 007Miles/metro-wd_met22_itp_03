import React from 'react'
import Layout from '../components/layout'
import Header from '../components/layout/header'
import CancelSchedule from '../components/supplierFunctionalities/CancelSchedule'

const CancelSchedules = () => {
  return (
    <div>
      <Header
        headerButtons={[{ path: '/scheduleSupply', name: 'Schedule Supply' }]}
      />
      <CancelSchedule />
    </div>
  )
}

export default CancelSchedules
