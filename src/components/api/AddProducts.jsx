import axios from "axios";
import React from "react";

export const AddProducts = () => {
  const createproducts = async () => {
    //https://node5.onrender.com/addproducts
    const products = [{
      name: "charger",
      price: 599,
      description: "okok",
      colors: ["Red", "Green", "Yellow"],
      size: "m",
      isAvailable: true,
      unit: 10,
    },
    {
      name: "mobile",
      price: 599,
      description: "okok",
      colors: ["Red", "Green", "Yellow"],
      size: "m",
      isAvailable: true,
      unit: 10,
    },
    {
      name: "top",
      price: 599,
      description: "okok",
      colors: ["Red", "Green", "Yellow"],
      size: "m",
      isAvailable: true,
      unit: 10,
    }
]
    // const product = {
    //   name: "t-shirt",
    //   price: 599,
    //   description: "okok",
    //   colors: ["Red", "Green", "Yellow"],
    //   size: "m",
    //   isAvailable: true,
    //   unit: 10,
    // };

    const res = await axios.post(`https://node5.onrender.com/product/addproducts`,products);
    console.log(res.data)
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>ADD PRODUCTS</h1>
      <button onClick={createproducts}>CREATE</button>
    </div>
  );
};
