import React from "react"
import "./Scrolls.scss"
import horl from "../../assets/horlicks.webp"
import head from "../../assets/head.webp"
import laxo from "../../assets/laxo.webp"
import calci from "../../assets/calci.webp"
import gyno from "../../assets/gyno.webp"

function Scrolls() {
    return (  
    <section className="scroll-container  shadow">  
  <div class="cards-wrapper ">

    <div class="product-card">
        <div className="img-container shadow">
          <img src={horl}/>
        </div>
        <div className="brand">
          Horlicks
           </div>
        <div>
        <p className="p-0 m-0">Health & Nutrition Drink 500 G</p>
          <p className="p-0 m-0" style={{color:'lightgrey'}}>MRP <del>₹299.00</del></p>
          <p className="m-0">₹164.45 <span style={{color:"red"}} >(45%)</span></p>
        </div>
    </div>

    <div class="product-card">
        <div className="img-container shadow">
          <img src={head} />
        </div>
        <div className="brand">
          Head & Shoulders
           </div>
        <div>
        <p className="p-0 m-0"> Silky Black 340 Ml on bottle</p>
          <p className="p-0 m-0" style={{color:'lightgrey'}}>MRP <del>₹99.00</del></p>
          <p className="m-0">₹60.22 <span style={{color:"red"}} >(25%)</span></p>
        </div>
      </div>

      <div class="product-card">
        <div className="img-container shadow">
          <img src={laxo} />
        </div>
        <div className="brand">
        Laxopeg
           </div>
        <div>
        <p className="p-0 m-0">Kid Sachet 8.5gm Powder</p>
          <p className="p-0 m-0" style={{color:'lightgrey'}}>MRP <del>₹39.00</del></p>
          <p className="m-0">₹29.45 <span style={{color:"red"}} >(35%)</span></p>
        </div>
      </div>

      <div class="product-card">
        <div className="img-container shadow">
          <img src={calci} />
        </div>
        <div className="brand">
        Calcimax 500
           </div>
        <div>
        <p className="p-0 m-0"> Health Supplement Tablets</p>
          <p className="p-0 m-0" style={{color:'lightgrey'}}>MRP <del>₹89.00</del></p>
          <p className="m-0">₹124.45 <span style={{color:"red"}} >(25%)</span></p>
        </div>
      </div>

      <div class="product-card">
        <div className="img-container shadow">
          <img src={gyno} />
        </div>
        <div className="brand">
          Gynoveda
           </div>
        <div>
        <p className="p-0 m-0"> 30+ Calcium Vitamin D3</p>
          <p className="p-0 m-0" style={{color:'lightgrey'}}>MRP <del>₹₹700.00</del></p>
          <p className="m-0">₹640.45 <span style={{color:"red"}} >(20%)</span></p>
        </div>
      </div>

    </div>
  </section>
    );
}

export default Scrolls;