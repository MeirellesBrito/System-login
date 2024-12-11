class Controllers {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }
  // async getAll(req, res) {
  //   try {
  //     const listRegistros = await this.entidadeService.getAllRegistro();
  //     return res.status(200).json(listRegistros);
  //   } catch (error) {
  //     return res.status(500).json({ mensagem: "Erro ao obter os registros" });
  //   }
  // }
  async getAll(req, res) {
    try {
      const listaDeRegistros = await this.entidadeService.getAllRegistros();
      return res.status(200).json(listaDeRegistros);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ mensagem: "Erro ao obter os registros" });
    }
  }

  async create(req, res) {
    const dadosParaCriacao = req.body;
    try {
      const novoRegistro = await this.entidadeService.createRegistro(dadosParaCriacao);
      return res.status(201).json(novoRegistro); // Corrigido aqui
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
  
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const registro = await this.entidadeService.getRegistro(id);
      if (!registro) {
        return res.status(404).json({ erro: erro.message });
      }
      return res.status(200).json(registro);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const dadosAtualizados = req.body;
      const registroAtualizado = await this.entidadeService.updateRegistro(
        id,
        dadosAtualizados
      );
      if (!registroAtualizado) {
        return res.status(404).json({ erro: erro.message });
      }
      return res.status(200).json(registroAtualizado);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async deete(req, res) {
    try {
      const { id } = req.params;
      const registroDeletadp = await this.entidadeService.deleteRegistro(id);
      if (!registroDeletadp) {
        return res.status(404).json({ erro: erro.message });
      }
      return res.status(200).json({ message: "Registro deletado com sucesso" });
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = Controllers;
