import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Workshops from './components/workshops/Workshops'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="App">
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Contact" component={Contact} />
                        <Route exact path="/Workshops" component={Workshops} />
                        <Route exact path="/About" component={About} />
                        {/* <Route
                            exact
                            path="/MobileMenu"
                            component={MobileMenu}
                        /> */}
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App
