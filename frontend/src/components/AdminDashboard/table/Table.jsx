import React from 'react'
import "./Table.css"

export default function Table() {
    return (
        <div className="table">
            <h3 className="Title">Latest Orders</h3>
            <table className="Table">
                <tr className="Tr">
                    <th className="TH">Name</th>
                    <th className="TH">Price</th>
                </tr>
                <tr className="Tr">
                    <td className="thName">Item 1</td>
                    <td className="thAmount">$100.00</td>
                </tr>
                <tr className="Tr">
                    <td className="thName">Item 2</td>
                    <td className="thAmount">$90.00</td>
                </tr>
                <tr className="Tr">
                    <td className="thName">Item 3</td>
                    <td className="thAmount">$110.00</td>
                </tr>
                <tr className="Tr">
                    <td className="thName">Item 4</td>
                    <td className="thAmount">$80.00</td>
                </tr>
            </table>
        </div>
    )
}