import { BrowserRouter as Router ,Route, Routes } from "react-router-dom"
import Explore from "./components/Explore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

function App() {

  return (
    <Provider store={appStore}>
    <Router>
      <div className="min-h-screen  flex flex-col">
      <div className="flex-grow pb-20">
      <Routes>
        <Route path="/" element={<Explore />}/>
        <Route path="/cart" element={<Cart />}/>

      </Routes>
      </div>
      <Footer />
      </div>
    </Router>
    </Provider>
  )
}

export default App
