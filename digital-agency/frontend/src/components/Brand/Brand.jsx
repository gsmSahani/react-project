import React from "react";
import Boat from "../../assets/places/boat.jpg";
import Water from "../../assets/places/water.jpg";
import Place4 from "../../assets/places/place4.jpg";
import Place5 from "../../assets/places/place5.jpg";
import Place6 from "../../assets/places/place6.jpg";
// import Tajmahal from "../../assets/places/tajmahal.jpg";
const Brand = () => {
  return (
    <>
      <div className="container my-12">
        <h1 className="text-center text-3xl font-bold">Destinations</h1>
        <div className="flex flex-wrap items-center justify-evenly gap-3 py-6 md:32px">
          <img src={Boat} alt="no boat found" className="w-48 h-48 shadow-lg"/>
          <img src={Water} alt="no water found" className="w-48 h-48 shadow-lg"/>
          <img src={Place4} alt="no Place4 found" className="w-48 h-48 shadow-lg"/>
          <img src={Place5} alt="no Place5 found" className="w-48 h-48 shadow-lg"/>
          <img src={Place6} alt="no Place6 found" className="w-48 h-48 shadow-lg"/>
          {/* <img src={Tajmahal} alt="no Tajmahal found" className="w-48 h-48"/> */}
        </div>
      </div>
    </>
  );
};
export default Brand;
