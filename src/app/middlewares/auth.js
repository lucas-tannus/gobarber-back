import jwt from "jsonwebtoken"
import authConfig from "../../config/auth"
import { promisify } from "util"

export default async (req, res, next) => {
	const authHeader = req.headers.authorization

	if (!authHeader) {
		return res.status(401).json({ error: "Token não enviado!" })
	}

	const [, token] = authHeader.split(" ")

	try {
		const { id } = await promisify(jwt.verify)(token, authConfig.secret)

		req.userId = id

		return next()
	} catch(err) {
		return res.status(401).json({ error: "Token inválido" })
	}
}
