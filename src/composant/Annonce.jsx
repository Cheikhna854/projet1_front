

const produits = [
  { id: 1, nom: 'Box',     prix: 8500,  image:'src/assets/p2.jpg'},
  { id: 2, nom: 'Maillot', prix: 7000,  image: 'src/assets/p6.jpg'},
  { id: 3, nom: 'Tshirt',  prix: 5000,  image: 'src/assets/p7.jpg'},
  { id: 4, nom: 'Parfum',  prix: 8500,  image: 'src/assets/p9.jpg'},
  { id: 5, nom: 'Montre',  prix: 15000, image: 'src/assets/p10.jpg' },
  { id: 6, nom: 'Djalabe', prix: 10000, image: 'src/assets/p11.jpg' },
];

function Produits() {
  return (
    <main>
      <div className="produits">
        {produits.map((produit) => (
          <div key={produit.id} className="card">
            <img src={produit.image} alt={produit.nom} />
            <h2>{produit.nom}</h2>
            <p>{produit.prix} FCFA</p>
            <h3 className="bg">Ajouter au panier</h3>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Produits;
