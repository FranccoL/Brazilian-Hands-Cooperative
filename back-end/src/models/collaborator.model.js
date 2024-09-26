import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Nome é essencial para o cadastro.",
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: "E-mail é essencial para cadastro",
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, forneça um endereço de email válido']
    },
    phone: {
      type: String,
      trim: true,
      required: "Whats é essencial para cadastro.",
      math:[/^\+?\d{10,15}$/, "Número de telefone inválido."]
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
    work: {
      type: String,
      trim: true,
      required: "Qual serviço vc pode prestar?",
    },
    equipment: {
      type: Boolean,
      default:false,
      required: "Marque se possui o não equipamentos",
    },
    whatEquipment: {
      type: String,
      trim: true,
    },
    shapeOfDisplacement: {
      type: String,
      trim: true,
      required: "Como você pode se deslocar para o serviço?",
      enum: ["Carro", "Moto", "Transporte Público", "A Pé", "Carro de Aplicativo"]
    },
  },
  {
    timestamps: true,
  }
);

const SchemaCollaborator = mongoose.models.Collaborator || mongoose.model("Collaborator", schema);

export default SchemaCollaborator;

/**
 * shape of displacement (onibus, carro, bike, ....)
 */
