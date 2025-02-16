import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
	database: process.env.DB_NAME,
	dialect: 'mysql',
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
})

const sequelize_authenticate = async () => {
	try {
		await sequelize.authenticate()
		console.log('Sequelize Connection and Authentication Succesful')
	} catch (error) {
		console.log('Error Sequelize Connection and Authentication', error)
	}
} 

sequelize_authenticate()

export default sequelize
