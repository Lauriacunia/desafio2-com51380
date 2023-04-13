const fs = require("fs");

class ProductManager {
  constructor(path) {
    this.path = path;
  }

  addProduct(newProduct) {
    if (
      !newProduct.title ||
      !newProduct.description ||
      !newProduct.price ||
      !newProduct.thumbnail ||
      !newProduct.code ||
      !newProduct.stock
    ) {
      throw new Error("Bad request. Missing fields");
    }

    let nextId = this.getNextId();
    newProduct.id = nextId;
    const allProductsArray = this.read();
    allProductsArray.push(newProduct);
    this.write(allProductsArray);
    //console.log("allProductsArray saved", allProductsArray);
  }

  getNextId() {
    let lastId = 0;
    let allProductsArray = this.read(this.file);
    if (allProductsArray.length > 0) {
      /**Miro el id del último producto y agrego 1 */
      lastId = allProductsArray[allProductsArray.length - 1].id;
    }
    return lastId + 1;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }

  getProducts() {
    return this.read();
  }

  updateProduct(id, newProduct) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new Error("Product not found");
    }
    const productExists = this.products.find(
      (product) => newProduct.code === product.code
    );
    if (productExists) {
      throw new Error("Bad request. Product code already exists");
    }
    if (
      !newProduct.title ||
      !newProduct.description ||
      !newProduct.price ||
      !newProduct.thumbnail ||
      !newProduct.code ||
      !newProduct.stock
    ) {
      throw new Error("Bad request. Missing fields");
    }

    product.title = newProduct.title;
    product.description = newProduct.description;
    product.price = newProduct.price;
    product.thumbnail = newProduct.thumbnail;
    product.code = newProduct.code;
    product.stock = newProduct.stock;

    return product;
  }

  deleteProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new Error("Product not found");
    }
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }

  deleteAllProducts() {
    const allProductsArray = this.read();
    allProductsArray.splice(0, allProductsArray.length);
    this.write(allProductsArray);
  }

  read() {
    let allProductsArray = [];
    try {
      let allProductsString = fs.readFileSync(this.path, "utf8");
      allProductsString.length > 0
        ? (allProductsArray = JSON.parse(allProductsString))
        : (allProductsArray = []);
    } catch (err) {
      console.log("Error en la lectura del archivo", err);
    }
    return allProductsArray;
  }

  write(allProductsArray) {
    // vuelvo a convertir el array en string para guardarlo en el archivo
    let allProductsString = JSON.stringify(allProductsArray);
    try {
      fs.writeFileSync(this.path, allProductsString);
    } catch (err) {
      console.log("Error en la escritura", err);
    }
  }
}

module.exports = ProductManager;
