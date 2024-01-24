import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Description = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState({});

    const { id } = useParams();



    const getProductDetails = async () => {
        let url = `https://dummyjson.com/products/${id}`;
        // console.log(url);

        setLoading(true); 
        // or setLoading(!Loading)
        try{
          const response = await axios.get(url);
      
        setProducts(response.data);

        setLoading(false);
        // toast notification of success message - e.g "Login successful."
        }catch(err){
          console.log("Error fetching products", err);
        //  toast notification of error message
        setLoading(false);
        }
      };

      console.log(products);
    useEffect(() => {
        getProductDetails();
    }, [])
    

    return(
        <div>
            {loading ? (<p>Loading </p> ):(
                <div>
            <p>{products.id}</p>
            <p>{products.title}</p>
            <p>{products.brand}</p>
            <p>{products.category}</p>
            <p>{products.description}</p>
            <img src={products.thumbnail} alt="" />
            </div>
            )}
        </div>
    )
            }

export default Description;