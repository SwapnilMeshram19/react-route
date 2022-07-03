import React from "react";
import {Link} from "react-router-dom";

const AllProducts = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/Product")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.log(error));
  }, []);

  console.log(data);

  return (
    <div style={{width:"20%",textAlign:"center",margin:"auto"}}>
      <table border="1px solid black">
        <thead>
            <tr>
                <th>
                    Product Name
                </th>
                <th>
                    Price
                </th>
                <th>Click For More Details</th>
            </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td style={{cursor:"pointer"}} >
              <Link to={`/ProductDetails/${product.id}`}>More Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AllProducts;
