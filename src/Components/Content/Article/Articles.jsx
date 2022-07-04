import React from "react";
import "./article.css";

export default function Articles({data}) {
    return (
        <div>
            <div className="card">
                <div className="image">
                    <img src={data.image} alt="" />
                </div>
                <div className="text">
                    <h3>{data.nom}</h3>
                    <p>Prix: {data.prix}€</p>
                    <p>Stock: {data.stock} unités</p>
                    <button>Acheter</button>
                </div>
            </div>
        </div>
    );
}


