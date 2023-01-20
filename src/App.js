import React, { Suspense, useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Home from './Components/Home'
import Collections from "./Components/Collections";
import KidsWear from "./Components/KidsWear";
import ViewProduct from "./Components/ViewProduct";
import Weddingsuits from "./Components/Weddingsuits";
import Pagenotfound from "./Components/Pagenotfound";
import Signin from "./Components/Signin";


function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <switch>
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />}>
              <Route path="WeddingSuits" element={<Weddingsuits />} />
            </Route>
            <Route path="/kids" element={<KidsWear />}>
              <Route path="kids/product" element={<ViewProduct />} />
            </Route>
            <Route path="product" element={ <ViewProduct />}/>
            <Route path="/Signin" element={<Signin />} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
          </switch>
      </div>
    </BrowserRouter>
  )

}

export default App;
