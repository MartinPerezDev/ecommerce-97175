const getProducts = () => {
  return fetch("https://server-prueba-g4mc.onrender.com/api/products")
    .then((response)=> {
      return response.json();
    })
    .catch((error)=> {
      console.log(error);
    })
};

const getProductById = (productId) => {
  return fetch(`https://server-prueba-g4mc.onrender.com/api/products/${productId}`)
    .then((response)=> {
      return response.json();
    })
    .catch((error)=> {
      console.log(error);
    })
};

const addProduct = (newProduct) => {
  return fetch("https://server-prueba-g4mc.onrender.com/api/products", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newProduct)
  })
    .then((response)=> {
      return response.json();
    })
    .catch((error)=> {
      console.log(error)
    })
};

const deleteProductById = (productId) => {
  return fetch(`https://server-prueba-g4mc.onrender.com/api/products/${productId}`, {
    method: "DELETE"
  })
    .then((response)=> {
      return response.json();
    })
    .catch((error)=> {
      console.log(error);
    })
};

const setProductById = (productId, updates) => {
  return fetch(`https://server-prueba-g4mc.onrender.com/api/products/${productId}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updates)
  })
    .then((response)=> {
      return response.json();
    })
    .catch((error)=> {
      console.log(error);
    })
}

export { getProducts, getProductById, addProduct, deleteProductById, setProductById };