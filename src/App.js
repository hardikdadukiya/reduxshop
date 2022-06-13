import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Header from './components/Header';
import ProductDetalis from "./components/ProductDetalis";
import ProductLisiting from './components/ProductLisiting';

function App() {
  return (
    <div >
      <Router>
      <Header />
      <Routes>
      <Route path="/" element={<ProductLisiting/>}/>
      <Route path="/product/:productId" element={<ProductDetalis/>}/>
      <Route path="*">404 Error</Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
