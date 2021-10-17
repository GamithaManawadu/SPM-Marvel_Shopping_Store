import React, { Component } from 'react';
//import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call
import { format } from "date-fns";

class DeliveryServices extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            deliveryservices: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/deliveryservice/')
        .then(response => {
            console.log('deliveryservices', response.data);
            console.log(response.data.deliveryservices.length);
            this.setState({ deliveryservices: response.data.deliveryservices})
        })
    }

    jsPDFGenerator = () => {
        // initialize jsPDF
        const doc = new jsPDF('p', 'pt');

        doc.text(20, 20, 'Delivery Serivces Report')
        doc.setFont('courier');
        doc.setFontSize(14);

        // define the columns we want and their titles
        const tableColumn = ["Service Name", "Contact No", "Email", "NoOfVehicles", "NoOfDrivers", "ChargerPerKM", "Started On"];
        // define an empty array of rows
        const tableRows = [];

        //for each ticket pass all its data into an array
        this.state.deliveryservices.forEach(deliveryservice => {
          const deliveryServicesData = [
            deliveryservice.dservicename,
            deliveryservice.contactno,
            deliveryservice.email,
            deliveryservice.noofvehicles,
            deliveryservice.noofdrivers,
            deliveryservice.chargeperkm,
            deliveryservice.startdate,,
          ];
          // push each tickcet's info into a row
          tableRows.push(deliveryServicesData);
          console.log(deliveryServicesData);
        });

        // startY is basically margin-top
        doc.autoTable(tableColumn, tableRows);

        var currentDate = new Date();

        //console.log(currentDate);
        let finalY = doc.lastAutoTable.finalY; // The y position on the page
        doc.text(20, 800, "This delivery services details report generated on : " + currentDate,15,15);
        doc.save("delivery_services_report.pdf");

    }

  render() {
      return (
        <div className="deliveryservice-content">
        <h1 align="center">Delivery Services Details</h1>
        
        <br />
        <Button variant="success" justifyContent="center" style={{ marginLeft: "800px" }} onClick = {() => this.jsPDFGenerator()}>Generate Report</Button>
        <br />
          <Table>
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Contact NO</th>
                <th>Email</th>
                <th>NoOfVehicles</th>
                <th>NoOfDrivers</th>
                <th>ChargerPerKM</th>
                <th>Started On</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
            {this.state.deliveryservices.length > 0 && this.state.deliveryservices.map((deliveryservice, index) => (
              <tr
                key={index}
                data-toggle="collapse"
                data-target="#demo1"
                className="accordion-toggle"
              >
                <td>{deliveryservice.dservicename}</td>
                <td>{deliveryservice.contactno}</td>
                <td>{deliveryservice.email}</td>
                <td>{deliveryservice.noofvehicles}</td>
                <td>{deliveryservice.noofdrivers}</td>
                <td>{deliveryservice.chargeperkm}</td>
                <td>{deliveryservice.startdate}</td>
                <td><Button variant="primary">Edit</Button></td>
                <td><Button variant="danger">Delete</Button></td>
                </tr>
              
              ))}
              
            </tbody>
          </Table>

        </div>
      );
  }
}



export default DeliveryServices;