import React from 'react'
import "./Products.css"
import pro1 from './images/product-1.jpeg'
import pro2 from './images/product-2.jpeg'
import pro3 from './images/product-3.jpeg'

const Products = () => {
  return(
    <div className="products">
      <div className="text">
        <h1 className="p3">check out</h1>
        <h1 className="p6">OUR PRODUCTS</h1>
        <p className="p7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae vitae! Natus sed fugiat id laudantium nemo, asperiores corporis amet!</p>
        <button className="btn">INVENTORY</button>
      </div>
      <div className="pro">
        <div className="single">
          <img src={pro1} alt="image" className="img"/>
          <h3 className="title">PRODUCT TITLE</h3>
          <h4 className="price">$6.99</h4>
        </div>
        <div className="single">
          <img src={pro2} alt="image" className="img"/>
          <h3 className="title">PRODUCT TITLE</h3>
          <h4 className="price">$6.99</h4>
        </div>
        <div className="single">
          <img src={pro3} alt="image" className="img"/>
          <h3 className="title">PRODUCT TITLE</h3>
          <h4 className="price">$6.99</h4>
        </div>
      </div>
    </div>
  );
}

export default Products