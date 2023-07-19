const Sexo = require('../models/sexoModel.js')

const createSexo = async () => {
  try {
    const count = await Sexo.estimatedDocumentCount();

    if (count > 0) return;

    const values = await Promise.all([
      new Sexo({ sexo: "masculino" }).save(),
      new Sexo({ sexo: "femenino" }).save(),
      new Sexo({ sexo: "otro" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

module.exports = createSexo