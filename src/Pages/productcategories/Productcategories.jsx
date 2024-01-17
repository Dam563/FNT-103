import React, { useEffect, useState } from "react";
import axios from "axios";

const Productcategories = () => {
  const [data, setData] = useState("");
  console.log("data", data);

  const getProductCategory = async () => {
    const response = await axios.get(
      "https://dummyjson.com/products/categories"
    );
    console.log("res", response.data);
    setData(response.data);
  };

  useEffect(() => {
    getProductCategory();
  }, []);

  return (
    <div>
      {data &&
        data?.map((val, index) => {
          return (
            <div key={index}>
              <p>{val}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Productcategories;
