import Appointment from "../models/Appointment"
import User from "../models/User"

import { startOfDay, endOfDay, parseISO } from "date-fns"
import { Op } from "sequelize"

class ScheduleController {

	async index(req, res) {
		const checkUserProvider = await User.findOne({
			where: {
				id: req.userId,
				provider: true
			}
		})

		if (!checkUserProvider) {
			return res
				.status(401)
				.json({ error: "Usuário não é um prestador de serviço!" })
		}

		const { date } = req.query
		const parseDate = parseISO(date)
		const { page = 1 } = req.query
		const appointments = await Appointment.findAll({
			where: {
				provider_id: req.userId,
				canceled_at: null,
				date: {
					[Op.between]: [startOfDay(parseDate), endOfDay(parseDate)]
				}
			},
			limit: 20,
			offset: (page - 1) * 20,
			order: ["date"]
		})

		return res.json(appointments)
	}

}

export default new ScheduleController()
