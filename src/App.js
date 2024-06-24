import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Checkout from './Checkout';
import { useStateValue } from "./StateProvider"
import Login from './Login';
import { auth } from "./firebase"
import React,{useEffect} from "react"
import Payment from './Payment';
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"



function App() {

  const [{user},dispache] = useStateValue()


const Promise = loadStripe("pk_test_51PSnH6Bq8t0fJwSsQvL40QVYJ7N6FNrJyI9j7ObyblfP30fPh5PBb66ZcrgjEuk4CUs67ks7qmfUaiRFrtOJB1Vy00F714jgpZ")

useEffect(()=>{
  auth.onAuthStateChanged((authUser)=>{
    console.log(authUser)
    if(authUser){
      dispache({
        type:"SET_USER",
        user: authUser
      })
    }else{
      dispache({
        type:"SET_USER",
        user: null
      })
    }
  })
},[])



  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/chackout' element={
          <>
                <Header />
                <Checkout />
              </>
        }/>
        <Route
        path='/' element={
          <>
        <Header />
          <Home />
          </>
                }
        />
        <Route path='/login' element={
          <>
                
                <Login/>
              </>
        }/>
        <Route path='/auth' element={
          <>
                <Login/>
                
              </>
        }/>
        <Route path="/payment" element={
          <Elements stripe={Promise}>
            <Payment />
          </Elements>
        } />
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
