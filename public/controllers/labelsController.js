const Labels = require("../models").Labels;

module.exports.getLabels = (req, res) => {

	Labels.findAll({
		attributes: ['description'],
		raw: true
	}).then((result) => {

		res.status(200).send(result);

    }).catch(() => res.status(500).send({message: "Database Error"}));
};

module.exports.createLabel = (req,res) => {
    Labels.findOne({
        where: {
            description: req.body.description,
        },
        raw: true
    }).then((result) => {
        if (result) {
            res.status(302).send({message: "Label already exists"});
        }
        else {
            
            Labels.create({
                description: req.body.description
            }).then(() => res.status(201).send({message:  "Label created"}))
        }
    });
};

module.exports.deleteLabel = (req,res) => {

	Labels.findOne({
		where:{
            description: req.body.description,
            user_id: req.body.user_id
		},
		raw: true
	}).then((result) => {

		if(result){

			Labels.destroy({
				where:{
                    description: req.body.description,
                    user_id: req.body.user_id
				}
			}).catch(() => res.status(500).send({message: "Labels was not deleted"}));

			res.status(200).send({message: "Labels was deleted"});
		}
		else{
			res.status(404).send({message: "Labels was not found"});
		}

	});
};