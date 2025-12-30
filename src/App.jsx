import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      {/* Navbar Section */}
      <Navbar />
      {/* Main Content */}
      <main className="min-h-[calc(100vh-116px)] flex gap-5 w-11/12 mx-auto my-5 px-2">
        {/* Left side content here */}
        <div className="left-container w-[70%]">
          <Blogs />
        </div>
        {/* Right side content here */}
        <div className="right-container w-[30%] max-h-16 text-xl font-semibold border-l border-l-gray-300 pl-4">
          <h1>Reading Time: 0</h1>
          <h1>Bookmarked Count: 0</h1>
        </div>
      </main>
      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default App;
