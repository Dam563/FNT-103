import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './productcategories.css';
import Header from "../../components/header/Header";

const Productcategories = () => {
  const[products, setProducts] = useState([]);
  // const [data, setData] = useState("");
  const[loading, setLoading] = useState(false);
  const[search, setSearch] = useState("");
  const[category, setCategory] = useState("");
  const[categories, setCategories] = useState([]);
  // console.log("data", data);

  const getProductCategory = async () => {
    let url = 'https://dummyjson.com/products';
    if (search.trim() && category){
      url += `?search=${search}&&category=${category}`;
    }else if(search.trim()) {
      url += `/search?q=${search}`;
    }else if (category) {
      url += `/category/${category}`;
    }
    setLoading(true); 
    // or setLoading(!Loading)
    try{
      const response = await axios.get(url);
    setProducts(response.data.products);
    setLoading(false);
    // toast notification of success message - e.g "Login successful."
    }catch(err){
      console.log("Error fetching products", err);
    //  toast notification of error message
    setLoading(false);
    }
  };

   const getCategories = async() => {
      const res = await axios.get("https://dummyjson.com/products/categories");
      setCategories(res.data);
      console.log(res.data)
    };

    useEffect(() => {
    getCategories();
  }, []);


  useEffect(() => {
    const delayDebounceFn = setTimeout(getProductCategory, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [search, category]);

  return (
    <div>
      <Header />
      <div id="product-div">
        <div id="input">
        <input type="text" placeholder="Search Products" value={search} onChange={(e) => setSearch(e.target.value)}/>
        
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category) => (
        <option value={category} key={category}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </option>
      ))}
        </select>
        </div>
        {loading ?(  <p>Loading</p> ) : ( 
          <ul className="product-list">
          {products && products.map((product) => (
            <li key={product.id}>
              <Link to={`/product/${product.id}`} id="product-list-two">{product.title}</Link>
            </li>
          ))}
        </ul>
  )}
        </div>
        </div>
      
  );
          }
export default Productcategories;
