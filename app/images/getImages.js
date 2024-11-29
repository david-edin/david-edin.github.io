import React from "react";
import Image from "next/image";
import "./images.css";

const array = [...Array(30)];

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

const GetImages = () => {
  return (
    <div className="image-container">
      {array.map((currElement, index) => (
        // console.log(index),
        <Image
          style={{
            top: getRandom(0, 400),
            left: getRandom(0, 600),
            height: "auto",
          }}
          alt="image"
          src={"/assets/" + (index+1) + ".jpg"}
          width={0}
          height={0}
          key={index}
          className="image"
        />
      ))}
    </div>
  );
};

export default GetImages;
