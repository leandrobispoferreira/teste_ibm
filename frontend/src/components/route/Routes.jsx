import React from 'react'
import { Switch, Route } from 'react-router'

import Register from '../../components/content_pages/register/Register'
import {Transaction} from '../../components/content_pages/transaction/Transaction'
import ClientExtract from '../../components/content_pages/client_extract/ClientExtract'
import DailyReport from '../../components/content_pages/daily_report/DailyReport'
import ClientBalance from '../../components/content_pages/client_balance/ClientBalance'

const routes = () =>
    <Switch>
        <Route exact path="/" component={Register}/>
        <Route exact path="/transaction" component={Transaction}/>
        <Route exact path="/client_extract" component={ClientExtract}/>
        <Route exact path="/daily_report" component={DailyReport}/>
        <Route exact path="/client_balance" component={ClientBalance}/>
    </Switch>

export default routes;