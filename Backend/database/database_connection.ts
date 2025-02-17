import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from "sequelize";
import mysql from 'mysql2/promise'

let sequelize : Sequelize;

const databaseInitialize = async () => {
	try {

		const connection = await mysql.createConnection({
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
		})

		await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME};`)
		await connection.end();
	} catch (error) {
		console.error("Error Creating Database")	
	}

}

const sequelizeInitialize = async () => {
	try {
		sequelize = new Sequelize({
			database: process.env.DB_NAME,
			dialect: 'mysql',
			username: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			host: process.env.DB_HOST,
			port: Number(process.env.DB_PORT),
			logging: false,
		})

		await sequelize.authenticate()
		console.log('Sequelize Connection and Authentication Succesful')
	} catch (error) {
		console.log('Error Sequelize Connection and Authentication', error)
	}
} 

export async function databaseSyncronize() {
	try {
		if (process.env.NODE_ENV === 'development') await databaseInitialize()
		await sequelizeInitialize()
		if (sequelize) {
			await sequelize.sync({alter:true})
			console.log('Successful Syncronization!')
		}
		else {
			throw new Error('Sequelize not initialized')
		}
	} catch (error) {
		console.log('Syncronization Failed!', error)
	}
}

export default sequelize
