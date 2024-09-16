import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import list from "../../public/list.json";
import Cards from "./Cards";
import axios from "axios";

function FreeBook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        const freebooks = res.data.filter((book) => book.category === "Free");
        setBook(freebooks);
        console.log(freebooks);
      } catch (error) {
        console.log("Error ::", error);
      }
    };
    getBook();
  }, []);

  // console.log(list);
  // const filterData = list.filter((data) => data.category === "Free");
  // console.log(filterData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <h1 className="font-bold text-xl pb-2">Free Offered books</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          recusandae ex natus perspiciatis velit nobis placeat iure
          exercitationem dolorum, inventore fugiat reiciendis, quaerat
          doloremque dolorem!
        </p>

        <div className="slider-container">
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
