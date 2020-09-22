import React from "react";
import Product from "../templates/Product";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="home">
      {/* <h2>Home Page</h2> */}
      <div className="home-continer">
        <img
          className="home-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/skillsstore/2020/August/Medh_Alexa_GW_1500x600._CB405585145_.jpg"
          alt=""
        ></img>

        <div className="home-row">
          {/* products */}
          <Product
            id="12345"
            title="T - Shirt"
            price={14}
            rating={3}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/BrightBuy/Mens_fashion_186x116._SY116_CB426138153_.jpg"
          />
          <Product
            id="12343"
            title="Washing Machine set"
            price={19.99}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/D16106072_IN_LATV_MSO_QC_Washing-machine_186x116._SY116_CB432544816_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="12346"
            title="Automotive essentials | Tyre"
            price={9.99}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Tyre_372x232._SY116_CB405083904_.jpg"
          />
          <Product
            id="12347"
            title="Shower"
            price={4.9}
            rating={4}
            image="https://m.media-amazon.com/images/I/31GgRSkt4fL.__AC_SY200_.jpg"
          />
          <Product
            id="12348"
            title="gents | Denim Original pant"
            price={24.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/31feZo6KJVL.__AC_SY200_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="12349"
            title="Bed sheet set  | 
            5 with different color and style"
            price={9}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/61HAb7mz1-L._AC_SY200_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
