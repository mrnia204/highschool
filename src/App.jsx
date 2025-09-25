import { Outlet } from "react-router-dom";
import Footer from "./components/feature/Footer";
import Header from "./components/feature/Header";
import About from "./pages/about/About";
import Home from "./pages/home/Home";

function App() {
  return(
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App;