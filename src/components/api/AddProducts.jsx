import axios from "axios";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

export const AddProducts = () => {

    const {register,handleSubmit,control}=useForm({defaultValues:{"product":[{name:"",price:0,description:"",color:[],size:"",isAvailable:true,unit:0}]}})
    const {fields,append,remove}=useFieldArray({control,name:"product"})

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

      <form onSubmit={handleSubmit}>
            {
                fields.map((_,index)=>{
                    return<div>
                        <div>
                            <label>NAME</label>
                            <input type="text" {...register(`product.${index}.name`)}></input>
                        </div>
                        <div>
                            <label>PRICE</label>
                            <input type="text" {...register(`product.${index}.price`)}></input>
                        </div>
                        <div>
                            <label>Description</label>
                            <input type="text" {...register(`product.${index}.description`)}></input>
                        </div>
                        <div>
                            <label>UNIT</label>
                            <input type="text" {...register(`product.${index}.unit`)}></input>
                        </div>
                        <div>
                            <label>ISAVAILABLE</label>
                            <input type="text" {...register(`product.${index}.isAvailable`)}></input>
                        </div>
                        <div>
                            <label>colors</label> <br></br>
                            RED : <input type="checkbox" {...register(`product.${index}.colors`)}></input>
                            GREEN : <input type="checkbox" {...register(`product.${index}.colors`)}></input>
                            BLUE : <input type="checkbox" {...register(`product.${index}.colors`)}></input>
                        </div>
                    </div>
                })
            }
            <div>
                <input type="submit"></input>
            </div>
      </form>
      <div>
        <button onClick={()=>{append()}}>ADD MORE</button>
      </div>
    </div>
  );
};
