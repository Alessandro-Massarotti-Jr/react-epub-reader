import styles from "./app.module.css"

import { BrowserRouter } from "react-router-dom"

import Footer from "./components/Layout/Footer"
import Header from "./components/Layout/Header"
import Router from "./Router"
import { UrlBookProvider } from "./providers/UrlBookProvider"
import { FileBookProvider } from "./providers/FileBookProvider"


function App() {


  return (
    <FileBookProvider>
      <UrlBookProvider>
        <BrowserRouter>
          <Header />
          <div className={styles.mainContainer}>
            <Router />
          </div>

          <Footer />
        </BrowserRouter>
      </UrlBookProvider>
    </FileBookProvider>

  )
}

export default App
