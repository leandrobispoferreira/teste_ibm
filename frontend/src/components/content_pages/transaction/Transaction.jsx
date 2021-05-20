import './Transaction.css'
import React from 'react'
import { Component } from "react";

export class Transaction extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDropdownChangeOrigin = this.handleDropdownChangeOrigin.bind(this);
        this.handleDropdownChangeDestiny = this.handleDropdownChangeDestiny.bind(this);
        this.state = {
            clients: null,
            origin_id: null,
            destiny_id: null
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/clients')
        .then(response => response.json())
        .then(data => this.setState({ 
            clients: data.map((client) => <option value={client.id}>{client.name}</option>),
            origin_id: data[0].id,
            destiny_id: data[0].id,
        }));
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = {
            origin_id: this.state.origin_id,
            destiny_id: this.state.destiny_id,
            transaction_value: event.target[2].value,
        }

        fetch('http://localhost:3001/transactions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        .then(function(res) {

            if (res.status === 400) {
                throw Error({message: res.statusText});
            }
            alert("Transação realizada");
            event.target.reset();
        }).catch((err) => {
            alert("O valor da transação deve ser numérico");
        });
    }

    handleDropdownChangeOrigin(e) {
        this.setState({ origin_id: e.target.value });
    }

    handleDropdownChangeDestiny(e) {
        this.setState({ destiny_id: e.target.value });
    }

    render() {
        return (
            <div className="container">
                <div class="page-title">
                    Realizar transação
                </div>
            
                <form onSubmit={this.handleSubmit} >
                    <div class="form-item">
                        <div class="label-input"> Origem </div>
                        <select onChange={this.handleDropdownChangeOrigin}>
                            {this.state.clients}
                        </select>
                    </div>

                    <div class="form-item">
                        <div class="label-input"> Destino </div>
                        <select onChange={this.handleDropdownChangeDestiny}>
                            {this.state.clients}
                        </select>
                    </div>

                    <div class="form-item">
                        <div class="label-input"> Valor </div>
                        <input class="input-box" type="text" name="age" />
                    </div>

                    <button class="form-buttom"> Confirmar </button>
                </form>
            </div>
        );
    }
}