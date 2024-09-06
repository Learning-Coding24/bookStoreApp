import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  console.log(list);
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
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
