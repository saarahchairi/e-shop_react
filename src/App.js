import React from "react";
import Articles from "./Components/Content/Article/Articles";
import Panier from "./Components/Content/Panier/Panier";
import "./app.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      argent: 20,
      monPanier: [],
      lesArticles: [
        { nom: "Coca-Cola", prix: 1, stock: 5, image: "images/coca.jpeg", achat:0 },
        { nom: "Fanta", prix: 1.5, stock: 5, image: "images/fanta.jpeg", achat:0 },
        { nom: "Ice-Tea", prix: 2, stock: 5, image: "images/ice_tea.jpeg", achat:0 }
      ]
    };
  }
  acheter = (produit) => {
    if (produit.stock >= 1 ) {
      if (this.state.argent > produit.prix) {
        this.state.argent -= produit.prix;
        produit.stock -= 1;
        produit.achat++;
        this.state.monPanier.push(produit.nom);
        this.setState({
          argent: this.state.argent,
          monPanier: this.state.monPanier
        })
      } else {
        alert("Plus d'argent");
      }
    } else {
      // this.changeStock(produit);
    }
  }
  changeStock = (produit) => {
    switch (produit.stock) {
      case 2:
        //bgc orange
        this.state.argent -= produit.prix;
        produit.stock -= 1;
        this.setState({
          argent: this.state.argent
        })
        break;
      case 1:
        //bgc rouge
        this.state.argent -= produit.prix;
        produit.stock -= 1;
        this.setState({
          argent: this.state.argent
        })
        break;
    }
  }
  rendre = (produit) => {
    this.state.argent += produit.prix;
    produit.stock += 1;
    produit.achat--;
    this.state.monPanier.pop(produit.nom);
    this.setState({
      argent: this.state.argent,
      monPanier: this.state.monPanier
    })
  }
  render() {
    return (
      <div>
        <h1>Mon argent: {this.state.argent}€</h1>
        <Articles data={this.state.lesArticles} acheter={this.acheter} />
        <h2>Mon panier:</h2>
        <Panier data={this.state.lesArticles} rendre={this.rendre} />
      </div>
    );
  }
}

export default App