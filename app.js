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

// /** 🗨 Busco un producto por id */
// console.log("🔥 Busco un producto por id: ");
// console.log(myProductManager.getProductById(1));

// /** 🗨 Elimino todos los productos */
//myProductManager.deleteAllProducts();
