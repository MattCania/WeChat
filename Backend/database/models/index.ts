import sequelize, { databaseInitialize } from "../database_connection.js";
import UserAccountsModel from "./UserAccounts.js";
import UserProfileModel from "./UserProfile.js";

const UserAccounts = UserAccountsModel(sequelize);
const UserProfile = UserProfileModel(sequelize);

export async function databaseSyncronize() {
	try {
		if (process.env.NODE_ENV === 'development') await databaseInitialize()
		await sequelize.authenticate()

		await sequelize.sync({ alter: true });

		console.log('Successful Syncronization!')
	} catch (error) {
		console.log('Syncronization Failed!', error)
	}
}

export { sequelize, UserAccounts, UserProfile };