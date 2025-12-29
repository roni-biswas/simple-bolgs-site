import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      {/* navbar section */}
      <Navbar />
      <main className="min-h-[calc(100vh-116px)]"></main>
      {/* footer section */}
      <Footer />
    </>
  );
}

export default App;
