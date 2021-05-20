import './ClientBalance.css'
import React from 'react'
import { Component } from "react";

export default class ClientBalance extends Component {
    constructor() {
        super();
        this.state = {
            clients: null
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/clients')
        .then(response => response.json())
        .then(data => this.setState({ 
            clients: data.map((client) => <tr><td>{client.account_number}</td><td>{client.name}</td><td>{"R$ " + client.account_balance}</td></tr>)
        }));
    }

    render() {
        return (
            <div className="container">
                <div class="page-title">
                    Saldo do cliente
                </div>
                
                <div class="form-item">
                    <table>
                        <tr>
                            <th>Número da conta</th>
                            <th>Cliente</th>
                            <th>Saldo</th>
                        </tr>
                        {this.state.clients}
                    </table>
                </div>
            </div>
        );
    }
}