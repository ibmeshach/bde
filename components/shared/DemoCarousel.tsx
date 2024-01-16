"use client";

import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const DemoCarousel = () => {
  useEffect(() => {
    // If you need any initialization logic, you can place it here
    // This is equivalent to componentDidMount in class components
    return () => {
      // If you need to clean up any resources when the component unmounts,
      // you can place that logic here
      // This is equivalent to componentWillUnmount in class components
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <Carousel
      autoPlay
      infiniteLoop
      swipeable
      emulateTouch
      showStatus={false}
      showIndicators={false}
      dynamicHeight
    >
      <div className="relative">
        <Image
          src="/assets/images/slide1.jpg"
          alt="hero"
          width={1000}
          height={1000}
          className="object-cover" // Add this class to make sure the image covers the entire container
        />
        {/* <p>
          {" "}
          Unlock the Magic of Events at Black Diamond Entertainment. Browse,
          Book, and Manage Tickets Effortlessly. Your One-Stop Shop for
          Creating, Buying, and Enjoying Unforgettable Experiences!
        </p> */}
      </div>

      <div className="relative">
        <Image
          src="/assets/images/slide2.jpg"
          alt="hero"
          width={1000}
          height={2000}
        />{" "}
        {/* <p>
          {" "}
          Unlock the Magic of Events at Black Diamond Entertainment. Browse,
          Book, and Manage Tickets Effortlessly. Your One-Stop Shop for
          Creating, Buying, and Enjoying Unforgettable Experiences!
        </p> */}
      </div>
      <div className="relative">
        <Image
          src="/assets/images/slide3.jpg"
          alt="hero"
          width={1000}
          height={1000}
        />{" "}
        {/* <p>
          {" "}
          Unlock the Magic of Events at Black Diamond Entertainment. Browse,
          Book, and Manage Tickets Effortlessly. Your One-Stop Shop for
          Creating, Buying, and Enjoying Unforgettable Experiences!
        </p> */}
      </div>
    </Carousel>
  );
};

export default DemoCarousel;
