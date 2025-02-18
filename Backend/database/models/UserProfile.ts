import { DataTypes, Model, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
class UserProfile extends Model {
	static associate(models: any) {
		UserProfile.belongsTo(models.UserAccounts, { foreignKey: 'accountId' });
	}

}

UserProfile.init(
	{
	profileId: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	firstName:{
		type: DataTypes.STRING
	},
	middleName:{
		type: DataTypes.STRING
	},
	lastName:{
		type: DataTypes.STRING
	},
	birthday: {
		type: DataTypes.DATE
	},
	address: {
		type: DataTypes.STRING
	},
	placeOfBirth: {
		type: DataTypes.STRING
	}
	},
	{
		sequelize,
		tableName: 'UserProfile',
		timestamps: true
	}
)
return UserProfile;
}