import styles from "./app.module.css"

import {BrowserRouter} from "react-router-dom"

import Footer from "./components/Layout/Footer"
import Header from "./components/Layout/Header"
import Router from "./Router"


function App() {


  return (
    <BrowserRouter>
      <Header />
      <div className={styles.mainContainer}>
      <Router />
      </div>
   
      <Footer/>
    </BrowserRouter>
  )
}

export default App
