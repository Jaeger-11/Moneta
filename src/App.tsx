import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout";
import Overview from "./pages/Overview";
import Transaction from "./pages/Transaction";
import Loans from "./pages/Loans";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Overview/>} />
          <Route path="transaction" element={<Transaction/>} />
          <Route path="Loans" element={<Loans/>} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
