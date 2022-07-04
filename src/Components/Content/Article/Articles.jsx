import React from "react";
import App from "../../../App";
import "./article.css"

class Articles extends React.Component {
    render() {
        console.log(this.props);
        return (

            <div className="parent">
                {this.props.data.map((produit) => {
                    return (
                        <div className="card" key={produit.nom}>
                            <div className="image">
                                <img src={produit.image} alt="" />
                            </div>
                            <div className="text">
                                <h3>{produit.nom}</h3>
                                <p>Prix: {produit.prix}€</p>
                                <p>Stock: {produit.stock} unités</p>        
                                {produit.stock >0 && <button onClick={() => this.props.acheter(produit)}>Acheter</button>}
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Articles
