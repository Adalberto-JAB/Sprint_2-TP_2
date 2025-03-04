const mogoose = require ('mongoose');

mogoose.connect('mongodb+srv://Grupo-04:grupo04@cursadanodejs.ls9ii.mongodb.net/Node-js')
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(error => console.error('Error al conectar a MongoDB:', error));
 