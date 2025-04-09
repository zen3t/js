let customers = [
  { id: 1, nome: "Devsamurai", site: "http://devsamurai.com.br" },
  { id: 2, nome: "G1oogle", site: "http://google.com.br" },
  { id: 3, nome: "Uol", site: "http://uol.com.br" },
];
class CustomersCrontollers {
  // Listagem de customers
  index(req, res) {
    return res.json(customers);
  }
  // recupera um customers
  show(req, res) {
    const id = parseInt(req.params.id);
    const customer = customers.find((item) => item.id === id);
    const status = customer ? 200 : 404;
    return res.status(status).json(customer);
  }

  // Cria um customers
  create(req, res) {
    const { nome, site } = req.body;
    const id = customers[customers.length - 1].id + 1;
    const newCustomer = { id, nome, site };
    customers.push(newCustomer);
    return res.status(201).json(newCustomer);
  }
  // Atualiza um customers
  update(req, res) {
    const id = parseInt(req.params.id);
    const { nome, site } = req.body;
    const index = customers.findIndex((item) => item.id === id);
    const status = index >= 0 ? 200 : 404;
    if (index >= 0) {
      customers[index] = { id: parseInt(id), nome, site };
    }
    return res.status(status).json(customers[index]);
  }
  // Deleta um customers
  destroy(req, res) {
    const id = parseInt(req.params.id);
    const index = customers.findIndex((item) => item.id === id);
    const status = index >= 0 ? 200 : 404;
    if (index >= 0) {
      customers.splice(index, 1);
    }
    return res.status(status).json();
  }
}

export default new CustomersCrontollers();
