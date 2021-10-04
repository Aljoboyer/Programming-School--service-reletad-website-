import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Home from './Homepage/Home';
import Notfound from './Notfound/Notfound'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './Footer/Footer';
import Services from './Services/Services';
import Aboutus from './Aboutus/Aboutus';
import Upcommingcourse from './Upcomming/Upcommingcourse';
function App() {
  return (
    <div className="container-fluid">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/service" component={Services} />
            <Route exact path="/aboutus"  component={Aboutus}/>
            <Route exact path="/upcommingcourse" component={Upcommingcourse} />
            <Route exact path="*" component={Notfound}/>
          </Switch>
          <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
