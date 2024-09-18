import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: "Nome é essencial para o cadastro.",
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      require: "E-mail é essencial para cadastro",
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
    work: {
      type: String,
      trim: true,
      require: "Qual serviço vc pode prestar?",
    },
    equipment: {
      type: Boolean,
      require: "Marque se possui o não equipamentos",
    },
    whatEquipment: {
      type: String,
      trim: true,
    },
    shapeOfDisplacement: {
      type: String,
      trim: true,
      require: "Como vc pode se deslocar para o/os serviço/s",
    },
  },
  {
    timestamps: true,
  }
);

const SchemaCollaborator =  mongoose.models.Collaborator || mongoose.models("Collaborator", schema);

module.exports = SchemaCollaborator;

/**
 * shape of displacement (onibus, carro, bike, ....)
 */
