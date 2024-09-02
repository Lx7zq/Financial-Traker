const Financial = require("../model/financial.model");

//create a new Fianancial record
exports.create = async (req, res) => {
  const { userId, description, date,amount, category, paymentMethod } = req.body;

  const newRecord = { userId , description, date, amount, category, paymentMethod };
  await Financial.create(newRecord).then((data)=>{
    res.send(data);
  }).catch((error)=>{
    res.status(500).send({message: error.message || "some error occured while saveing the financial record",
    })
  })
};

//getall

exports.findAll = async (req,res) => {
    await Financial.findAll()
    .then((data) => {
        res.send(data);
    })
    .catch((error) =>{
        res.status(500).send({
            message: error.message || "Something error occured while  the record"
        })
    })
}

//getbyId
exports.getById = async (req, res) => {
  const Id = req.params.Id;
  await Financial.findByPk(Id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "No fond Financial with id" + Id });
      } else {
        res.send(data);
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Something error occured while creating the restaurant.",
      });
    });
};

//Get by userID 
exports.findAllByUserId = async (req, res) => {
  const userId = req.params.userId;
  await Financial.findAll({where:{userId:userId}})
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "No fond Finacial with id" + id });
      } else {
        res.send(data);
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Something error occured while creating the record.",
      });
    });
};


//Update a Financial
exports.update = async (req, res) => {
  const id = req.params.id;
  await Financial.update(req.body, {
    where: {
      Id: id,
    },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Financial was update successfully" });
      } else {
        res.send({
          message:
            "Cannot update Financial with id =" +
            id +
            ".Maybe Financial was not foud or req.body is empty!",
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Something error occured while creating the Financial.",
      });
    });
};


//delete a restaurant
exports.delete = async (req, res) => {
  const id = req.params.id;
  await Financial.destroy({ where: { Id: id } })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: "Financial was Delete successfully",
        });
      } else {
        res.send({
          message: "Cannot delete Financial with id =" + id + ".",
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Something error occured while creating the Financial.",
      });
    });
};