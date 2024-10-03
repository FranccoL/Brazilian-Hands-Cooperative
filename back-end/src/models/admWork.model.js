import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    client: {
      type: mongoose.Types.ObjectId,
      trim: true,
      ref: "Client",
      required:
        "Para gerar um serviço é nescessario o nome completo do cliente",
    },
    work: {
      type: String,
      enum: ["Serviço de limpeza", "Paisagismo e jardinagem", "Pintura"],
      required: "Escolha o modelo de serviço que será executado",
    },
    collaborator: {
      type: mongoose.Types.ObjectId,
      trim: true,
      ref: "Collaborator",
      required:
        "Para gerar um serviço é nescessario o nome completo do colaborador",
    },

    price: {
      type: Number,
      required: true,
      min: [1, "Preço deve ser maior ou igual a 1"],
    },
    date: {
      type: Date,
      required: "Coloque a data que o serciço será executado.",
      validator: {
        validate: function (date) {
          return date >= new Date();
        },
      },
    },
    status: {
      type: String,
      enum: ["Agendado", "Em andamento", "Concluído", "Cancelado"],
      default: "Agendado",
    },
  },
  {
    timestamps: true,
  }
);

const SchemaWork = mongoose.models.Works || mongoose.model("Works", schema);

export default SchemaWork;
