import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Nome é essencial para o cadastro",
    },
    phone: {
      type: String,
      trim: true,
      required: "Whats é essencial para cadastro.",
      match:[/^\+?\d{10,15}$/, "Número de telefone inválido."]
    },
    address: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      eircode: {
        type: String,
        minlength: [7, "Se não foi colocado espaço o mínimo são 7 caracteres."],
        maxlength: [8, "Se foi colocado espaço o máximo são 8 caracteres."]
      }
    },
    typeOfWork: {
      type: String,
      required: "Tipo de exercicio é essencial",
    },
    howFindCompany: {
      type: String,
      required: ".......",
    },
    indicatorName:{
      type:String
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