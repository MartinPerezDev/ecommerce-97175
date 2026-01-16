const products = [
  {
    id: 1,
    name: "Teclado",
    description: "Teclado inalambrico",
    stock: 12
  },
  {
    id: 2,
    name: "Mouse",
    description: "Mouse Rojo",
    stock: 6
  },
  {
    id: 3,
    name: "Mouse inalambrico",
    description: "Mouse inalambrico Rojo",
    stock: 29
  }
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
};