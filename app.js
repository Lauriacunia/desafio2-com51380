const ProductManager = require("./productManager");
const { createFile, productsToSave } = require("./helpers");

/** 🗨 Éste archivo es el punto de entrada de mi app (main)
 * aqui requiero los archivos que necesito y los uso.
 */
console.log("🛸 Desafio 2 - Manejo de Archivos 🛸 ");
console.log("Tutora: Laura Acuña");

const path = "./products.txt";
createFile(path);
const myProductManager = new ProductManager(path);

/** 🗨 Agrego productos */
productsToSave.forEach((product) => {
  myProductManager.addProduct(product);
});

// /** 🗨 Listo todos los productos */
console.log("🔥 Mis productos son: ");
console.log(myProductManager.getProducts());

/** 🗨 Busco un producto por id */
console.log("🔥 Busco un producto por id: ");
console.log(myProductManager.getProductById(1));

// /** 🗨 Actualizo un producto */
const newProduct = {
  title: "Remera Updated",
  description: "Remera de algodon Updated",
  price: 8500,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
  code: "9740",
  stock: 45,
};
const response = myProductManager.updateProduct(1, newProduct);
console.log("🔥 Actualizo un producto: ");
console.log(response);

/**Elimino un producto por id = 2 */
const response2 = myProductManager.deleteProductById(2);
console.log("🔥 Elimino un producto por id: ");
console.log(response2);

/** 🗨 Elimino todos los productos */
//myProductManager.deleteAllProducts();
