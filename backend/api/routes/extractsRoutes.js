const {Router} = require('express')
const ExtractsController = require('../controllers/ExtractsController')

const router = Router()

router.get('/transactions', ExtractsController.getDailyReport)
router.get('/transactions/:id', ExtractsController.getClientTransactions)
router.post('/transactions', ExtractsController.createTransaction)

module.exports = router