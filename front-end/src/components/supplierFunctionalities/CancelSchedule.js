import React from 'react'

export default function CancelSchedule() {
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
          </div>
          <div>
            <label for="reason">Reason </label>
            <input
              class="border border-gray-400 block py-2 px-4 full rounded focus:outline-none focus:border-teal-500"
              type="text"
              name="reason"
              id="reason"
              placeholder="Give us a reason"
            ></input>
          </div>
          <div>
            <input
              class="bg-teal-500 rounded text-white"
              type="submit"
              value=" Submit "
              name="submit"
            ></input>
          </div>
        </form>
      </body>
    </div>

    // <div>
    //   <div>
    //     <header>
    //       <h1>Cancel supply drops</h1>
    //     </header>
    //   </div>
    //   <div>
    //     <h3>
    //       <b>Your Scheduled supply schedule will be permanently deleted</b>
    //     </h3>
    //     <h4>Provide a reason and proceed</h4>
    //   </div>
    //   <form>
    //     <table>
    //       <tr>
    //         <td>Reason :</td>
    //         <td>
    //           <input
    //             type="text"
    //             name=""
    //             placeholder="Give us a reason"
    //             required="required"
    //           />
    //         </td>
    //       </tr>
    //       <tr>
    //         <td>
    //           <input type="Submit" value="Submit" name="" />
    //         </td>
    //       </tr>
    //     </table>
    //   </form>
    // </div>
  )
}
