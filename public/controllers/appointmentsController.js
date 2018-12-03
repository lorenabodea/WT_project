const Appointments = require("../models").Appointments;


module.exports.getAppointments = (req, res) => {

	Appointments.findAll({
		//attributes: ['description'],
		raw: true
	}).then((result) => {

		res.status(200).send(result);

    }).catch(() => res.status(500).send({message: "Database Error"}));


};


module.exports.createAppointment = (req,res) => {
    Appointments.findOne({
        where: {
            date: req.body.date,
            start_hour: req.body.start_hour,
            end_hour: req.body.end_hour,
            user_id: req.body.user_id,

        },
        raw: true
    }).then((result) => {
        if (result) {
            res.status(302).send({message: "You can't have two appointments at the same time"});
        }
        else {
            
            Appointments.create({
                date: req.body.date,
                title: req.body.title,
                private: 1,
                start_hour: req.body.start_hour,
                end_hour: req.body.end_hour,
                user_id: req.body.user_id,
            }).then(() => res.status(201).send({message:  "Appointment created"}))
        }
    });
};

module.exports.deleteAppointment = (req,res) => {

	Appointments.findOne({
		where:{
			date: req.body.date,
            start_hour: req.body.start_hour,
            end_hour: req.body.end_hour,
            user_id: req.body.user_id,	//will be req.session
		},
		raw: true
	}).then((result) => {

		if(result){

			Appointments.destroy({
				where:{
					date: req.body.date,
                    start_hour: req.body.start_hour,
                    end_hour: req.body.end_hour,
                    user_id: req.body.user_id,
				}
			}).catch(() => res.status(500).send({message: "Appointment was not deleted"}));

			res.status(200).send({message: "Appointment was deleted"});
		}
		else{
			res.status(404).send({message: "Appointment was not found"});
		}

	});
};

module.exports.changePrivacy = (req, res) => {

	Appointments.findOne({
		where: {
            date: req.body.date,
                    start_hour: req.body.start_hour,
                    end_hour: req.body.end_hour,
                    user_id: req.body.user_id,
        },
		raw: true
		}).then((result) => {

			if(result){
                let privacy = result.private;
                Appointments.update(
                    { private: !privacy },
                    { where: {date: req.body.date,
                            start_hour: req.body.start_hour,
                            end_hour: req.body.end_hour,
                            user_id: req.body.user_id,
                    		 }
                    }
                ).catch(() => res.status(500).send({message: "Error"}));

                res.status(200).send({message: "Appointment privacy has changed"});

			} else {

				res.status(404).send({message: "Appointment was not found"});
			}
	}).catch(() => res.status(500).send({message: "Server error"}));

};