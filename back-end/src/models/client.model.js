import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: "Nome é essencial para o cadastro",
    },
    phone: {
      type: String,
      trim: true,
      require: "Whats é essencial para cadastro.",
    },
    address: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      eircode: {
        type: Number,
      },
    },
    typeOfWork: {
      type: String,
      require: "Tipo de exercicio é essencial",
    },
    howFindCompany: {
      type: String,
      require: ".......",
    },
    particularities: {
      type: String,
      //ex: serviço silencioso, ....
    },
  },
  {
    timestamps: true,
  }
);

const SchemaClient = mongoose.models.Client || mongoose.model("Client", schema);

export default SchemaClient;