import { Link, useNavigate } from "react-router-dom";
import { data } from "./roudata";
import { useState, useEffect } from "react";

export default function HomePage() {
  const navigate = useNavigate();
  const navigatetop = useNavigate();
  const [productAdd, setProductAdd] = useState([]);



  console.log(productAdd);

  function AjouterAuPanier(id) {
    const product = data.find((p) => p.id === id);
    setProductAdd((prev) => [...prev, product]);
  }

  return (
    <div>
      <h1>AUTO Hafid</h1>
      <div
        style={{
          display: "flex", 
          gap: "20px",
        }}
      >
        {data.map((product) => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              <div
                style={{
                  backgroundImage: `url(${product.img})`,
                  width: "500px",
                  height: "300px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "12px",
                }}
              ></div>
            </Link>
            <h3>{product.title}</h3>
            <h3>{product.review}</h3>
            <p>{product.price} </p>
           {/* <button onClick={() => navigate(`/orders/${product.id}`)}>
            aj panier
            </button>  */}
            <button id={product.id} onClick={() => AjouterAuPanier(product.id)}>
                Ajouter au panier
            </button>
          </div>
        ))}
      </div>
      {/*      {productAdd.map((e) => <li>{e.title}</li>)}
*/}

      <button onClick={() => navigatetop(`/Panier/${productAdd.map((e) =>e.id)}`)}>go to panier</button>
    </div>
  );
}
