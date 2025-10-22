import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import NoEncontrada from "./pages/NoEncontrada";
import Home from "./pages/Home";
import Products from "./pages/Product";

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50 flex flex-col">
                <Header />
                <main className="flex-1 max-w-6x1 mx-aut w-full px-4 py-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="*" element={<NoEncontrada />} />
                    </Routes>
                </main>
                <Cart />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
