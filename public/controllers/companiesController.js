const Companies = require('../models').Companies;

module.exports.getCompanies = (req, res) => {

	Companies.findAll({
		attributes: ['name', 'location'],
		raw: true
	}).then((result) => {

		res.status(200).send(result);

    }).catch(() => res.status(500).send({message: "Database Error"}));
};