import React from 'react';
import { Button} from 'react-bootstrap';
import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call
import { format } from "date-fns";


function HistoryPage(props) {


    const jsPDFGenerator = () => {
        // initialize jsPDF
        const doc = new jsPDF('p', 'pt');

        doc.text(20, 20, 'Payment History')
        doc.setFont('courier');
        //doc.setFontSize('normal')
        //doc.save("payment_history.pdf")

        // define the columns we want and their titles
        const tableColumn = ["Item ID", "Price", "Quantity", "DateOfPurchase"];
        // define an empty array of rows
        const tableRows = [];

        //for each ticket pass all its data into an array
        props.user.userData.history.forEach(item => {
          const paymentData = [
            item.id,
            item.price,
            item.quantity,
            format(item.dateOfPurchase, "yyyy-MM-dd"),
            // called date-fns to format the date on the ticket
            //format(new Date(item.updated_at), "yyyy-MM-dd"),
          ];
          // push each tickcet's info into a row
          tableRows.push(paymentData);
          console.log(paymentData);
        });

        // startY is basically margin-top
        doc.autoTable(tableColumn, tableRows);

        var currentDate = new Date();

        //console.log(currentDate);
        let finalY = doc.lastAutoTable.finalY; // The y position on the page
        doc.text(20, 800, "This payments history report generated on : " + currentDate,16,16);
        //doc.text("This payments history report generated on : " + today,20,20);
        // we define the name of our PDF file.
        //doc.save(`report_${dateStr}.pdf`);
        doc.save("payment_history.pdf");

    }

    return (
        <div style={{ width: '80%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>Payment History</h1>
            </div>
            <br />
            <Button variant="success" justifyContent="center" style={{ marginLeft: "800px" }} onClick = {() => jsPDFGenerator()}>Generate Report</Button>
            <br />
            <br></br>
            <table>
                <thead>
                    <tr>
                        <th>Payment Id</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Date of Purchase</th>
                    </tr>
                </thead>

                <tbody>
                    {props.user.userData && props.user.userData.history &&
                        props.user.userData.history.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.dateOfPurchase}</td>
                            </tr>
                        ))}

                </tbody>
            </table>
            
        </div>
    )
}

export default HistoryPage
