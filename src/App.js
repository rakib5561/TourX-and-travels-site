import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pagess/Home/Home/Home';
import Header from './Shared/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './Pagess/NotFound/NotFound';
import About from './Pagess/About/About';
import MyBooking from './Pagess/MyBooking/MyBooking';
import Contact from './Pagess/Contact/Contact';
import Login from './Pagess/Login/Login';
import Footer from './Shared/Footer/Footer';
import ManagePackages from './Pagess/ManagePackage/ManagePackages';
import GetBooking from './Pagess/GetBooking/GetBooking';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Header></Header>
        <Switch>

              <Route exact path="/">
                  <Home></Home>
              </Route>
              <Route path="/home">
                  <Home></Home>
              </Route>
              <Route path="/home">
                  <Home></Home>
              </Route>
              <Route path="/about">
                  <About></About>
              </Route>
              <Route path="/manage">
                  <ManagePackages></ManagePackages>
              </Route>

              <PrivateRoute path="/getbooking/:objectId">
                 <GetBooking></GetBooking>
              </PrivateRoute>
              
              <Route path="/booking">
                  <MyBooking></MyBooking>
              </Route>
              <Route path="/contact">
                  <Contact></Contact>
              </Route>
              <Route path="/login">
                    <Login></Login>
              </Route>
              <Route path="*">
                  <NotFound></NotFound>
              </Route>

        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
