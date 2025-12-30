import React, { useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author_img,
    author,
    posted_date,
    hashtags,
    reading_time,
  } = blog || {};

  const [mark, setMarked] = useState(false);

  const handleBookMarked = (blog) => {
    handleBookMark(blog);
    setMarked(true);
  };

  const handleBookMarkAsRead = () => {
    handleMarkAsRead(id, reading_time);
    setMarked(false);
  };

  return (
    <div className="single-blog my-8 border-b border-b-gray-200 pb-5">
      <img className="w-full mb-3" src={cover} alt={title} />
      <div className="flex justify-between">
        <div className="flex gap-2.5 items-center">
          <img className="w-14" src={author_img} alt={author} />
          <div>
            <p className="font-bold">{author}</p>
            <p>{posted_date}</p>
          </div>
        </div>
        <button
          onClick={() => handleBookMarked(blog)}
          className="cursor-pointer"
        >
          {mark ? <FaBookmark size={24} /> : <FaRegBookmark size={24} />}
        </button>
      </div>
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      <div className="flex justify-between items-center mt-3">
        <div>
          {hashtags.map((tag, index) => (
            <span
              key={index}
              className="text-md text-teal-500 font-semibold mr-2 border border-teal-500 px-2 rounded-md p-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={handleBookMarkAsRead}
          className="btn btn-accent mt-2 text-sm text-white font-bold"
        >
          Mark as read
        </button>
      </div>
    </div>
  );
};

export default Blog;
