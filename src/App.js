import React, { useState } from "react";
import Articles from "./Components/Content/Article/Articles";
import Panier from "./Components/Content/Panier/Panier";
import "./app.css"


export default function App() {
  let { argent, setArgent } = useState(20);
  let monPanier = [];
  let lesArticles = [
    { nom: "Coca-Cola", prix: 1, stock: 5, image: "images/coca.jpeg" },
    { nom: "Fanta", prix: 1.5, stock: 5, image: "images/fanta.jpeg" },
    { nom: "Ice-Tea", prix: 2, stock: 5, image: "images/ice_tea.jpeg" }
  ];

  let mesArticles = lesArticles.map((article, i) => {
    return <Articles key={i} data={article} />
  })

  return (
    <div>
      <h1>Mon argent: {argent}€</h1>
      <div className="parent">
        {mesArticles}
      </div>
      <h2>Mon panier: {monPanier}</h2>
    </div>
  )
}


