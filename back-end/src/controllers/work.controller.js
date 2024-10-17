import mongoose from "mongoose";
import Works from "../models/admWork.model.js";
import Client from "../models/client.model.js";
import Collaborator from "../models/collaborator.model.js";
import { validationError } from "../validatorError/validationError.js";

export const getAllWorks = async (_, res) => {
  //#swagger.tags=['Works']
  try {
    const works = await Works.find()
      .populate("client")
      .populate("collaborator");

    return res.status(200).json(works);
  } catch (error) {
    validationError(res, error);
  }
};

export const getWorkByDay = async (req, res) => {
    //#swagger.tags=['Works']
  try {
    const { date } = req.query;

    // Verifica se a data é válida
    if (!date || isNaN(new Date(date).getTime())) {
      return res.status(400).json({ message: "Data inválida." });
    }

    // Convertendo a data para UTC para comparar corretamente com o banco de dados
    const startOfDay = new Date(new Date(date).setUTCHours(0, 0, 0, 0));
    const endOfDay = new Date(new Date(date).setUTCHours(23, 59, 59, 999));

    const works = await Works.find({
      date: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
      // Se quiser filtrar apenas os agendados, adicione esta linha:
      // status: "Agendado"
    })
      .populate("client", "name eircode") // Especificando os campos que queremos do cliente
      .populate("collaborator", "name"); // Especificando os campos que queremos do colaborador

    // Formatar os dados antes de enviar
    const formattedWorks = works.map((work) => ({
      client: work.client.name,
      eircode: work.client.eircode || "Endereço não cadastrado",
      collaborator: work.collaborator.name,
      work: work.work,
      price: work.price,
      status: work.status,
    }));

    return res.status(200).json(formattedWorks);
  } catch (error) {
    // validationError(res, error);
    console.error(error);
  }
};

export const getWorkByMonth = async (req, res) => {
  //#swagger.tags=['Works']
  try {
    const { month, year } = req.query; //query parameters, ex: ?year=2024&month=9

    if (!month || !year || isNaN(month) || isNaN(year)) {
      return res.status(400).json({ message: "Parâmetros de data inválidos" });
    }

    const startOfMonth = new Date(year, month - 1, 1);
    const endOfMonth = new Date(year, month, 0, 23, 59, 59, 999);

    const works = await Works.find({
      date: {
        $gte: startOfMonth,
        $lte: endOfMonth,
      },
    })
      .populate("Client")
      .populate("Collaborator");

    return res.status(200).json(works);
  } catch (error) {
    validationError(res, error);
  }
};

//Test
export const createWork = async (req, res) => {
  //#swagger.tags=['Works']
  try {
    const { client, work, collaborator, price, date, status } = req.body;

    // Função para formatar o valor monetário
    const formatPrice = (value) => {
      // Converte para string caso não seja
      let strValue = value.toString();
      
      // Remove todos os pontos e vírgulas extras, deixando apenas o último
      strValue = strValue.replace(/[.,]/g, function(match, offset, string) {
        return offset === string.lastIndexOf('.') || offset === string.lastIndexOf(',') ? match : '';
      });
      
      // Substitui vírgula por ponto para padronização
      strValue = strValue.replace(',', '.');
      
      if (strValue.includes('.')) {
        // Caso tenha ponto decimal
        let [reais, centavos] = strValue.split('.');
        
        // Garante que centavos tenha sempre 2 dígitos
        if (centavos.length === 1) {
          centavos += '0';
        } else if (centavos.length > 2) {
          centavos = centavos.substring(0, 2);
        }
        
        return parseFloat(`${reais}.${centavos}`);
      } else {
        // Caso não tenha ponto decimal, assume valor inteiro em reais
        return parseFloat(`${strValue}.00`);
      }
    };

    // Verifica se price foi fornecido
    if (!price) {
      return res.status(400).json({ message: "Preço é obrigatório" });
    }

    // Formata o preço
    const formattedPrice = formatPrice(price);

    // Verifica se o cliente é válido
    const isValidClient = await Client.findOne({ name: client });
    if (!isValidClient) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

    // Verifica se o tipo de trabalho (work) é válido
    if (
      !["Serviço de limpeza", "Paisagismo e jardinagem", "Pintura"].includes(
        work
      )
    ) {
      return res.status(400).json({ message: "Tipo de serviço inválido" });
    }

    // Busca colaboradores que realizam o serviço selecionado
    const availableCollaborators = await Collaborator.find({ work });
    if (availableCollaborators.length === 0) {
      return res.status(404).json({
        message: `Nenhum colaborador encontrado para o serviço de ${work}`,
      });
    }

    // Se não foi passado um colaborador específico, retorna a lista de colaboradores disponíveis
    if (!collaborator) {
      return res.status(200).json({
        message: `Colaboradores disponíveis para o serviço de ${work}`,
        collaborators: availableCollaborators,
      });
    }

    // Verifica se o colaborador escolhido está na lista de colaboradores disponíveis
    const isValidCollaborator = availableCollaborators.find(
      (coll) => coll.name === collaborator
    );

    if (!isValidCollaborator) {
      return res.status(404).json({
        message: `Colaborador selecionado não presta o serviço de ${work}`,
      });
    }

    // Cria o novo trabalho (work) com o preço formatado
    const newWork = await Works.create({
      client: isValidClient._id,
      collaborator: isValidCollaborator._id,
      work,
      price: formattedPrice, // Usa o preço formatado
      date,
      status,
    });

    return res.status(201).json(newWork);
  } catch (error) {
    validationError(res, error);
  }
};
export const updateWork = async (req, res) => {
  //#swagger.tags=['Works']
  try {
    const { id } = req.params;
    const { client, collaborator, ...updates } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "ID inválido" });
    }

    if (client) {
      return res.status(400).json({ message: "Cliente não pode ser alterado" });
    }

    if (collaborator) {
      const isValidCollaborator = await Collaborator.find({
        name: collaborator,
      });

      if (!isValidCollaborator.length) {
        return res.status(400).json({ message: "Colaborador não encontrado" });
      }

      const updatesWork = await Works.findByIdAndUpdate(
        id,
        {
          collaborator: isValidCollaborator[0]._id,
          ...updates,
        },
        {
          new: true,
        }
      );

      return res.status(200).json(updatesWork);
    }

    const updateWork = await Works.findByIdAndUpdate(id, updates, {
      new: true,
    });

    return res.status(200).json(updateWork);
  } catch (error) {
    validationError(res, error);
  }
};
