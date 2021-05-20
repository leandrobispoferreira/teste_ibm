import './App.css';
import { HashRouter } from 'react-router-dom'

import Header from './components/top_bar/Header'
import Routes from './components/route/Routes'
import Footer from './components/footer/Footer'

const app = () =>
    <HashRouter>
        <div className="app">
            <Header />
            <Routes/>
            <Footer/>
        </div>
    </HashRouter>

export default app;