import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import React, { useState } from "react";
import AddItem from "./Components/AddItem";

function App() {
  const Products = [
    {
      price: 99999,
      type: "LG Air Conditioner",
      quantity: 0,
    },
    {
      price: 9999,
      type: "Redmi Air Conditioner",
      quantity: 0,
    },
  ];

  const [products, setproducts] = useState(Products);
  let [totalAmount, settotalAmount] = useState(0);
  let [numofitem, setnumofitem] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...products]; // we have mad a clone because we cannot directly update the state
    newProductList[index].quantity++;
    setproducts(newProductList);
    settotalAmount(totalAmount + newProductList[index].price);
    setnumofitem(numofitem + 1);
  };
  
  const decrementQuantity = (index) => {
    let newProductList = [...products];
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      setproducts(newProductList);
      settotalAmount(totalAmount - newProductList[index].price);
      setnumofitem(numofitem - 1);
    }
  };
  
  const removeItem = (index) => {
    let newProductList = [...products];
    let newtotalAmount = totalAmount;
    setnumofitem(numofitem - newProductList[index].quantity);
    newtotalAmount -= newProductList[index].price * newProductList[index].quantity;
    newProductList.splice(index, 1);
    setproducts(newProductList);
    settotalAmount(newtotalAmount);
    

  }

  const additem = (name, price) => {
    let newProductList = [...products];
    newProductList.push({
      type: name,
      price: price,
      quantity: 0
    })
    setproducts(newProductList);
  }

  const ResetData = () => {
    let newProductList = [...products];

    newProductList.map((product) => {
      product.quantity = 0;
    })
    setproducts(newProductList);
    settotalAmount(0);
    setnumofitem(0);
  }

  return (
    <>
      <Navbar numofitem={numofitem}/>
      <main className="container mt-5">
        {/* Corrected passing of state */}
        <AddItem additem={additem}/>
        <ProductList
          ProductList={products}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} ResetData={ResetData}/>
    </>
  );
}

export default App;
