import React, { useEffect, useState } from "react";
import axios from "axios";

const Productcategories = () => {
  const [data, setData] = useState("");
  const[loading, setLoading] = useState(false);
  console.log("data", data);

  const getProductCategory = async () => {
    setLoading(true); 
    // or setLoading(!Loading)
    try{
    const response = await axios.get(
      "https://dummyjson.com/products/categories"
    );
    console.log("res", response.data);
    setData(response.data);
    setLoading(false);
    // toast notification of success message - e.g "Login successful."
    }catch(err){
      console.log(err);
    //  toast notification of error message
    setLoading(false);
    }
  };

  useEffect(() => {
    getProductCategory();
  }, []);

  return (
    <div>
        {loading ? <p>Loading</p> : data &&
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
