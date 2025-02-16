import sequelize from "../database_connection.js";

import UserAccounts from './UserAccounts.js'

const models = { UserAccounts }

export async function databaseSyncronize() {
	try {
		await sequelize.sync({alter:true})
		console.log('Successful Syncronization!')
	} catch (error) {
		console.log('Syncronization Failed!', error)
	}
}

export default models;