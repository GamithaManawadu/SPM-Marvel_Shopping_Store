import React, { Component, useState } from "react";
//import ReactDOM from "react-dom";
import MaterialTable from "material-table";
//import { Table } from 'react-bootstrap';
import axios from 'axios';
//import { Button } from 'react-bootstrap';
import { BASE_URL } from "../../config/config";

// constructor(props) {
//   super(props);
//   this.state = {
//       deliveryservices: []
//   }
// }

// componentDidMount() {
//     axios.get(`${BASE_URL}/deliveryservice/`)
//     .then(response => {
//         console.log('deliveryservices', response.data);
//         this.setState({ deliveryservices: response.data.data})
//     })
// }



const empList = [
  { id: 1, dservicename: "CityPak", contactno: 112203344, email: 'citypaklk@gmail.com', noofvehicles: 20, noofdrivers: 10, chargeperkm: 70.00, startdate: "2021/08/21", updatedate: "2021/08/21" },
  { id: 2, dservicename: "Domex", contactno: 112203310, email: 'domexlk@gmail.com', noofvehicles: 30, noofdrivers: 18, chargeperkm: 60.00, startdate: "2021/08/21", updatedate: "2021/08/21" },
  { id: 3, dservicename: "Uber", contactno: 112003004, email: 'uberlk@gmail.com', noofvehicles: 75, noofdrivers: 69, chargeperkm: 63.50, startdate: "2021/08/21", updatedate: "2021/08/21" },
  { id: 4, dservicename: "Grasshoppers", contactno: 119008005, email: 'grasshopperslk@gmail.com', noofvehicles: 60, noofdrivers: 40, chargeperkm: 75.00, startdate: "2021/08/18", updatedate: "2021/08/21" },
  { id: 5, dservicename: "Example", contactno: 112003005, email: 'example@gmail.com', noofvehicles: 10, noofdrivers: 10, chargeperkm: 60.00, startdate: "2021/08/19", updatedate: "2021/08/21" },

]

function DeliveryServices() {

  const [data, setData] = useState(empList)
  const columns = [
    { title: "ID", field: "id", editable: false },
    {
      title: "Serivce Name", field: "dservicename", validate: rowData => {
        if (rowData.dservicename === undefined || rowData.dservicename === "") {
          return "Required"
        } else if (rowData.dservicename.length < 3) {
          return "Name should contains atleast 3 chars"
        }
        return true
      }
    },
    {
      title: "Contact Number", field: 'contactno', validate: rowData => {
        if (rowData.contactno === undefined || rowData.contactno === "") {
          return "Required"
        } else if (rowData.contactno.length < 10 || rowData.contactno.length > 10) {
          return "Contact number should contains 10 digits"
          //  return {isValid:false,helperText:"Phone number should contains 10 digits"}
        }
        return true
      }
    },
    {
      title: "Email", field: "email", validate: rowData => {
        if (rowData.email === undefined || rowData.email === "") {
          return "Required"
        } else if (!rowData.email.includes('@' && '.')) {
          return "Enter valid email address"
        }
        return true
      }
    },
    {
      title: "No of Vehicles", field: 'noofvehicles', type: "numeric", validate: rowData => {
        if (rowData.noofvehicles === undefined || rowData.noofvehicles === "") {
          return "Required"
        } else if (rowData.noofvehicles.length < 0) {
          return "Number of vehicles should be a positive number"
        }
        return true
      }
    },
    {
      title: "No of Drivers", field: 'noofdrivers', type: "numeric", validate: rowData => {
        if (rowData.noofdrivers === undefined || rowData.noofdrivers === "") {
          return true
        } else if (rowData.noofdrivers.length < 0) {
          return "Number of drivers should be a positive number"
        }
        return true
      }
    },
    { title: "Charge Per KM", field: "chargeperkm", type: "double", validate: rowData => {
      if (rowData.chargeperkm === undefined || rowData.chargeperkm === "") {
        return "Required"
      } else if (rowData.chargeperkm.length < 0) {
        return "Charge Per KM should be a positive value"
      }
      return true
      }
    },
    { title: "Start Date", field: "startdate", type: "date", validate: rowData => {
      if (rowData.startdate === undefined || rowData.startdate === "") {
        return "Required"
      }
      return true
      }
    },
    {
      title: "Updated Date", field: "updatedate", type: "date", validate: rowData => ({ isValid: true, helperText: "Optional" })
    }

  ]


  return (
    <div className="deliveryservice-content">
      <h1 align="center">Delivery Services Details</h1>
      {/* <br/> */}
      <MaterialTable
        title="Delivery Services Data"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowDelete: selectedRow => new Promise((resolve, reject) => {
            const index = selectedRow.tableData.id;
            const updatedRows = [...data]
            updatedRows.splice(index, 1)
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {
            const index = oldRow.tableData.id;
            const updatedRows = [...data]
            updatedRows[index] = updatedRow
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          })

        }}
        options={{
          actionsColumnIndex: -1, addRowPosition: "first"
        }}
      />
    </div>
  );
}

export default DeliveryServices;

