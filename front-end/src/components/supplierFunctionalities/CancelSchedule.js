import React from "react";

export default function CancelSchedule() {
  return (
    <div>
      <div>
        <header>
          <h1>Cancel supply drops</h1>
        </header>
      </div>
      <div>
        <h3>
          <b>Your Scheduled supply schedule will be permanently deleted</b>
        </h3>
        <h4>Provide a reason and proceed</h4>
      </div>
      <form>
        <table>
          <tr>
            <td>Reason :</td>
            <td>
              <input
                type="text"
                name=""
                placeholder="Give us a reason"
                required="required"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input type="Submit" value="Submit" name="" />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}
