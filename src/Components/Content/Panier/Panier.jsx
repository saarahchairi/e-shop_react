import React from 'react'
import "./panier.css"

class Panier extends React.Component{
    render(){
        return(
            <div>
                {this.props.data.map((produit) => {
                    return (
                        <div className="panier" key={produit.nom}>
                            {produit.stock <5 && <p>Produit: {produit.nom} || <label htmlFor="unite">Unités: {produit.achat} </label><button className='rendre' onClick={()=> this.props.rendre(produit)}>Rendre</button> </p>}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Panier