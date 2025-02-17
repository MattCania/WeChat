import { DataType, DataTypes, Model } from "sequelize";
import db from '../database_connection'

class UserProfile extends Model {}

UserProfile.init(
	{
	ProfileId: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	FirstName:{
		type: DataTypes.STRING
	},
	MiddleName:{
		type: DataTypes.STRING
	},
	LastName:{
		type: DataTypes.STRING
	},
	Birthday: {
		type: DataTypes.DATE
	},
	Address: {
		type: DataTypes.STRING
	},
	PlaceOfBirth: {
		type: DataTypes.STRING
	}
	},
	{
		sequelize: db,
		tableName: 'UserProfile',
		timestamps: true
	}
)

export default UserProfile