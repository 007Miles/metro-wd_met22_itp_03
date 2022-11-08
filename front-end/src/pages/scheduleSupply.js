import React from 'react'
import Layout from '../components/layout'
import Footer from '../components/layout/footer'
import Header from '../components/layout/header'
import ScheduleForm from '../components/supplierFunctionalities/ScheduleForm'

const ScheduleSupply = () => {
  return (
    <div>
      <Header
        headerButtons={[{ path: '/Viewschedules', name: 'View Schedule' }]}
      />
      <ScheduleForm />
    </div>
  )
}

export default ScheduleSupply
