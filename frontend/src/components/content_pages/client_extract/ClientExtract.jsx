import './ClientExtract.css'
import React from 'react'
import { Component } from "react";

export default class ClientExtract extends Component {
    constructor() {
        super();
        this.handleDropdownChangeClient = this.handleDropdownChangeClient.bind(this);
        this.state = {
            clients : null,
            client_selected: null,
            transactions: null
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/clients')
            .then(response => response.json())
            .then(data => this.setState({ 
                clients: data.map((client) => <option value={client.id}>{client.name}</option>),
                client_selected: data ? data[0].id : null
            }))
            .then(
                fetch('http://localhost:3001/transactions/' + this.state.client_selected)
                    .then(response => response.json())
                    .then(data => this.setState({ 
                        transactions: data.map((transaction) => <tr><td>{transaction.origin_client}</td><td>{transaction.destiny_client}</td><td>{transaction.transaction_value}</td><td>{this.format_date(transaction.transaction_date)}</td></tr>)
                    }))
            );

        
    }

    handleDropdownChangeClient(e) {
        this.setState({ client_selected: e.target.value });

        fetch('http://localhost:3001/transactions/' + e.target.value)
            .then(response => response.json())
            .then(data => this.setState({ 
                transactions: data.map((transaction) => <tr><td>{transaction.origin_client}</td><td>{transaction.destiny_client}</td><td>{transaction.transaction_value}</td><td>{this.format_date(transaction.transaction_date)}</td></tr>)
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
            <div className="container">
                <div class="page-title">
                    Saldo do cliente
                </div>

                <div class="form-item">
                    <div class="label-input"> Origem </div>
                    <select onChange={this.handleDropdownChangeClient}>
                        <option> Selecione um cliente </option>
                        {this.state.clients}
                    </select>
                </div>
                
                {this.state.client_selected ? 
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
                </div> : null}
            </div>
        );
    }
}