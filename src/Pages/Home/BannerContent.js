import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const BannerContent = () => {
  const contents = [
    {
      title: "Opening Hours",
      des: "Lorem ipsum dolor sit amet consectetur",
      img: clock,
    },
    {
      title: "Visit our location",
      des: "Lorem ipsum dolor sit amet consectetur",
      img: marker,
    },
    {
      title: "Contact us now",
      des: "++01710101010",
      img: phone,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {contents.map((content) => (
        <div class="card card-side bg-primary shadow-xl p-5 ">
          <figure>
            <img src={content.img} alt="Movie" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{content.title}</h2>
            <p>{content.des}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerContent;
