const fs = require("fs");

const createFile = async (file_path) => {
  try {
    if (!fs.existsSync(file_path)) {
      console.log("El archivo no existe, entonces lo creo!");
      await fs.promises.writeFile(file_path, "", "utf8");
    }
  } catch (err) {
    console.log("Error en la creación del archivo", err);
  }
};

const productsToSave = [
  {
    title: "Remera",
    description: "Remera de algodon",
    price: 1000,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    code: "9740",
    stock: 10,
  },
  {
    title: "Pantalón",
    description: "Pantalón de jean",
    price: 2000,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    code: "5678",
    stock: 20,
  },
  {
    title: "Zapatillas",
    description: "Zapatillas de cuero",
    price: 3000,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    code: "9945",
    stock: 30,
  },
];

module.exports = { createFile, productsToSave };
