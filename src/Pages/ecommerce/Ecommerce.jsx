import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import axios from "axios";
import "../learnhooks/learnhooks.css";
import { Link } from "react-router-dom";
import "./ecommerce.css";
import Footer from "../../components/footer/Footer";

const Ecommerce = (product) => {
  const [data, setData] = useState("");
  console.log("data", data);

  const getProductList = async () => {
    const response = await axios.get("https://zenquotes.io/api/quotes/");
    console.log("res", response.data.products);
    setData(response.data.products);
  };
  // https://dummyjson.com/products?limit=12

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div>
      <Header />
      <div className="hero-div">
        <h3 className="hero-content hero-a">Welcome to my shop</h3>
        <p className="hero-content">Discover a world of amazing products!</p>
        <div className="hero-content-btn">
          <Link to="/productcategories">
            <button id="btn" style={{ cursor: "pointer" }}>
              Shop now
            </button>
          </Link>
        </div>
      </div>
      <div>
        <h3 className="hero-content">Featured Products</h3>
        <div id="featured-product">
          {/* <p>{data[0]?.title}</p> */}
          {data &&
            data?.map((val, index) => (
              <div id="img" key={index}>
                <p>{val.id}</p>
                <p>{val.brand}</p>
                <p>{val.category}</p>
                <p>{val.description}</p>
                <p>{val.discountPercentage}</p>
                <li key={product.id}>
              <Link to={`/product/${product.id}`} id="product-list-two">{product.title}</Link>
            </li>

                  <img src={val.thumbnail} alt="" />
                
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ecommerce;
