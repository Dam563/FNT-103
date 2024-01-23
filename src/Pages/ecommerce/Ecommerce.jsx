import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import axios from "axios";
import "../learnhooks/learnhooks.css";
import { Link } from "react-router-dom";
import './ecommerce.css';
import Footer from "../../components/footer/Footer";

const Ecommerce = () => {
        const [data, setData] = useState("");
        console.log("data", data);
      
        const getProductList = async () => {
          const response = await axios.get("https://dummyjson.com/products?limit=10");
          console.log("res", response.data.products);
          setData(response.data.products);
        };
      
        useEffect(() => {
          getProductList();
        }, []);
      
    return(
        <div>
            <Header/>
            <div className="hero-div">
                <h3 className="hero-content hero-a">Welcome to my shop</h3>
                <p className="hero-content">Discover a world of amazing products!</p>
                <div className="hero-content-btn">
                  <Link to="/productcategories">
                <button id="btn" style={{cursor: "pointer"}}>Shop now</button>
                </Link>
                </div>
            </div>
            <div>
                <h3 className="hero-content">Featured Products</h3>
      {/* <p>{data[0]?.title}</p> */}
      {data &&
        data?.map((val) => (
          <div
            key={val.id}>
            <p>{val.id}</p>
            <p>{val.brand}</p>
            <p>{val.category}</p>
            <p>{val.description}</p>
            <p>{val.discountPercentage}</p>
            <Link to={`/learnhooks/${val.id}`}>
              <div id="product_image">
                {val?.images.map((val, index) => (
                  <div key={index}>
                    <img src={val} alt="" />
                  </div>
                ))}
              </div>
            </Link>
          </div>
        ))}
    </div>
    <Footer/>
        </div>
    )
}

export default Ecommerce;