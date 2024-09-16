import React, { useEffect, useState } from "react";

import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("Error ::", error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center text-center justify-center">
          <h1 className="text-2xl  md:px-20 px-4">
            We are deighted to have{" "}
            <span className="text-pink-900">you Here :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
            nam mollitia! Magni ut ipsum, eius corporis culpa, cum ratione velit
            perspiciatis vitae suscipit ullam et atque minus laudantium! Ratione
            eligendi dolores expedita totam, repudiandae adipisci!
          </p>
          <Link to="/">
            <button
              type="button"
              className="bg-pink-500 text-white cursor-pointer px-4 py -2 rounded-md hover:bg-pink=900 duration-300 mt-6"
            >
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
