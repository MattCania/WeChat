import { DataTypes, Model } from "sequelize"
import db from '../database_connection'

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
		},
	},
	{
		sequelize: db,
		tableName: 'UserAccounts',
		timestamps: true

	}
)

export default UserAccounts