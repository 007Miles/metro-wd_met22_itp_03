import React from "react";
import { Link } from "react-router-dom";

export default function ViewSchedules() {
  return (
    <div>
      <div>
        <header>
          <h1>View supply drops</h1>
        </header>
      </div>
      <div>
        <h3>
          <b>Details of your current supply drops</b>
        </h3>
        <h4>
          If you want to make any changes you can update or cancel your
          schedules
        </h4>
      </div>
      <form>
        <table>
          <tr>
            <td>Organization :</td>
            <td> </td>
          </tr>
          <tr>
            <td>Supplier ID :</td>
            <td> </td>
          </tr>
          <tr>
            <td>Phone no :</td>
            <td> </td>
          </tr>
          <tr>
            <td>Product :</td>
            <td> </td>
          </tr>
          <tr>
            <td>Quantity :</td>
            <td> </td>
          </tr>
          <tr>
            <td>Price :</td>
            <td> </td>
          </tr>
          <tr>
            <td>Warehouse :</td>
            <td> </td>
          </tr>
          <tr>
            <td>Time Interval :</td>
            <td> </td>
          </tr>
          <tr>
            <td>Date :</td>
            <td> </td>
          </tr>
          <div>
            <Link to="/Updateschedule">Update supply schedule</Link>
          </div>
          <div>
            <Link to="/Cancelschedule">Cancel supply schedule</Link>
          </div>
        </table>
      </form>
    </div>
  );
}
