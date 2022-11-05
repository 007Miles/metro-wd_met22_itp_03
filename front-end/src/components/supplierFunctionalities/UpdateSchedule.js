import React from "react";

export default function UpdateSchedule() {
  return (
    <div>
      <div>
        <header>
          <h1>Update supply drops</h1>
        </header>
      </div>
      <div>
        <h3>
          <b>Provide relevant details to update your schedule</b>
        </h3>
        <h4>Update your schedule and submit</h4>
      </div>
      <form>
        <table>
          <tr>
            <td>Organization :</td>
            <td>
              <input
                type="text"
                name=""
                placeholder="Organization name"
                required="required"
              />
            </td>
          </tr>
          <tr>
            <td>Supplier ID :</td>
            <td>
              <input
                type="text"
                name=""
                placeholder="Type your supplier ID here"
                required="required"
              />
            </td>
          </tr>
          <tr>
            <td>Phone no :</td>
            <td>
              <select>
                <option>+94</option>
              </select>
              <input
                type="Phone"
                name=""
                placeholder="Phone number"
                required="required"
              />
            </td>
          </tr>
          <tr>
            <td>Product :</td>
            <td>
              <input
                type="text"
                name=""
                placeholder="Product name"
                required="required"
              />
            </td>
          </tr>
          <tr>
            <td>Quantity :</td>
            <td>
              <input
                type="number"
                name=""
                placeholder="Quantity of the product"
                required="required"
              />
            </td>
          </tr>
          <tr>
            <td>Price :</td>
            <td>
              <input
                type="text"
                name=""
                placeholder="Total price"
                required="required"
              />
            </td>
          </tr>
          <tr>
            <td>Warehouse :</td>
            <td>
              <input
                type="text"
                name=""
                placeholder="Warehouse name"
                required="required"
              />
            </td>
          </tr>
          <tr>
            <td>Time Interval :</td>
            <td>
              <div>
                <select>
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>Yearly</option>
                </select>
              </div>
            </td>
          </tr>
          <tr>
            <td>Date :</td>
            <td>
              <input
                type="date"
                name=""
                placeholder="Select date"
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
