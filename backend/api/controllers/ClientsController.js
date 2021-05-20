const database = require('../models')

class ClientsController {

    static async createClient(req, res) {
        const newClient = req.body
        try {

            if(isNaN(newClient.age)){
                throw "O valor da transação deve ser numérico.";
            }

            if(isNaN(newClient.account_number)){
                throw "O número da conta deve ser numérico.";
            }

            const newClientCreated = await database.Clients.create({...newClient, account_balance: 0, active: true})
            return res.status(200).json(newClientCreated)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async getAllClients(req, res){
        try {
            const dbRespose = await database.Clients.findAll()
            return res.status(200).json(dbRespose)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
}

module.exports = ClientsController;