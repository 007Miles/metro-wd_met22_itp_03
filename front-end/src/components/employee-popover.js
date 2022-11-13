import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { RiUserFill } from 'react-icons/ri'
import { useReactToPrint } from 'react-to-print'

export default function EmployeePopover (currentEmp) {
  
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)


  useEffect(() => {
    if(currentEmp.currentEmp.flag){
        return
    }
    setOpen(true)

  }, [currentEmp]);
  
  const componentRef1 = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef1.current,
  })

  return (
    <Transition.Root show={open} as={Fragment} ref={componentRef1} >
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <RiUserFill className="h-6 w-6 text-green-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        Employee Account Details
                      </Dialog.Title>
                      <div className="mt-2 flex flex-col space-y-2">
                        <span> Name: {currentEmp.currentEmp.empName}</span>
                        <span> ID: {currentEmp.currentEmp.cred_id}</span>
                        <span> Address: {currentEmp.currentEmp.address}</span>
                        <span> Phone: {currentEmp.currentEmp.phone}</span>
                        <span> DOB: {currentEmp.currentEmp.dob}</span>
                        <span> NIC: {currentEmp.currentEmp.nic}</span>
                        <span> Gender: {currentEmp.currentEmp.gender}</span>
                        <span> Warehouse ID: {currentEmp.currentEmp.wareId}</span>
                        <span> Role: {currentEmp.currentEmp.role}</span>
                        <span> Email: {currentEmp.currentEmp.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                
                 
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}> 
                    Cancel
                  </button>
                  <button onClick={handlePrint} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Print Employee Details
                  </button> 
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
