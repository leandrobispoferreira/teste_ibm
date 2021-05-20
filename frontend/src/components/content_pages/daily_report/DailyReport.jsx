import './DailyReport.css'
import React from 'react'
import { Component } from "react";

export default class DailyReport extends Component {
    constructor() {
        super();
        this.state = {
            transactions : null
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/transactions')
            .then(response => response.json())
            .then(data => this.setState({ 
                transactions: data.map((extract) => <tr><td>{extract.origin_client}</td><td>{extract.destiny_client}</td><td>{"R$ " + extract.transaction_value}</td><td>{this.format_date(extract.transaction_date)}</td></tr>)
            }));
    }

    format_date(transaction_date) {
        const date = new Date(transaction_date)

        const day = date.getDate().toString().padStart(2, '0')
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const year = date.getFullYear()

        const formatted = `${day}/${month}/${year}`

        return formatted
    }

    render() {
        return (
            !this.state.transactions ? null : <div className="container">
                <div class="page-title">
                    Saldo do cliente
                </div>
                
                <div class="form-item">
                    <table>
                    <tr>
                        <th>Origem</th>
                        <th>Destino</th>
                        <th>Valor</th>
                        <th>Data</th>
                    </tr>
                        {this.state.transactions}
                    </table>
                </div>
            </div>
        );
    }
}