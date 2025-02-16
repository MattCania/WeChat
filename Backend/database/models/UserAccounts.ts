import { DataTypes, Model } from "sequelize"
import db from '../database_connection.js'

class UserAccounts extends Model {}

UserAccounts.init(
	{
		AccountId: {
			type:DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		EncryptedPassword: {
			type: DataTypes.STRING,
			allowNull: false
		}
		
	},
	{
		sequelize: db,
		tableName: 'UserAccounts'
	}
)

export default UserAccounts