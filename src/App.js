import Home from './Home'
import Contact from './Contact'
import About from './About'
import Workshops from './Workshops'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MobileMenu from './MobileMenu'

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
                        <Route
                            exact
                            path="/MobileMenu"
                            component={MobileMenu}
                        />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App
