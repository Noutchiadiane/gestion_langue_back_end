const { language, Sequelize } = require("./../models");
const Op = Sequelize.Op;
let self = {};
self.getAll = async (req, res) => {
  try {
    let data = await language.findAll();
    return res.json({
      status: true,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      data: error,
    });
  }
};

self.getWithItems = async (req, res) => {
  try {
    let data = await language.findAll({
      attributes: ["title", "speak", "understand", "read"],
      include: [
        {
          model: item,
          as: "items",
          attributes: ["title", "speak", "understand", "read"],
        },
      ],
    });
    return res.json({
      status: true,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      data: error,
    });
  }
};
self.get = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await language.findOne({
      attributes: ["name", "code","speak", "write", "read"],
      where: {
        id: id,
      },
    });
    return res.json({
      status: true,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      data: error,
    });
  }
};
self.search = async (req, res) => {
  try {
    let text = req.query.text;
    let data = await language.findAll({
      attributes: ["name", "code","speak", "write", "read"],
      where: {
        name: {
          [Op.like]: "%" + text + "%",
        },
      },
    });
    return res.json({
      status: true,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      data: error,
    });
  }
};
self.save = async (req, res) => {
  try {
    let body = req.body;
    let data = await language.create(body);
    return res.json({
      status: true,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      data: error,
    });
  }
};
self.update = async (req, res) => {
  try {
    let id = req.body.id;
    let body = req.body;
    let data = await language.update(
      body, {
      where: {
        id: id,
      },
    });
    console.log(data)
    return res.json({
      status: true,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      data: error,
    });
  }
};
self.delete = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await language.destroy({
      where: {
        id: id,
      },
    });
    return res.json({
      status: true,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      data: error,
    });
  }
};
module.exports = self;
