import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Masthead from "./components/layout/Masthead";
import Subscribe from "./components/layout/Subscribe";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="bg-white text-[#484548] min-h-screen">
      <nav>
        <Masthead />
        <Navbar />
      </nav>
      <main>
        <Outlet />
        <section>
          <Subscribe></Subscribe>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
