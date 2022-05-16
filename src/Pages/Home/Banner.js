import React from "react";
import banner from "../../assets/images/chair.png";
import BannerContent from "./BannerContent";
import bg from "../Home/Banner.module.css";

const Banner = () => {
  return (
    <>
      <div class={`hero py-36 ${bg.bgImage}`}>
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner}
            class="lg:max-w-lg sm:max-w-full rounded-lg shadow-2xl mb-8"
          />
          <div>
            <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <BannerContent></BannerContent>
    </>
  );
};

export default Banner;
