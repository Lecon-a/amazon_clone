import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Checkout from "./component/checkout/Checkout";
// import Login from "./login/Login";
import Orders from "./component/order/Orders";
import ShowMoreProduct from "./component/show_more/ShowMoreProduct";
// import { auth } from "./firebase";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./redux/hooks";
import { setUser } from "./redux/cartSlice";
useAppSelector

function App() {

  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.basket.user);

  // useEffect(() => { 
  //   auth.onAuthStateChanged(authUser => {
  //     if (authUser) {
  //       // the user just logged in / the user was logged in
  //       dispatch(setUser(authUser));
  //     } else {
  //       // the user is logged out
  //       dispatch(setUser(null));
  //     }
  //   })
  // }, [])
  
  return (
    <Router>
      <div className="app">
        <Routes>

              {/* <Route
                  path="/login"
                  element={
                    <>
                      <Login />
                    </>}
              /> */}
              
              <Route
                  path="/more_products"
                  element={
                    <>
                      <Header />
                      <ShowMoreProduct />
                    </>}
              />
              
              <Route
                      path="/orders"
                      element={
                        <>
                          <Header />
                          <Orders />
                        </>}
              />
          
              <Route
                  path="/checkout"
                  element={
                    <>
                      <Header />
                      <Checkout />
                    </>}
              />
          
                <Route
                  path="/"
                  element={
                    <>
                      <Header />
                      <Home />
                    </>}
                />
          
                <Route
                  path="*"
                  element={<>
                    <Header />
                    <h1>Page Not Found</h1>
                  </>}
                />
          
          </Routes>
        </div>
    </Router>
  )
}

export default App




{/* <h1>Hello SPa ICT Hub Programmers, let's build the Amazon Store 🚀</h1> */ }