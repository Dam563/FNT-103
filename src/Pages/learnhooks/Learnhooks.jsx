import React, { useEffect, useState } from "react";
import axios from "axios";
import "./learnhooks.css";
import { Link } from "react-router-dom";

const Learnhooks = () => {
  const [data, setData] = useState("");
  console.log("data", data);

  const getProductList = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    console.log("res", response.data.products);
    setData(response.data.products);
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
      <div>
      {/* <p>{data[0]?.title}</p> */}
      {data &&
        data?.map((val) => (
          <div
            key={val.id}
            style={{
              backgroundColor: "grey",
              margin: "20px 0",
            }}
          >
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
  );
};

export default Learnhooks;
