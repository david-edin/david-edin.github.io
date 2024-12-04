import React from "react";
import Image from "next/image";

const array = [...Array(30)];

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

const GetImages = () => {
  return (
    <div className="image-wrapper">
      {array.map((currElement, index) => (
        <Image
          style={{
            left: getRandom(5, 80) + "vw",
            top: getRandom(10, 100) + "%",
            height: "auto",
          }}
          alt="image"
          src={"/assets/" + (index + 1) + ".jpg"}
          priority={true}
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
