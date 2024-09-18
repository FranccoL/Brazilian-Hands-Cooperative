import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: "Nome é essencial para o cadastro",
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      require: "Email é essencial para seu cadastro",
    },
    password: {
      type: String,
      trim: true,
      select: false,
      require: "Senha é essencial para seu cadastro",
    },
  },
  {
    timestamps: true,
  }
);

const SchemaAdm = mongoose.models.Adms || mongoose.model("Adms", schema);

module.exports = SchemaAdm;
