const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

mogoose
  .connect(
    "mongodb+srv://Grupo-04:grupo04@cursadanodejs.ls9ii.mongodb.net/Node-js"
  )
  .then(() => console.log("Conexión exitosa a MongoDB"))
  .catch((error) => console.error("Error al conectar a MongoDB:", error));

const superheroSchema = new mongoose.Schema(
  {
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: "Desconocido" },
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: { type: Date, default: Date.now },
    creador: String,
  },
  { collection: "Grupo-04" }
);

const SuperHero = mongoose.model("SuperHero", superheroSchema);

async function insertSuperHero() {
  const hero = new SuperHero({
    nombreSuperHeroe: "Spiderman",
    nombreReal: "Peter Parker",
    edad: 25,
    planetaOrigen: "Tierra",
    debilidad: "Radioactiva",
    poderes: ["Trepar paredes", "Sentido arácnido", "Super fuerza", "Agilidad"],
    aliados: ["Ironman"],
    enemigos: ["Duende Verde"],
    creador: "Jesus",
  });
  await hero.save();
  console.log("Superhéroe insertado:", hero);
}

insertSuperHero();

async function updateSuperHero(nombreSuperHeroe) {
  const result = await SuperHero.updateOne(
    { nombreSuperHeroe: nombreSuperHeroe },
    { $set: { edad: 26 } }
  );
  console.log("Resultado de la actualización:", result);
}

// updateSuperHero("Spiderman");

async function deleteSuperHero(nombreSuperHeroe) {
  const result = await SuperHero.deleteOne({
    nombreSuperHeroe: nombreSuperHeroe,
  });
  console.log("Superheroe eliminado: ", result);
}

// deleteSuperHero("Spiderman");

async function findSuperHeroes() {
  const heroes = await SuperHero.find({ planetaOrigen: "Tierra" });
  console.log("Superheroes encontrados:", heroes);
}

findSuperHeroes();
