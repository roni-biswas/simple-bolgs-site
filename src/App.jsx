import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [bookMarked, setBookMarked] = useState([]);

  const handleBookMark = (blog) => {
    setBookMarked((prev) => {
      const isExist = prev.find((item) => item?.id === blog?.id);
      if (isExist) {
        return prev;
      }
      return [...prev, blog];
    });
  };

  return (
    <>
      {/* Navbar Section */}
      <Navbar />
      {/* Main Content */}
      <main className="min-h-[calc(100vh-116px)] flex gap-5 w-11/12 mx-auto my-5 px-2">
        {/* Left side content here */}
        <div className="left-container w-[70%]">
          <Blogs handleBookMark={handleBookMark} />
        </div>
        {/* Right side content here */}
        <div className="right-container w-[30%] h-auto p-5 border-l-2 border-l-orange-500 mt-4 ">
          <div className="text-xl font-semibold">
            <h1>Reading Time: 0</h1>
            <h1 className="text-teal-600">
              Bookmarked Count:{" "}
              <span className="text-black">{bookMarked.length}</span>
            </h1>
          </div>
          {bookMarked.map((item) => (
            <div className="mt-4 rounded-md border border-amber-200 p-2">
              <h4 className="font-bold text-sm">
                {item.author}
                <span className="font-normal"> - {item?.posted_date}</span>
              </h4>
              <h1 className="text-2xl font-bold text-gray-800">
                {item?.title}
              </h1>
            </div>
          ))}
        </div>
      </main>
      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default App;
