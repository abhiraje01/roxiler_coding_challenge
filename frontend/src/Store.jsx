import { useEffect, useState } from "react";
import axios from "axios";

function Store() {

  const [stores, setStores] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/stores")
      .then((res) => {
        console.log(res.data);
        setStores(res.data);
      });
  }, []);

  return (
    <div>
      <h2>Stores</h2>

      {stores.map((store) => (
        <div key={store.id}>
          <p>{store.name}</p>
          <p>{store.email}</p>
          <p>{store.address}</p>
        </div>
      ))}
    </div>
  );
}

export default Store;