const database = require('../models')
const { Sequelize } = require('sequelize');

class ExtractsController {

    static async createTransaction(req, res) {
        const newExtract = req.body
        try {

            if(isNaN(newExtract.transaction_value)){
                throw "O valor da transação deve ser numérico.";
            }

            const newExtractCreated = await database.Extracts.create({...newExtract, transaction_date: Date.now()})
            const {origin_id, destiny_id} = newExtract; 

            const originClient = await database.Clients.findOne({
                where: {id: Number(origin_id)}
            })

            const destinyClient = await database.Clients.findOne({
                where: {id: Number(destiny_id)}
            })

            const new_balance_sender = Number(originClient.dataValues.account_balance) - Number(newExtract.transaction_value);
            await database.Clients.update(
                {
                    account_balance: new_balance_sender
                },
                {
                    where: {id: Number(origin_id)}
                }
            )

            const new_balance_receiver = Number(destinyClient.dataValues.account_balance) + Number(newExtract.transaction_value);
            await database.Clients.update(
                {
                    account_balance: new_balance_receiver
                },
                {
                    where: {id: Number(destiny_id)}
                }
            )

            return res.status(200).json(newExtractCreated)
        } catch (error) {
            (error)
            return res.status(400).json(error.message)
        }
    }

    static async getDailyReport(req, res) {

        const Op = Sequelize.Op;
        const TODAY_START = new Date().setHours(0, 0, 0, 0);
        const NOW = new Date().setHours(23, 59, 59, 0);
        try {
            const result_report = await database.Extracts.findAll({
                where: {
                    transaction_date: {
                        [Op.gt]: TODAY_START,
                        [Op.lt]: NOW
                    }
                }
            })

            for (const transaction of result_report) {

                const origin_client = await database.Clients.findOne({
                    where: {
                        id: transaction.origin_id
                    }
                })

                const destiny_client = await database.Clients.findOne({
                    where: {
                        id: transaction.destiny_id
                    }
                })

                transaction.dataValues.origin_client = origin_client.name + " (" + origin_client.account_number + ")"
                transaction.dataValues.destiny_client = destiny_client.name + " (" + destiny_client.account_number + ")"
            }

            return res.status(200).json(result_report)
        } catch (error) {

            return res.status(500).json(error.message)
        }
    }

    static async getClientTransactions(req, res) {
        const Op = Sequelize.Op;
        (req.params.id)
        const client_id = req.params.id

        try {

            const transactions = await database.Extracts.findAll({
                where: {
                    [Op.or]: [{origin_id: client_id}, {destiny_id: client_id}]
                }
            })

            for (const transaction of transactions) {

                const origin_client = await database.Clients.findOne({
                    where: {
                        id: transaction.origin_id
                    }
                })

                const destiny_client = await database.Clients.findOne({
                    where: {
                        id: transaction.destiny_id
                    }
                })

                transaction.dataValues.origin_client = origin_client.name + " (" + origin_client.account_number + ")"
                transaction.dataValues.destiny_client = destiny_client.name + " (" + destiny_client.account_number + ")"
            }

            return res.status(200).json(transactions)
        } catch (error) {

            return res.status(500).json(error.message)
        }

    }
}

module.exports = ExtractsController;