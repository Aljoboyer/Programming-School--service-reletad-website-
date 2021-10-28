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
import Login from './Login/Login';
import Register from './Register/Register';
import Addcourse from './Addcourses/Addcourse';
import Authcontext from './Context/Authcontext';
import Enrolldetails from './EnrollDetails/Enrolldetails';
import Yourcours from './Yourcours/Yourcours';
import Privateroute from './Privateroute/Privateroute';
function App() {
  return (
    <div className="container-fluid">
      <Authcontext>
          <Router>
              <Header></Header>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/service" component={Services} />
                <Route exact path="/aboutus"  component={Aboutus}/>
                <Route exact path="/upcommingcourse" component={Upcommingcourse} />
                <Route exact path="/login">
                    <Login></Login>
                </Route>
                <Route exact path="/register">
                    <Register></Register>
                </Route>
                <Route exact path="/addcourse">
                    <Addcourse></Addcourse>
                </Route>Yourcours
                <Privateroute exact path="/yourcours">
                    <Yourcours></Yourcours>
                </Privateroute>
                <Route exact path="/enrolldetails/:id">
                    <Enrolldetails></Enrolldetails>
                </Route>
                <Route exact path="*" component={Notfound}/>
              </Switch>
              <Footer></Footer>
            </Router>
      </Authcontext>
    </div>
  );
}

export default App;
