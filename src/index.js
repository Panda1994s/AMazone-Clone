import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Header from "./Header";
import Checkout from "./Chackout";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import * as serviceWorker from "./serviceWorker";
import reducer, { initialState } from "./reducer";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./StateProvider";

ReactDOM.render(
  <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <App />
            </>
          }
        />
        <Route
          path="checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route path="login" element={<Login />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </StateProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
