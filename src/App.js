
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
function App() {
  return (
<>



<BrowserRouter>
<Navbar  />
      <Routes>
        <Route path="/" element={<Textform />} />
        <Route path="/about" element={<About />} />
     </Routes>
    </BrowserRouter>

</>
  );
}

export default App;
