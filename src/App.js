import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Footer from './components/Home/Header/Footer/Footer';
import PurchasePage from './components/PurchasePage/PurchasePage';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Explorer from './components/Explorer/Explorer';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explorer">
              <Explorer></Explorer>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/purchase/:productId">
              <PurchasePage></PurchasePage>
            </PrivateRoute>
            <PrivateRoute path="/dashBoard">
              <DashBoard></DashBoard>
            </PrivateRoute>

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
