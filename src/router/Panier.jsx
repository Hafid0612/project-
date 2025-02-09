import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { data } from "./roudata";
export default function Panier() {
    const { ids } = useParams();

    const idList = ids.split(",");
    const productIds = idList.map(id => parseInt(id));
    const filteredData = productIds.map(id => {
      return data.filter(item => item.id === id);
  }).flat();   




    return (
        <div>
            <h1>panier page</h1> <br />
          <div>
      {filteredData.map((item,index) => (
        <div key={index}>
          <img src={item.img} alt={item.title} width={'200px'} />
          <h2>{item.title}</h2>
          <p>Price: {item.price}</p>
          <p>------------------------------------------------</p>
        </div> 
            ))}
    </div>
        </div>
    )
}