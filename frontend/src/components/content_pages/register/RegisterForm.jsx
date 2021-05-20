import { Component } from "react";

export class RegisterForm extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = {
            name: event.target[0].value,
            age: event.target[1].value,
            email: event.target[2].value,
            account_number: event.target[3].value,
        }

        fetch('http://localhost:3001/clients', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        .then(function(res) {
            if (res.status === 400) {
                throw Error(res.statusText);
            }
            alert("Cliente Cadastrado");
            event.target.reset();
        }).catch(function() {
            alert("Os campos 'idade' e 'Número da conta' devem ser numéricos.");
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="form-item">
                    <div class="label-input"> Nome </div>
                    <input class="input-box" type="text" name="name" />
                </div>

                <div class="form-item">
                    <div class="label-input"> Idade </div>
                    <input class="input-box" type="text" name="age" />
                </div>

                <div class="form-item">
                    <div class="label-input"> Email </div>
                    <input class="input-box" type="text" name="email" />
                </div>

                <div class="form-item">
                    <div class="label-input"> Número da conta </div>
                    <input class="input-box" type="text" name="account_number" />
                </div>

                <button class="form-buttom"> Cadastrar </button>
            </form>
        );
    }
}
