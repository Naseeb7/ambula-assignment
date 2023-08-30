import Navbar from "./widgets/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./scenes/Homepage/Homepage";
import About from "./scenes/About/About";
import Contact from "./scenes/Contact/Contact";
import { TodoState } from "Contexts/TodoContext";
import {CartState} from "Contexts/CartContext";
import {WeatherState} from "Contexts/WeatherContext";

function App() {
  return (
    <>
      <TodoState>
        <CartState>
          <WeatherState>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
              </Routes>
            </BrowserRouter>
          </WeatherState>
        </CartState>
      </TodoState>
    </>
  );
}

export default App;
