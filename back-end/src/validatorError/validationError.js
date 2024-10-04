export const validationError = (res, err) => {
    const errorStr = String(err);

    // // Entrar quando o Mongoose der algum erro caso eu coloque validation do mongoose
    // if (errorStr.includes(`ValidationError:`)) {
    //   const cleanedMessage = errorStr.replace("ValidationError: ", "").replace(/:/g, '');
    //   return res.status(400).json({
    //     status: "Erro",
    //     statusMensagem: cleanedMessage,
    //     resposta: errorStr
    //   });
    // }
  
    // Erro definido manualmente por você
    if (errorStr.includes(`Error:`)) {
      return res.status(400).json({
        status: "Erro",
        statusMensagem: errorStr.replace("Error: ", ""),
        resposta: errorStr
      });
    }
  
    // Erro inesperado
    console.error(err);
    return res.status(500).json({
      status: "Erro",
      statusMensagem: "Houve um problema inesperado, tente novamente mais tarde.",
      resposta: errorStr
    });
  }
  
