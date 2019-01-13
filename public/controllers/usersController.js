const Users = require("../models").Users;

module.exports.getUsers = (req, res) => {

	Users.findAll({
		attributes: ['id', 'firstname', 'lastname', 'email', 'isAdmin'],
		raw: true
	}).then((result) => {

		res.status(200).send(result);

	}).catch(() => res.status(500).send({message: "Database Error"}));
};

module.exports.createUser = (req,res) => {
    Users.findOne({
        where: {
            email: req.body.email
        },
        raw: true
    }).then((result) => {
        if (result) {
            res.status(302).send({message: "Email already registered"});
        }
        else {
            
            Users.create({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
				email: req.body.email,
				password: req.body.password,
                isAdmin: 0
            }).then(() => res.status(201).send({message:  "FF"}))
        }
    });
};

module.exports.getOneUser = (req, res) => {

	Users.findOne({
		attributes: ['id', 'firstname', 'lastname', 'email', 'isAdmin'],
		where: {
			email: req.params.email
		},
		raw:true
	}).then((result) => {

		if(result){
			res.status(200).send(result);
		} else {
			res.status(404).send({message:"User not found!"});
		}
	})
};

module.exports.updateUser = (req, res) => {

	Users.findOne({
		where: {
            email:req.params.email
        },
		raw: true
		}).then((result) => {

			if(result){
                let privacy = result.private;
                Users.update(
                    { firstname: req.body.firstname,
						lastname: req.body.lastname,
						email: req.body.email,
						isAdmin: req.body.isAdmin },
                    { where: {
							email:req.params.email
                    		 }
                    }
                ).catch(() => res.status(500).send({message: "Error"}));

                res.status(200).send({message: "Users data has changed"});

			} else {

				res.status(404).send({message: "Users was not found"});
			}
	}).catch(() => res.status(500).send({message: "Server error"}));

};