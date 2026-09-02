import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 15,
    category: "Succulents",
    image: "/images/aloe-vera.jpg",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 20,
    category: "Indoor Plants",
    image: "/images/snake-plant.jpg",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 25,
    category: "Indoor Plants",
    image: "/images/peace-lily.jpg",
  },
  {
    id: 4,
    name: "Monstera",
    price: 30,
    category: "Tropical Plants",
    image: "/images/monstera.jpg",
  },
  {
    id: 5,
    name: "Jade Plant",
    price: 18,
    category: "Succulents",
    image: "/images/jade-plant.jpg",
  },
  {
    id: 6,
    name: "Spider Plant",
    price: 22,
    category: "Indoor Plants",
    image: "/images/spider-plant.jpg",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedItems((prev) => [...prev, product.id]);
  };

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="product-list-container">
      <h1>Paradise Nursery</h1>
      <h2>Our Plants</h2>

      {categories.map((category) => {
        const categoryProducts = products.filter(
          (product) => product.category === category
        );

        return (
          <section key={category} className="product-category">
            <h2>{category}</h2>

            <div className="product-grid">
              {categoryProducts.map((product) => (
                <div className="product-card" key={product.id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />

                  <h3>{product.name}</h3>

                  <p>${product.price.toFixed(2)}</p>

                  <button
                    type="button"
                    onClick={() => handleAddToCart(product)}
                    disabled={addedItems.includes(product.id)}
                  >
                    {addedItems.includes(product.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default ProductList;
