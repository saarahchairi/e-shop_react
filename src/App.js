import React from "react";
import Articles from "./Components/Content/Article/Articles";
import "./app.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      argent: 20,
      monPanier: [],
      lesArticles: [
        { nom: "Coca-Cola", prix: 1, stock: 5, image: "images/coca.jpeg" },
        { nom: "Fanta", prix: 1.5, stock: 5, image: "images/fanta.jpeg" },
        { nom: "Ice-Tea", prix: 2, stock: 5, image: "images/ice_tea.jpeg" }
      ]
    };
  }
  acheter = (produit) => {
    // etat de mon bouton
    if (produit.stock >= 1 ) {
      if (this.state.argent > produit.prix) {
        this.state.argent -= produit.prix;
        produit.stock -= 1;
        this.setState({
          argent: this.state.argent
        })
      } 
    } else {
      // this.changeStock(produit);
      console.log("pas de stock");
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
  render() {
    return (
      <div>
        <h1>Mon argent: {this.state.argent}€</h1>
        <Articles data={this.state.lesArticles} acheter={this.acheter} />
        <h2>Mon panier:</h2>
        
      </div>
    );
  }
}

export default App