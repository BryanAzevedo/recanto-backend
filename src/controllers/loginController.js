const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const { email, senha } = request.body;

    const hospede = await connection("hospedes")
      .where("email", email)
      .where("senha", senha)
      .select("name")
      .first();

    if (!hospede) {
      return response
        .status(400)
        .json({ error: "Hospede não encontrado com esse ID" });
    }

    return response.json(hospede);
  },
};
