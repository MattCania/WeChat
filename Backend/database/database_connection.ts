import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from "sequelize";
import mysql from 'mysql2/promise'

const sequelize = new Sequelize({
	database: process.env.DB_NAME,
	dialect: 'mysql',
	username: process.env.DB_USER,
	password: '',
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	logging: false,
})

export async function databaseInitialize () {
	try {

		const connection = await mysql.createConnection({
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: '',
		})

		await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME};`)
		await connection.end();
	} catch (error) {
		console.error("Error Creating Database", error)	
	}

}

export default sequelize
